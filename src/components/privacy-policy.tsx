"use client";

import { MotionContainer } from "motion-provider";

const policies = [
  {
    title: "No Data Collection",
    description:
      "Hush operates entirely on your device. We do not collect, store, or transmit any personal data, notification content, or usage analytics.",
  },
  {
    title: "Local Processing Only",
    description:
      "All notification filtering and categorization happens on-device. Your notifications never leave your phone.",
  },
  {
    title: "No Account Required",
    description:
      "Hush works out of the box — no sign-up, no login, no email. There is nothing to link back to you.",
  },
  {
    title: "Minimal Permissions",
    description:
      "Hush only requests notification access, which is required to manage your notifications. No contacts, no location, no storage.",
  },
  {
    title: "No Third-Party Sharing",
    description:
      "We do not share, sell, or provide any user information to third parties. There is no data to share.",
  },
  {
    title: "Open & Transparent",
    description:
      "Have questions about our privacy practices? Reach out anytime — we believe in full transparency.",
  },
];

export const PrivacyPolicy = () => (
  <section id="privacy" className="w-full max-w-4xl mx-auto py-20 px-4">
    <MotionContainer
      animation={{ mode: "fadeIn", delay: 0.2, transition: "gentle", duration: 1 }}
      elementType="div"
      className="flex flex-col gap-10"
    >
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h2>
        <p className="mt-3 text-muted text-base max-w-xl mx-auto">
          Your privacy is not just a feature — it is the foundation Hush is built on.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {policies.map((policy) => (
          <div
            key={policy.title}
            className="rounded-2xl border border-foreground/10 bg-surface/50 p-5"
          >
            <h3 className="font-semibold text-foreground mb-1">{policy.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{policy.description}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted text-center">
        Last updated: March 2026. This policy applies to the Hush Android application.
      </p>
    </MotionContainer>
  </section>
);
