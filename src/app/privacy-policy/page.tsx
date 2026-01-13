import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sorolla Privacy Policy",
  description:
    "Privacy policy for Sorolla games including data collection, third-party services, and your rights under GDPR and CCPA.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          Sorolla Privacy Policy
        </h1>
        <p className="text-foreground/60 italic mb-12">
          Last Updated: January 13, 2026
        </p>

        {/* Data Collection and Use */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Data Collection and Use
          </h2>
          <p className="text-foreground/80 mb-4">
            Our games use third-party services to provide advertisements and
            analyze user interactions. These services help us:
          </p>
          <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
            <li>
              Deliver ads that support the game&apos;s development and keep it
              free to play.
            </li>
            <li>
              Understand how users interact with our games to improve the
              experience.
            </li>
          </ul>
          <p className="text-foreground/80">
            <strong>We do not collect or store any personal data directly.</strong>{" "}
            However, our third-party partners may collect and process data as
            described below.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Third-Party Services
          </h2>
          <p className="text-foreground/80 mb-4">
            We use the following third-party services, which may collect data:
          </p>
          <ul className="list-disc list-inside text-foreground/80 space-y-4">
            <li>
              <strong>AppLovin MAX</strong>: Used for ad mediation and serving
              advertisements in our games.
              <ul className="list-none ml-6 mt-2">
                <li>
                  <Link
                    href="https://www.applovin.com/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline hover:no-underline"
                  >
                    AppLovin Privacy Policy
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <strong>Adjust</strong>: Used for attribution and marketing
              analytics.
              <ul className="list-none ml-6 mt-2">
                <li>
                  <Link
                    href="https://www.adjust.com/terms/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline hover:no-underline"
                  >
                    Adjust Privacy Policy
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <strong>Firebase</strong>: Used for analytics and crash reporting.
              <ul className="list-none ml-6 mt-2">
                <li>
                  <Link
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline hover:no-underline"
                  >
                    Firebase Privacy Policy
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <strong>GameAnalytics</strong>: Used for gameplay analytics.
              <ul className="list-none ml-6 mt-2">
                <li>
                  <Link
                    href="https://gameanalytics.com/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline hover:no-underline"
                  >
                    GameAnalytics Privacy Policy
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <strong>Meta</strong>: Used for analytics and ad optimization.
              <ul className="list-none ml-6 mt-2">
                <li>
                  <Link
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline hover:no-underline"
                  >
                    Meta Privacy Policy
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Data We Collect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Data We Collect
          </h2>
          <p className="text-foreground/80 mb-4">
            While we do not collect or store personal data ourselves, our
            third-party partners may collect the following types of data:
          </p>
          <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
            <li>
              <strong>Device Information</strong>: Device type, operating
              system, unique device identifiers.
            </li>
            <li>
              <strong>Usage Data</strong>: How you interact with the game (e.g.,
              levels completed, time spent).
            </li>
            <li>
              <strong>Ad Interaction Data</strong>: How you engage with ads
              (e.g., clicks, views).
            </li>
            <li>
              <strong>Location Data</strong>: Approximate location (e.g.,
              country) for ad targeting (if enabled).
            </li>
          </ul>
          <p className="text-foreground/80 mb-2">
            This data is used by our partners for:
          </p>
          <ul className="list-disc list-inside text-foreground/80 space-y-2">
            <li>Serving personalized advertisements.</li>
            <li>Measuring ad performance.</li>
            <li>Analyzing game usage to enhance features.</li>
          </ul>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Data Retention
          </h2>
          <p className="text-foreground/80">
            User data collected by our third-party partners is removed when no
            activity is detected for a continuous period of 25 months, or upon
            receiving a valid deletion request. Each partner may have their own
            retention policies as described in their respective privacy
            policies.
          </p>
        </section>

        {/* Data Deletion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Data Deletion
          </h2>
          <p className="text-foreground/80 mb-4">
            To request deletion of your data, you can contact us at{" "}
            <Link
              href="mailto:contact@sorolla.io"
              className="text-brand underline hover:no-underline"
            >
              contact@sorolla.io
            </Link>{" "}
            and we will coordinate with our partners on your behalf.
          </p>
          <p className="text-foreground/80 mb-4">
            You may also contact our third-party partners directly:
          </p>
          <ul className="list-disc list-inside text-foreground/80 space-y-4">
            <li>
              <strong>AppLovin</strong>: Email{" "}
              <Link
                href="mailto:dataprotection@applovin.com"
                className="text-brand underline hover:no-underline"
              >
                dataprotection@applovin.com
              </Link>
            </li>
            <li>
              <strong>Adjust</strong>: Email{" "}
              <Link
                href="mailto:privacy@adjust.com"
                className="text-brand underline hover:no-underline"
              >
                privacy@adjust.com
              </Link>{" "}
              or use their{" "}
              <Link
                href="https://www.adjust.com/forget-device/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:no-underline"
              >
                Forget Device tool
              </Link>
            </li>
            <li>
              <strong>Firebase</strong>: Manage your data through your{" "}
              <Link
                href="https://myaccount.google.com/data-and-privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:no-underline"
              >
                Google Account settings
              </Link>
            </li>
            <li>
              <strong>GameAnalytics</strong>: Email{" "}
              <Link
                href="mailto:privacy@gameanalytics.com"
                className="text-brand underline hover:no-underline"
              >
                privacy@gameanalytics.com
              </Link>
            </li>
            <li>
              <strong>Meta</strong>: Use their{" "}
              <Link
                href="https://www.facebook.com/help/contact/567360226613199"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:no-underline"
              >
                Privacy Support
              </Link>
            </li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-foreground/80">
            Our games are not intended for children under 16 years of age. We do
            not knowingly collect personal data from children under 16. If you
            are a parent or guardian and believe your child has provided
            personal data, please contact us at{" "}
            <Link
              href="mailto:contact@sorolla.io"
              className="text-brand underline hover:no-underline"
            >
              contact@sorolla.io
            </Link>{" "}
            so we can take appropriate action.
          </p>
        </section>

        {/* International Transfers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            International Data Transfers
          </h2>
          <p className="text-foreground/80">
            Data collected by our third-party partners may be transferred to and
            processed in countries outside the European Economic Area (EEA),
            including the United States. Our partners implement appropriate
            safeguards as required by applicable data protection laws to ensure
            your data remains protected.
          </p>
        </section>

        {/* Compliance with Privacy Laws */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Compliance with Privacy Laws
          </h2>
          <p className="text-foreground/80">
            We comply with applicable privacy laws, including the General Data
            Protection Regulation (GDPR) and the California Consumer Privacy Act
            (CCPA). If you are a resident of the European Economic Area (EEA) or
            California, you have rights such as accessing, correcting, or
            deleting your data. To exercise these rights, please contact us at{" "}
            <Link
              href="mailto:contact@sorolla.io"
              className="text-brand underline hover:no-underline"
            >
              contact@sorolla.io
            </Link>
            .
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Changes to This Policy
          </h2>
          <p className="text-foreground/80">
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated &quot;Last Updated&quot;
            date. We encourage you to review this policy periodically.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-foreground/80">
            If you have any questions about this privacy policy, please contact
            us at{" "}
            <Link
              href="mailto:contact@sorolla.io"
              className="text-brand underline hover:no-underline"
            >
              contact@sorolla.io
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
