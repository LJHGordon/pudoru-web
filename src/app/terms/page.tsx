import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Pudoru Inc.",
  description: "Terms of Service for Pudoru Inc. and its applications.",
};

export default function TermsOfService() {
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
          <h1>Terms of Service</h1>
          <p className="text-sm text-text-muted mb-8">
            Last updated: February 20, 2026
          </p>

          <p>
            Welcome to Pudoru Inc. These Terms of Service (&quot;Terms&quot;)
            constitute a legally binding agreement between you and Pudoru Inc.
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) governing your
            access to and use of our applications and related services
            (collectively, the &quot;Service&quot;).
          </p>
          <p>
            <strong>
              By creating an account, downloading, or using any of our
              applications, you agree to these Terms. If you do not agree, do not
              use the Service.
            </strong>
          </p>

          <h2>1. Service Provider</h2>
          <p>The Service is provided by:</p>
          <div className="bg-surface p-4 rounded-lg mb-4">
            <p className="mb-1">
              <strong>Pudoru Inc.</strong>
            </p>
            <p className="mb-1">403 Bury Lane</p>
            <p className="mb-1">West Vancouver, BC, Canada V7S 1K4</p>
            <p className="mb-1">
              Email: <a href="mailto:founder@pudoru.com">founder@pudoru.com</a>
            </p>
          </div>

          <h2>2. Eligibility</h2>
          <p>To use our applications, you must:</p>
          <ul>
            <li>
              Be at least 13 years of age (or 16 years in the European Union and
              certain other jurisdictions)
            </li>
            <li>Have the legal capacity to enter into a binding agreement</li>
            <li>
              Not be prohibited from using the Service under applicable law
            </li>
          </ul>
          <p>
            If you are under 18 (or the age of majority in your jurisdiction),
            you represent that your parent or legal guardian has reviewed and
            agreed to these Terms on your behalf.
          </p>

          <h2>3. Description of Service</h2>
          <p>
            Pudoru Inc. develops consumer applications for iOS and other
            platforms. Our applications may include features such as content
            creation, data syncing across devices, subscription-based premium
            features, and other functionality as described in the respective app
            listings.
          </p>
          <p>
            Some features may require a paid subscription. See the Subscriptions
            and Payments section for subscription terms.
          </p>

          <h2>4. User Accounts</h2>
          <p>
            To access certain features, you must create an account. You agree to:
          </p>
          <ul>
            <li>
              Provide accurate, current, and complete registration information
            </li>
            <li>Keep your login credentials secure and confidential</li>
            <li>
              Notify us immediately at{" "}
              <a href="mailto:founder@pudoru.com">founder@pudoru.com</a> of any
              unauthorized access to your account
            </li>
            <li>
              Be responsible for all activities that occur under your account
            </li>
          </ul>
          <p>
            We reserve the right to disable accounts that we reasonably believe
            violate these Terms.
          </p>

          <h2>5. Acceptable Use</h2>
          <p>
            You agree to use our applications only for lawful purposes and in
            accordance with these Terms. You shall not:
          </p>
          <ul>
            <li>
              Upload content that infringes intellectual property rights of
              others
            </li>
            <li>
              Upload content that is unlawful, harmful, threatening, abusive,
              defamatory, or otherwise objectionable
            </li>
            <li>
              Attempt to gain unauthorized access to our systems or other
              users&apos; accounts
            </li>
            <li>
              Use the Service to distribute malware, viruses, or harmful code
            </li>
            <li>
              Engage in any activity that disrupts, damages, or interferes with
              the Service
            </li>
            <li>
              Use automated means (bots, scrapers) to access the Service without
              our written permission
            </li>
            <li>
              Reverse engineer, decompile, or disassemble any part of the
              Service
            </li>
          </ul>

          <h2>6. Subscriptions and Payments</h2>
          <p>
            Our applications may offer both free and premium subscription tiers.
            Premium features require a paid subscription.
          </p>

          <h3>Payment Processing</h3>
          <p>
            All subscriptions are processed through the platform app store or
            payment processor from which you downloaded the application. By
            subscribing:
          </p>
          <ul>
            <li>
              Payment is charged to your app store account at confirmation of
              purchase
            </li>
            <li>
              The app store&apos;s or payment processor&apos;s terms and privacy
              policy apply to payment processing
            </li>
            <li>
              We do not receive or store your payment card information
            </li>
          </ul>

          <h3>Automatic Renewal</h3>
          <p>
            Your subscription will automatically renew at the end of each
            billing period unless you cancel at least 24 hours before the
            renewal date. Renewal will be charged at the same price as your
            current subscription period. To cancel, use the subscription
            management feature in your device settings or the app store from
            which you subscribed.
          </p>

          <h3>Refunds</h3>
          <p>
            Refunds are processed by the platform app store according to their
            refund policy. To request a refund, contact the app store&apos;s
            support or use their refund request feature.
          </p>

          <h3>Price Changes</h3>
          <p>
            We may change subscription prices from time to time. Price changes
            will not affect your current subscription period. You will be
            notified of any price changes before your next renewal, and you may
            cancel if you do not agree to the new price.
          </p>

          <h2>7. Rights for EU Consumers</h2>
          <p>
            If you are a consumer residing in the European Union or European
            Economic Area, you have specific rights under EU consumer protection
            law:
          </p>

          <h3>Right of Withdrawal</h3>
          <p>
            Under the EU Consumer Rights Directive, you have the right to
            withdraw from a digital content purchase within{" "}
            <strong>14 days</strong> without giving any reason. However, you
            acknowledge and agree that:
          </p>
          <ul>
            <li>
              By downloading or using the Service immediately after purchase, you
              request that we begin providing the digital content immediately
            </li>
            <li>
              You acknowledge that you will lose your right of withdrawal once
              the digital content has been fully provided
            </li>
            <li>
              For subscription services, you may cancel at any time, and your
              access will continue until the end of your current billing period
            </li>
          </ul>

          <h3>Legal Guarantee</h3>
          <p>
            Under EU law, digital content must be in conformity with the
            contract. If the digital content is not in conformity, you are
            entitled to have it brought into conformity free of charge. If this
            is not possible or not done within a reasonable time, you may be
            entitled to a price reduction or to terminate the contract.
          </p>

          <h3>Dispute Resolution</h3>
          <p>
            If you are an EU consumer and have a dispute with us that we cannot
            resolve, you may use the European Commission&apos;s Online Dispute
            Resolution (ODR) platform at{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>

          <h2>8. User-Generated Content</h2>
          <p>
            &quot;User Content&quot; means any content you create, upload, or
            store using the Service.
          </p>

          <h3>Ownership</h3>
          <p>
            You retain all intellectual property rights in your User Content. We
            do not claim ownership of any content you create.
          </p>

          <h3>License to Us</h3>
          <p>
            By using the Service, you grant us a limited, non-exclusive,
            royalty-free, worldwide license to store, display, reproduce, and
            process your User Content solely to provide and improve the Service.
            This license terminates when you delete your content or account.
          </p>

          <h3>Your Responsibilities</h3>
          <p>You represent and warrant that:</p>
          <ul>
            <li>
              You own or have the necessary rights to use and share any content
              you upload
            </li>
            <li>
              Your content does not infringe the intellectual property or other
              rights of any third party
            </li>
            <li>Your content complies with these Terms and applicable law</li>
          </ul>

          <h2>9. Intellectual Property</h2>
          <p>
            The Service, including its design, features, code, graphics,
            trademarks, and branding, is owned by Pudoru Inc. and protected by
            intellectual property laws. You may not:
          </p>
          <ul>
            <li>Copy, modify, or create derivative works of the Service</li>
            <li>Reverse engineer, decompile, or disassemble the application</li>
            <li>Remove or alter any proprietary notices or labels</li>
            <li>Use our trademarks without written permission</li>
          </ul>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to use the Service for your personal, non-commercial
            purposes in accordance with these Terms.
          </p>

          <h2>10. Privacy</h2>
          <p>
            Your use of the Service is also governed by our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which describes how we
            collect, use, and protect your personal data. By using the Service,
            you consent to the practices described in the Privacy Policy.
          </p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>
            <strong>For users in the United States:</strong> THE SERVICE IS
            PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Service will be uninterrupted, error-free,
            secure, or free of viruses or other harmful components.
          </p>
          <p>
            <strong>For EU consumers:</strong> This disclaimer does not affect
            your statutory rights under EU consumer protection law, including
            your rights under the legal guarantee of conformity for digital
            content.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
            <strong>For users in the United States:</strong> TO THE MAXIMUM
            EXTENT PERMITTED BY LAW, PUDORU INC. SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul>
            <li>Loss of data, content, or profits</li>
            <li>Service interruptions or downtime</li>
            <li>Results from following app suggestions or content</li>
            <li>Third-party actions, content, or services</li>
            <li>Unauthorized access to or alteration of your data</li>
          </ul>
          <p>
            Our total liability for any claims arising from or related to the
            Service shall not exceed the amount you paid us in the twelve (12)
            months preceding the claim, or $100 USD, whichever is greater.
          </p>
          <p>
            <strong>For EU consumers:</strong> This limitation does not apply to:
          </p>
          <ul>
            <li>
              Liability for death or personal injury caused by our negligence
            </li>
            <li>Liability for fraud or fraudulent misrepresentation</li>
            <li>
              Any other liability that cannot be excluded under applicable EU law
            </li>
          </ul>

          <h2>13. Indemnification</h2>
          <p>
            <strong>For users in the United States:</strong> You agree to
            indemnify, defend, and hold harmless Pudoru Inc. and its officers,
            directors, employees, and agents from any claims, damages, losses,
            liabilities, costs, and expenses (including reasonable
            attorneys&apos; fees) arising from:
          </p>
          <ul>
            <li>Your use of the Service</li>
            <li>Your User Content</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
          </ul>
          <p>
            <strong>For EU consumers:</strong> This indemnification clause does
            not apply to you to the extent prohibited by EU consumer protection
            law.
          </p>

          <h2>14. Termination</h2>

          <h3>Termination by You</h3>
          <p>
            You may stop using the Service at any time. To delete your account
            and all associated data, use the in-app settings. Active
            subscriptions must be canceled separately through the app store from
            which you subscribed.
          </p>

          <h3>Termination by Us</h3>
          <p>We may suspend or terminate your access to the Service:</p>
          <ul>
            <li>If you violate these Terms</li>
            <li>If required by law</li>
            <li>If we discontinue the Service (with reasonable notice)</li>
          </ul>
          <p>
            We will provide notice before termination where practicable. Upon
            termination, your right to use the Service ceases immediately.
          </p>

          <h3>Effect of Termination</h3>
          <p>
            Upon termination: (a) your license to use the Service terminates; (b)
            you remain liable for any obligations incurred before termination;
            (c) the following provisions survive termination: User Content
            licenses, Intellectual Property, Disclaimers, Limitation of
            Liability, Indemnification, Governing Law, and General Terms.
          </p>

          <h2>15. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. When we make material
            changes:
          </p>
          <ul>
            <li>
              We will update the &quot;Last updated&quot; date at the top
            </li>
            <li>We will notify you via email or in-app notification</li>
            <li>
              We will provide at least 30 days&apos; notice before material
              changes take effect
            </li>
          </ul>
          <p>
            Your continued use of the Service after the effective date
            constitutes acceptance of the updated Terms. If you do not agree to
            the changes, you must stop using the Service before the effective
            date.
          </p>

          <h2>16. Governing Law and Disputes</h2>

          <h3>For Users Outside the European Union</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the Province of British Columbia, Canada, without regard to
            conflict of law principles. Any disputes shall be resolved in the
            courts located in Vancouver, British Columbia, Canada.
          </p>

          <h3>For Users in the European Union</h3>
          <p>
            If you are a consumer residing in the EU, nothing in these Terms
            affects your rights under mandatory EU consumer protection law. You
            may bring legal proceedings in the courts of your country of
            residence. The laws of your country of residence will apply to
            consumer protection matters to the extent required by EU law.
          </p>

          <h3>For Users Elsewhere</h3>
          <p>
            For users outside Canada and the EU, these Terms shall be governed by
            the laws of British Columbia, Canada, and disputes shall be resolved
            in Vancouver, British Columbia courts, except where prohibited by
            local law.
          </p>

          <h2>17. General Terms</h2>

          <h3>Entire Agreement</h3>
          <p>
            These Terms, together with the Privacy Policy, constitute the entire
            agreement between you and Pudoru Inc. regarding the Service and
            supersede all prior agreements.
          </p>

          <h3>Severability</h3>
          <p>
            If any provision of these Terms is found to be unenforceable, that
            provision will be limited or eliminated to the minimum extent
            necessary, and the remaining provisions will remain in full force and
            effect.
          </p>

          <h3>Waiver</h3>
          <p>
            Our failure to enforce any right or provision of these Terms will not
            be considered a waiver of that right or provision.
          </p>

          <h3>Assignment</h3>
          <p>
            You may not assign or transfer these Terms or your rights hereunder
            without our prior written consent. We may assign our rights and
            obligations under these Terms without restriction.
          </p>

          <h3>Force Majeure</h3>
          <p>
            We shall not be liable for any failure or delay in performing our
            obligations due to circumstances beyond our reasonable control,
            including natural disasters, war, terrorism, labor disputes, internet
            failures, or governmental actions.
          </p>

          <h3>Electronic Communications</h3>
          <p>
            By using the Service, you consent to receive communications from us
            electronically, including emails, push notifications, and in-app
            messages. You agree that all agreements, notices, and other
            communications we provide electronically satisfy any legal
            requirement that such communications be in writing.
          </p>

          <h3>Language</h3>
          <p>
            These Terms are written in English. If translated into another
            language, the English version shall prevail in case of any conflict.
          </p>

          <h2>18. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact
            us:
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
              Attn: Legal
              <br />
              403 Bury Lane
              <br />
              West Vancouver, BC, Canada V7S 1K4
            </p>
          </div>
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
