import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    const trimmed = email.trim().toLowerCase();
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmed)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Simple persistence mechanism:
    // - In development: write to a local file in the project directory.
    // - On Vercel: best-effort write to /tmp and always log to console.
    const isVercel = !!process.env.VERCEL;

    if (!isVercel) {
      const filePath = path.join(process.cwd(), "early-access-emails.txt");
      const line = `${new Date().toISOString()} - ${trimmed}\n`;
      fs.appendFileSync(filePath, line, { encoding: "utf8" });
    } else {
      const tmpPath = "/tmp/hellomember-early-access.txt";
      const line = `${new Date().toISOString()} - ${trimmed}\n`;
      try {
        fs.appendFileSync(tmpPath, line, { encoding: "utf8" });
      } catch {
        // ignore if /tmp is not writable for any reason
      }
    }

    // Always log so you can inspect emails via Vercel logs
    console.log("[early-access] new email:", trimmed);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[early-access] error:", error);
    return NextResponse.json(
      { error: "Unexpected error while saving email." },
      { status: 500 }
    );
  }
}

