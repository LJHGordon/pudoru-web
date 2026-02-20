import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Pudoru Inc.",
  description: "Privacy Policy for Pudoru Inc. and its applications.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/pudoru-logo.png"
                alt="Pudoru"
                width={32}
                height={32}
                className="mix-blend-multiply"
              />
              <span className="font-semibold text-lg text-text-primary">
                Pudoru Inc.
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="text-sm text-text-muted mb-8">
            Last updated: February 20, 2026
          </p>

          <p>
            This Privacy Policy explains how Pudoru Inc. (&quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;) collects, uses, discloses, and
            safeguards your information when you use our mobile applications and
            services, including Cozina. We are committed to protecting your
            privacy and being transparent about our data practices.
          </p>

          <h2>Data Controller</h2>
          <p>The data controller responsible for your personal data is:</p>
          <div className="bg-surface p-4 rounded-lg mb-4">
            <p className="mb-1">
              <strong>Pudoru Inc.</strong>
            </p>
            <p className="mb-1">403 Bury Lane</p>
            <p className="mb-1">West Vancouver, BC, Canada V7S 1K4</p>
            <p className="mb-1">
              Privacy Contact:{" "}
              <a href="mailto:founder@pudoru.com">founder@pudoru.com</a>
            </p>
            <p className="text-sm text-text-muted mt-2">
              <strong>EU Representative:</strong> For EU-related privacy
              inquiries, please contact{" "}
              <a href="mailto:founder@pudoru.com">founder@pudoru.com</a>
            </p>
          </div>

          <h2>Information We Collect</h2>
          <p>
            When you use our applications, we may collect the following
            information:
          </p>
          <ul>
            <li>
              <strong>Account Information:</strong> Email address and name
              provided during sign-in (via Apple, Google, or email
              authentication)
            </li>
            <li>
              <strong>User ID:</strong> A unique identifier for your account
            </li>
            <li>
              <strong>User Content:</strong> Content you create, import, and save
              within our applications
            </li>
            <li>
              <strong>Purchase History:</strong> Transaction identifiers to
              verify your subscription status (we do not store payment card
              information)
            </li>
            <li>
              <strong>Communication Preferences:</strong> Your marketing opt-in
              status for receiving promotional communications
            </li>
          </ul>

          <h3>Categories of Personal Information (CCPA)</h3>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-border">
              <thead className="bg-surface">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold border-b border-border">
                    Category
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold border-b border-border">
                    Examples
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold border-b border-border">
                    Collected
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="px-4 py-2 border-b border-border">
                    Identifiers
                  </td>
                  <td className="px-4 py-2 border-b border-border">
                    Name, email, user ID
                  </td>
                  <td className="px-4 py-2 border-b border-border">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-border">
                    Commercial Information
                  </td>
                  <td className="px-4 py-2 border-b border-border">
                    Subscription status, purchase history
                  </td>
                  <td className="px-4 py-2 border-b border-border">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-border">
                    Internet Activity
                  </td>
                  <td className="px-4 py-2 border-b border-border">
                    Ad interactions (impressions, clicks)
                  </td>
                  <td className="px-4 py-2 border-b border-border">
                    By AdMob SDK**
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-border">
                    Geolocation
                  </td>
                  <td className="px-4 py-2 border-b border-border">
                    Physical location
                  </td>
                  <td className="px-4 py-2 border-b border-border">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-border">
                    Audio/Visual
                  </td>
                  <td className="px-4 py-2 border-b border-border">
                    Images, voice commands
                  </td>
                  <td className="px-4 py-2 border-b border-border">
                    On-device only*
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-border">
                    Biometric
                  </td>
                  <td className="px-4 py-2 border-b border-border">
                    Fingerprints, face geometry
                  </td>
                  <td className="px-4 py-2 border-b border-border">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Professional/Employment</td>
                  <td className="px-4 py-2">Job title, employer</td>
                  <td className="px-4 py-2">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-muted">
            *Voice commands during cooking sessions are processed entirely on
            your device using Apple&apos;s on-device speech recognition. Voice
            input for the AI chat assistant may use Apple&apos;s speech
            recognition services to improve accuracy; see{" "}
            <a
              href="https://support.apple.com/en-us/102124"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&apos;s Siri &amp; Dictation privacy policy
            </a>{" "}
            for details.
          </p>
          <p className="text-sm text-text-muted">
            **The Google AdMob SDK collects ad interaction data for
            non-personalized ad serving. This data is not linked to your
            identity. See the &quot;Third-Party Advertising&quot; section for
            details.
          </p>

          <h3>Sources of Personal Information</h3>
          <p>We collect personal information from:</p>
          <ul>
            <li>
              <strong>Directly from you:</strong> When you create an account, add
              content, or contact support
            </li>
            <li>
              <strong>Authentication providers:</strong> Apple Sign-In or Google
              Sign-In (name and email only)
            </li>
            <li>
              <strong>Apple App Store:</strong> Subscription verification
              (transaction IDs only)
            </li>
          </ul>

          <h2>Information We Do NOT Collect</h2>
          <p>We want to be clear about what we do not collect:</p>
          <ul>
            <li>
              <strong>No First-Party Analytics:</strong> We do not operate our
              own analytics or behavioral tracking systems
            </li>
            <li>
              <strong>No Location Data:</strong> We do not access or store your
              location
            </li>
            <li>
              <strong>No Cross-App Tracking:</strong> We do not track you across
              other apps or websites. Ads served in our applications are
              non-personalized.
            </li>
          </ul>

          <h2>Third-Party Advertising</h2>
          <p>
            Some of our applications display non-personalized ads via the Google
            AdMob SDK. To serve and optimize these ads, the AdMob SDK may
            automatically collect the following data:
          </p>
          <ul>
            <li>
              <strong>Device Identifiers:</strong> Used for frequency capping and
              ad fraud prevention (not for behavioral profiling)
            </li>
            <li>
              <strong>Crash &amp; Performance Data:</strong> Used by the AdMob
              SDK for diagnostics and ad delivery optimization
            </li>
            <li>
              <strong>Ad Interaction Data:</strong> Ad impressions and clicks,
              used to measure ad performance
            </li>
          </ul>
          <p>
            This data is collected by Google, not by Pudoru Inc. It is{" "}
            <strong>not linked to your identity</strong> and is{" "}
            <strong>not used for tracking</strong> or personalized advertising.
            We request only non-personalized ads (NPA). For details on
            Google&apos;s data practices, see the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </p>
          <p>Pro subscribers do not see ads.</p>

          <h2>Legal Basis for Processing (GDPR)</h2>
          <p>
            Under the General Data Protection Regulation (GDPR), we process your
            personal data based on the following legal grounds:
          </p>
          <ul>
            <li>
              <strong>Contractual Necessity (Article 6(1)(b)):</strong>{" "}
              Processing your account data, user content, and subscription
              information is necessary to provide our services to you
            </li>
            <li>
              <strong>Consent (Article 6(1)(a)):</strong> We process your data
              for marketing communications only with your explicit opt-in
              consent. You may withdraw consent at any time via your app settings
            </li>
            <li>
              <strong>Legal Obligation (Article 6(1)(c)):</strong> We may retain
              certain transaction records to comply with tax and accounting
              requirements
            </li>
            <li>
              <strong>Legitimate Interests (Article 6(1)(f)):</strong> We process
              data as necessary to protect against fraud and ensure security,
              where such interests are not overridden by your rights
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect for the following business
            purposes:
          </p>
          <ul>
            <li>
              <strong>Providing Services:</strong> Storing and syncing your data
              across devices
            </li>
            <li>
              <strong>Authentication:</strong> Verifying your identity and
              securing your account
            </li>
            <li>
              <strong>Subscription Management:</strong> Verifying your
              subscription status and managing access to premium features
            </li>
            <li>
              <strong>Customer Support:</strong> Responding to your inquiries and
              resolving issues
            </li>
            <li>
              <strong>Security:</strong> Protecting against unauthorized access,
              fraud, and abuse
            </li>
            <li>
              <strong>Communications:</strong> Sending service-related
              notifications and, with your consent, marketing communications
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>We retain your personal data as follows:</p>
          <ul>
            <li>
              <strong>Active Account Data:</strong> Retained for as long as your
              account remains active
            </li>
            <li>
              <strong>After Account Deletion:</strong> All personal data is
              permanently deleted within 30 days of account deletion, except as
              required by law
            </li>
            <li>
              <strong>Transaction Records:</strong> Subscription transaction
              identifiers may be retained for up to 7 years to comply with tax
              and accounting obligations
            </li>
            <li>
              <strong>Support Communications:</strong> Records of support
              interactions may be retained for up to 2 years for quality
              assurance
            </li>
          </ul>

          <h2>International Data Transfers</h2>
          <p>
            Your personal data is stored on servers located in the United States.
            If you are located outside the United States, please be aware that
            your data will be transferred to and processed in the United States.
          </p>
          <p>
            For transfers from the European Economic Area (EEA), United Kingdom,
            or Switzerland, we rely on:
          </p>
          <ul>
            <li>
              <strong>Standard Contractual Clauses (SCCs):</strong> We use
              EU-approved contractual clauses to ensure adequate protection for
              international data transfers
            </li>
            <li>
              <strong>EU-U.S. Data Privacy Framework:</strong> Our service
              providers may be certified under the EU-U.S. Data Privacy Framework
              where applicable
            </li>
          </ul>
          <p>
            You may obtain a copy of the relevant transfer mechanisms by
            contacting us at{" "}
            <a href="mailto:founder@pudoru.com">founder@pudoru.com</a>.
          </p>

          <h2>Third-Party Services</h2>
          <p>Our applications integrate with the following third-party services:</p>
          <ul>
            <li>
              <strong>Supabase:</strong> Database hosting and authentication
              infrastructure (
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong>Apple Sign-In / Google Sign-In:</strong> Authentication
              providers for secure account access
            </li>
            <li>
              <strong>Apple App Store:</strong> Subscription and payment
              processing (we do not receive or store your payment card details)
            </li>
            <li>
              <strong>Google AdMob:</strong> Non-personalized ad serving. The
              AdMob SDK may collect device identifiers, crash data, performance
              data, and ad interaction data. See the &quot;Third-Party
              Advertising&quot; section above for details. (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong>AI Services (Optional):</strong> If you provide your own
              API key in settings, your queries may be processed by OpenAI,
              Anthropic, or Google AI. These are opt-in and require your explicit
              configuration. We do not store or have access to your API keys
              beyond your local device.
            </li>
          </ul>

          <h2>Your Privacy Rights</h2>

          <h3>Rights for All Users</h3>
          <p>Regardless of your location, you have the right to:</p>
          <ul>
            <li>
              <strong>Access Your Data:</strong> Export your data via in-app
              settings
            </li>
            <li>
              <strong>Delete Your Account:</strong> Permanently remove all your
              data via in-app settings
            </li>
            <li>
              <strong>Data Portability:</strong> Receive your data in a
              machine-readable format (JSON)
            </li>
            <li>
              <strong>Update Your Information:</strong> Correct your profile
              information via in-app settings
            </li>
            <li>
              <strong>Manage Communications:</strong> Opt out of marketing
              communications via in-app settings
            </li>
          </ul>

          <h3>Additional Rights for EU/EEA Users (GDPR)</h3>
          <p>
            If you are located in the European Union or EEA, you also have the
            right to:
          </p>
          <ul>
            <li>
              <strong>Right to Rectification (Article 16):</strong> Request
              correction of inaccurate personal data
            </li>
            <li>
              <strong>Right to Erasure (Article 17):</strong> Request deletion of
              your personal data (&quot;right to be forgotten&quot;)
            </li>
            <li>
              <strong>Right to Restriction (Article 18):</strong> Request
              restriction of processing in certain circumstances
            </li>
            <li>
              <strong>Right to Object (Article 21):</strong> Object to processing
              of your personal data based on legitimate interests
            </li>
            <li>
              <strong>Right to Withdraw Consent (Article 7):</strong> Withdraw
              consent for processing at any time (for consent-based processing)
            </li>
            <li>
              <strong>Right to Lodge a Complaint:</strong> You have the right to
              lodge a complaint with a supervisory authority, in particular in
              the EU Member State of your habitual residence, place of work, or
              place of the alleged infringement
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:founder@pudoru.com">founder@pudoru.com</a>. We will
            respond within 30 days.
          </p>

          <h3>Additional Rights for California Residents (CCPA/CPRA)</h3>
          <p>
            If you are a California resident, the California Consumer Privacy Act
            (CCPA) as amended by the California Privacy Rights Act (CPRA)
            provides you with additional rights:
          </p>
          <ul>
            <li>
              <strong>Right to Know:</strong> Request the categories and specific
              pieces of personal information we have collected about you in the
              past 12 months
            </li>
            <li>
              <strong>Right to Delete:</strong> Request deletion of your personal
              information
            </li>
            <li>
              <strong>Right to Correct:</strong> Request correction of inaccurate
              personal information
            </li>
            <li>
              <strong>Right to Opt-Out of Sale/Sharing:</strong> See &quot;Do Not
              Sell or Share My Personal Information&quot; section below
            </li>
            <li>
              <strong>
                Right to Limit Use of Sensitive Personal Information:
              </strong>{" "}
              We do not use or disclose sensitive personal information for
              purposes other than providing our services
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not
              discriminate against you for exercising your privacy rights
            </li>
          </ul>
          <p>
            <strong>Authorized Agents:</strong> You may designate an authorized
            agent to make requests on your behalf. The agent must provide proof
            of authorization and we may verify your identity directly.
          </p>
          <p>
            To exercise your California privacy rights, contact us at{" "}
            <a href="mailto:founder@pudoru.com">founder@pudoru.com</a> or use the
            in-app privacy controls.
          </p>

          <h2>Do Not Sell or Share My Personal Information</h2>
          <p>
            <strong>
              We do not sell your personal information. We do not share your
              personal information for cross-context behavioral advertising.
            </strong>
          </p>
          <p>
            As defined by the California Consumer Privacy Act (CCPA) and
            California Privacy Rights Act (CPRA), Pudoru Inc. does not sell
            personal information to third parties, nor do we share personal
            information with third parties for targeted advertising purposes.
          </p>
          <p>
            We do not offer financial incentives for the collection, sale,
            retention, or deletion of personal information.
          </p>

          <h2>Automated Decision-Making</h2>
          <p>
            We do not use your personal data for automated decision-making that
            produces legal effects or similarly significant effects concerning
            you. Any AI features in our applications are used to assist with
            content processing and do not make decisions about you.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our applications are not intended for children under 13 years of age
            (or 16 years in certain jurisdictions). We do not knowingly collect
            personal information from children. If we learn that we have
            collected personal information from a child without parental consent,
            we will delete that information promptly. If you believe we have
            collected information from a child, please contact us immediately at{" "}
            <a href="mailto:founder@pudoru.com">founder@pudoru.com</a>.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal data:
          </p>
          <ul>
            <li>
              <strong>Encryption in Transit:</strong> All data transmitted
              between your device and our servers is encrypted using TLS/SSL
            </li>
            <li>
              <strong>Encryption at Rest:</strong> Your data is encrypted when
              stored on our servers
            </li>
            <li>
              <strong>Row-Level Security:</strong> Database policies ensure you
              can only access your own data
            </li>
            <li>
              <strong>Secure Authentication:</strong> We use industry-standard
              authentication via Apple, Google, or secure email verification
            </li>
            <li>
              <strong>Regular Security Reviews:</strong> We regularly review and
              update our security practices
            </li>
          </ul>

          <h2>Data Breach Notification</h2>
          <p>
            In the event of a data breach that affects your personal data, we
            will:
          </p>
          <ul>
            <li>
              Notify the relevant supervisory authority within 72 hours as
              required by GDPR (where applicable)
            </li>
            <li>
              Notify affected users without undue delay if the breach is likely
              to result in a high risk to your rights and freedoms
            </li>
            <li>Document the breach and remediation actions taken</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will:
          </p>
          <ul>
            <li>
              Update the &quot;Last updated&quot; date at the top of this page
            </li>
            <li>
              Notify you via email or in-app notification for significant changes
            </li>
            <li>
              Provide at least 30 days notice before material changes take effect
            </li>
          </ul>
          <p>
            Your continued use of our applications after the effective date of
            changes constitutes acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or our data practices, please contact us:
          </p>
          <div className="bg-surface p-4 rounded-lg mb-4">
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:founder@pudoru.com">founder@pudoru.com</a>
            </p>
            <p className="mb-2">
              <strong>Mail:</strong>
              <br />
              Pudoru Inc.
              <br />
              Attn: Privacy
              <br />
              403 Bury Lane
              <br />
              West Vancouver, BC, Canada V7S 1K4
            </p>
          </div>
          <p>
            We will respond to all privacy-related inquiries within 30 days. For
            EU residents, you have the right to lodge a complaint with your local
            data protection authority if you are not satisfied with our response.
          </p>
        </article>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-accent hover:underline flex items-center gap-2"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
