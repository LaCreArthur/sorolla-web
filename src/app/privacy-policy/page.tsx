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
          Last Updated: June 25, 2025
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
              <strong>Unity LevelPlay (ironSource and Unity ads)</strong>: Used
              for serving advertisements in our games.
              <ul className="list-none ml-6 mt-2 space-y-1">
                <li>
                  <Link
                    href="https://developers.is.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline hover:no-underline"
                  >
                    ironSource Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://unity.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline hover:no-underline"
                  >
                    Unity ads Privacy Policy
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <strong>Meta</strong>
              <ul className="list-none ml-6 mt-2">
                <li>
                  <Link
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline hover:no-underline"
                  >
                    Facebook Privacy Policy
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <strong>Game Analytics</strong>: Used for usage analytics and
              crash reporting.
              <ul className="list-none ml-6 mt-2">
                <li>
                  <Link
                    href="https://www.gameanalytics.com/trust/privacy-notice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline hover:no-underline"
                  >
                    Game Analytics Privacy Policy
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

        {/* Data Deletion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Data Deletion
          </h2>
          <p className="text-foreground/80 mb-4">
            Since we do not store your data directly, data deletion requests
            should be directed to our third-party partners. Here&apos;s how to
            request data deletion:
          </p>
          <ul className="list-disc list-inside text-foreground/80 space-y-4">
            <li>
              <strong>Meta</strong>: Follow the instructions in the{" "}
              <Link
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:no-underline"
              >
                Facebook Privacy Policy
              </Link>{" "}
              or contact them through{" "}
              <Link
                href="https://help.meta.com/support/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:no-underline"
              >
                https://help.meta.com/support/privacy/
              </Link>
            </li>
            <li>
              <strong>ironSource</strong>: Email{" "}
              <Link
                href="mailto:privacy@ironsrc.com"
                className="text-brand underline hover:no-underline"
              >
                privacy@ironsrc.com
              </Link>{" "}
              or refer to their{" "}
              <Link
                href="https://developers.is.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:no-underline"
              >
                Privacy Policy
              </Link>{" "}
              for data deletion instructions.
            </li>
            <li>
              <strong>Game Analytics</strong>: Visit{" "}
              <Link
                href="https://www.gameanalytics.com/trust/privacy-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:no-underline"
              >
                Game Analytics Privacy Policy
              </Link>{" "}
              or email{" "}
              <Link
                href="mailto:ukoffice@gameanalytics.com"
                className="text-brand underline hover:no-underline"
              >
                ukoffice@gameanalytics.com
              </Link>{" "}
              (Please send your communication indicating &apos;F.A.O. Data
              Protection Officer&apos;)
            </li>
          </ul>
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
            deleting your data. To exercise these rights, please contact our
            third-party partners using the instructions provided above.
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
