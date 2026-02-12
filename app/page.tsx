"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("You're in. We'll be in touch soon.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        "Unable to register your email right now. Please try again in a moment."
      );
    }
  }

  return (
    <main className="page">
      <header className="nav">
        <div className="nav-left">
          <div className="logo-text">
            <span className="logo-title">Hellomember.gg</span>
            <span className="logo-subtitle">Universal CommunityOps</span>
          </div>
        </div>
        <div className="nav-right">
          <span className="nav-badge">MVP · Private Alpha</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="hero-pill">For community builders, ops & founders</span>
          <h1 className="hero-title">Start any community. Manage it smartly.</h1>
          <p className="hero-subtitle">
            Keep the drive. Onboard, profile, and engage your members effortlessly —
            whether you run a creator collective, a dev community, a DAO, or a local
            club.
          </p>

          <form className="hero-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="you@yourcommunity.org"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                required
              />
              <button
                type="submit"
                className="primary-cta"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Get early access"}
              </button>
            </div>
            <p className="helper-text">
              No spam. Just a short note when the MVP is ready for you.
            </p>
            {message && (
              <p
                className={`status-message ${
                  status === "error" ? "status-error" : "status-success"
                }`}
              >
                {message}
              </p>
            )}
          </form>

          <div className="hero-footnote">
            <span className="footnote-dot" />
            <span className="footnote-text">
              Keep Slack, Discord, Notion & your stack — Hellomember.gg just adds the
              CommunityOps layer on top.
            </span>
          </div>

          <div className="tool-strip">
            <span className="tool-strip-label">Plays nicely with</span>
            <div className="tool-strip-logos">
              <div className="tool-logo-item">
                <img src="/logos/slack.svg" alt="Slack" className="tool-logo" />
                <span>Slack</span>
              </div>
              <div className="tool-logo-item">
                <img src="/logos/discord.svg" alt="Discord" className="tool-logo" />
                <span>Discord</span>
              </div>
              <div className="tool-logo-item">
                <img src="/logos/notion.svg" alt="Notion" className="tool-logo" />
                <span>Notion</span>
              </div>
              <div className="tool-logo-item">
                <img src="/logos/airtable.svg" alt="Airtable" className="tool-logo" />
                <span>Airtable</span>
              </div>
              <div className="tool-logo-item">
                <img src="/logos/hubspot.svg" alt="HubSpot" className="tool-logo" />
                <span>HubSpot</span>
              </div>
              <div className="tool-logo-item">
                <img src="/logos/whatsapp.svg" alt="WhatsApp" className="tool-logo" />
                <span>WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-main friendly-card">
            <div className="friendly-header">
              <div className="avatar-stack">
                <span className="avatar-circle avatar-1">LM</span>
                <span className="avatar-circle avatar-2">SR</span>
                <span className="avatar-circle avatar-3">AK</span>
              </div>
              <div className="friendly-title">
                <span className="friendly-label">People finding their place</span>
                <span className="friendly-sub">
                  A few ways communities use Hellomember.gg
                </span>
              </div>
            </div>

            <div className="bubble-grid">
              <div className="bubble-card">
                <span className="bubble-tag">Onboarding</span>
                <p className="bubble-text">
                  “New members answer a few questions and land directly in the
                  right channel and role.”
                </p>
              </div>
              <div className="bubble-card">
                <span className="bubble-tag">Roles & profiles</span>
                <p className="bubble-text">
                  “One person can be mentor, organizer and sponsor without three
                  different accounts.”
                </p>
              </div>
              <div className="bubble-card">
                <span className="bubble-tag">Rhythm</span>
                <p className="bubble-text">
                  “We keep a simple ritual: weekly news, upcoming events, and
                  members to celebrate.”
                </p>
              </div>
            </div>
          </div>

          <div className="hero-card hero-card-secondary friendly-metrics">
            <div className="friendly-metric">
              <span className="friendly-dot" />
              <span className="friendly-metric-label">
                Set up once, reuse for every new cohort.
              </span>
            </div>
            <div className="friendly-metric">
              <span className="friendly-dot" />
              <span className="friendly-metric-label">
                Built for dev, creator, alumni, local and online communities.
              </span>
            </div>
            <div className="friendly-metric">
              <span className="friendly-dot" />
              <span className="friendly-metric-label">
                You keep your tools. Hellomember.gg adds the CommunityOps layer.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-header">
          <h2>Make CommunityOps feel light again.</h2>
          <p>
            Hellomember.gg gives you a universal layer to run onboarding, manage
            profiles, and keep everyone in the loop — without duct-taping five
            different tools.
          </p>
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-icon feature-icon-onboarding">
              <span>⬤</span>
            </div>
            <h3>Onboarding simple et modulaire</h3>
            <p>
              Compose des parcours d&apos;onboarding adaptés à chaque type de
              membre. Drag & drop les étapes, ajoute des questions, des consentements
              et des rituels d&apos;entrée — en quelques minutes.
            </p>
            <ul className="feature-list">
              <li>Flows par type de membre (core, lurkers, partenaires…)</li>
              <li>Questions dynamiques pour capturer le contexte utile</li>
              <li>Automations simples pour la suite (emails, rôles, tags)</li>
            </ul>
          </article>

          <article className="feature-card">
            <div className="feature-icon feature-icon-profiles">
              <span>▢</span>
            </div>
            <h3>Multiprofiling pour gérer différents rôles</h3>
            <p>
              Un membre peut être mentor, organisateur, sponsor ou alumni à la fois.
              Hellomember.gg gère ces rôles sans casser ton CRM ni tes espaces
              privés.
            </p>
            <ul className="feature-list">
              <li>Profils multi-rôles sur un seul compte</li>
              <li>Permissions claires sans friction côté expérience</li>
              <li>Vue 360° de la relation avec chaque personne</li>
            </ul>
          </article>

          <article className="feature-card">
            <div className="feature-icon feature-icon-dashboard">
              <span>✺</span>
            </div>
            <h3>Dashboard central : news, events, membres</h3>
            <p>
              Un cockpit lisible pour voir ce qui se passe dans ta communauté, sans
              changer toute ta stack actuelle.
            </p>
            <ul className="feature-list">
              <li>Fil unique pour news, updates et annonces</li>
              <li>Calendrier d&apos;événements et rituels récurrents</li>
              <li>Segments intelligents pour voir qui décroche</li>
              <li>Se branche sur les outils que tu utilises déjà</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <div>
            <h2>Be part of the first communities on Hellomember.gg</h2>
            <p>
              We&apos;re onboarding a small batch of communities to shape the MVP
              together. Tell us where to send your invite.
            </p>
          </div>
          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                name="email-cta"
                placeholder="community-ops@yourspace.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                required
              />
              <button
                type="submit"
                className="primary-cta secondary"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Request invite"}
              </button>
            </div>
            {message && (
              <p
                className={`status-message compact ${
                  status === "error" ? "status-error" : "status-success"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <span className="footer-logo">Hellomember.gg</span>
          <span className="footer-tagline">
            Universal CommunityOps platform (MVP in progress).
          </span>
        </div>
        <div className="footer-right">
          <a href="mailto:hello@hellomember.gg" className="footer-link">
            Contact
          </a>
          <a href="#" className="footer-link muted">
            Privacy
          </a>
          <a href="#" className="footer-link muted">
            Terms
          </a>
        </div>
      </footer>
    </main>
  );
}

