import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — LiftIt.fit",
  description: "Privacy Policy for LiftIt.fit",
};

const LAST_UPDATED = "2 March 2026";
const CONTACT_EMAIL = "support@liftit.fit";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              1. Who we are
            </h2>
            <p>
              LiftIt.fit (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the LiftIt
              exercise tracking application available at{" "}
              <strong className="text-foreground">app.liftit.fit</strong>. This
              policy explains what personal data we collect, why we collect it,
              and how it is handled.
            </p>
            <p className="mt-3">
              We are the data controller for the personal data described in this
              policy. This policy is written in compliance with the{" "}
              <strong className="text-foreground">
                UK General Data Protection Regulation (UK GDPR)
              </strong>{" "}
              and the{" "}
              <strong className="text-foreground">Data Protection Act 2018</strong>.
              Where users are based in the European Economic Area, the EU GDPR
              also applies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              2. Data we collect
            </h2>
            <p>
              We collect only the minimum personal data necessary to provide you
              with an account:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong className="text-foreground">Email address</strong> —
                used to create and identify your account, and to contact you
                about your account if needed.
              </li>
              <li>
                <strong className="text-foreground">Name</strong> — used to
                personalise your experience within the app.
              </li>
            </ul>
            <p className="mt-3">
              Beyond these two fields, your workout data (exercises, sets, reps,
              volume, etc.) is stored solely to power the features of the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              3. Lawful basis for processing
            </h2>
            <p>
              Under UK/EU GDPR we must have a lawful basis to process your
              personal data. We rely on the following:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong className="text-foreground">
                  Performance of a contract
                </strong>{" "}
                (Article 6(1)(b)) — processing your email and name is necessary
                to provide you with the service you signed up for.
              </li>
              <li>
                <strong className="text-foreground">Legitimate interests</strong>{" "}
                (Article 6(1)(f)) — for transactional communications such as
                magic link sign-in emails and security notices.
              </li>
              <li>
                <strong className="text-foreground">
                  Soft opt-in (PECR Regulation 22)
                </strong>{" "}
                — as an existing customer, we may send you product and
                onboarding emails about LiftIt.fit. You can opt out at any time
                (see section 8).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              4. How we use your data
            </h2>
            <p>We use your email and name to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Create and maintain your account.</li>
              <li>
                Send transactional emails (e.g. magic link sign-in emails,
                account notices).
              </li>
              <li>
                Send onboarding and product emails — such as welcome messages
                and tips during your trial period — to help you get the most
                out of the app. These are sent under the PECR soft opt-in rule
                and you can unsubscribe at any time using the link in any such
                email.
              </li>
              <li>Respond to support requests you initiate.</li>
            </ul>
            <p className="mt-3">
              We do <strong className="text-foreground">not</strong> use your
              data for advertising, profiling, or any automated
              decision-making.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              5. Data sharing
            </h2>
            <p>
              We do <strong className="text-foreground">not</strong> sell,
              rent, or share your personal data with any third party, for any
              purpose. Your data stays with us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              6. Data retention
            </h2>
            <p>
              Your personal data is retained for as long as your account is
              active. If you delete your account, your email and name will be
              permanently deleted within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              7. Security
            </h2>
            <p>
              We take reasonable technical and organisational measures to
              protect your data against unauthorised access, loss, or
              disclosure. We do not store passwords — authentication is handled
              via magic links or OAuth (Google), so no credentials are held by
              us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              8. Your rights under UK/EU GDPR
            </h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong className="text-foreground">Access</strong> — request a
                copy of the data we hold about you.
              </li>
              <li>
                <strong className="text-foreground">Rectification</strong> —
                ask us to correct inaccurate data.
              </li>
              <li>
                <strong className="text-foreground">Erasure</strong> — ask us
                to delete your personal data (&ldquo;right to be forgotten&rdquo;).
              </li>
              <li>
                <strong className="text-foreground">
                  Restriction of processing
                </strong>{" "}
                — ask us to limit how we use your data.
              </li>
              <li>
                <strong className="text-foreground">Data portability</strong> —
                receive your data in a structured, machine-readable format.
              </li>
              <li>
                <strong className="text-foreground">Object</strong> — object to
                processing based on legitimate interests.
              </li>
              <li>
                <strong className="text-foreground">
                  Opt out of marketing emails
                </strong>{" "}
                — unsubscribe from onboarding and product emails at any time
                using the link in any such email, or by contacting us directly.
                Transactional emails (e.g. magic link sign-in emails) are not affected.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at the address in
              section 10. We will respond within 30 days. You also have the
              right to lodge a complaint with the{" "}
              <strong className="text-foreground">
                Information Commissioner&apos;s Office (ICO)
              </strong>{" "}
              at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              9. Changes to this policy
            </h2>
            <p>
              If we make material changes to this policy, we will update the
              &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the
              app after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              10. Contact
            </h2>
            <p>
              Questions or requests regarding your privacy can be sent to:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
