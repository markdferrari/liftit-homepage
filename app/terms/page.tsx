import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — LiftIt.fit",
  description: "Terms of Service for LiftIt.fit",
};

const LAST_UPDATED = "2 March 2026";
const CONTACT_EMAIL = "support@liftit.fit";

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              1. Acceptance of terms
            </h2>
            <p>
              By creating an account or using LiftIt.fit (&ldquo;the Service&rdquo;),
              you agree to be bound by these Terms of Service. If you do not
              agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              2. The Service
            </h2>
            <p>
              LiftIt.fit provides an exercise tracking application that allows
              you to log workouts, track volume, and monitor progress over time.
              We reserve the right to modify, suspend, or discontinue the
              Service at any time, with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              3. Accounts
            </h2>
            <p>
              You are responsible for maintaining the security of your account
              credentials. You must provide accurate information (name and email
              address) when registering. You may not share your account with
              others or create accounts on behalf of third parties without
              permission.
            </p>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              4. Acceptable use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use the Service for any unlawful purpose.</li>
              <li>
                Attempt to gain unauthorised access to any part of the Service
                or its infrastructure.
              </li>
              <li>
                Interfere with or disrupt the Service or its servers.
              </li>
              <li>
                Reverse-engineer or attempt to extract source code from the
                Service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              5. Subscriptions and billing
            </h2>
            <p>
              LiftIt.fit offers a free tier and optional paid subscriptions
              (Premium and Elite, where available). Paid plans are billed in
              advance on a monthly or annual basis. You may cancel at any time;
              cancellation takes effect at the end of the current billing period
              and no partial refunds are issued unless required by law.
            </p>
            <p className="mt-3">
              We reserve the right to change subscription prices. You will be
              notified at least 30 days before any price change takes effect.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              6. Your data
            </h2>
            <p>
              You own your workout data. We store it solely to provide the
              Service to you. See our{" "}
              <Link
                href="/privacy"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              for full details of how personal data is handled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              7. Health disclaimer
            </h2>
            <p>
              LiftIt.fit is a logging and tracking tool, not a medical or
              fitness professional. Nothing in the Service constitutes medical
              advice. Always consult a qualified professional before starting or
              modifying an exercise programme, particularly if you have a health
              condition or injury. You use the Service at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              8. Disclaimer of warranties
            </h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, express or implied. We do not warrant that
              the Service will be uninterrupted, error-free, or free of harmful
              components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              9. Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, LiftIt.fit
              shall not be liable for any indirect, incidental, special, or
              consequential damages arising out of your use of, or inability to
              use, the Service. Our total liability to you shall not exceed the
              amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              10. Governing law
            </h2>
            <p>
              These terms are governed by the laws of England and Wales. Any
              disputes shall be subject to the exclusive jurisdiction of the
              courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              11. Changes to these terms
            </h2>
            <p>
              We may update these terms from time to time. We will update the
              &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the
              Service after changes are posted constitutes acceptance of the
              revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              12. Contact
            </h2>
            <p>
              Questions about these terms can be sent to:{" "}
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
