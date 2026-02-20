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
            access to and use of our mobile applications and related services,
            including Cozina (collectively, the &quot;Service&quot;).
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
            Pudoru Inc. develops consumer applications for iOS. Our current
            applications include:
          </p>
          <ul>
            <li>
              <strong>Cozina:</strong> A cooking assistance application that
              helps you import and organize recipes, get AI-powered cooking
              guidance, manage cooking timers, generate shopping lists, and sync
              data across devices
            </li>
          </ul>
          <p>
            Some features may require a paid subscription. See Section 6 for
            subscription terms.
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
            All subscriptions are processed through Apple&apos;s App Store. By
            subscribing:
          </p>
          <ul>
            <li>
              Payment is charged to your Apple ID account at confirmation of
              purchase
            </li>
            <li>
              Apple&apos;s terms and privacy policy apply to payment processing
            </li>
            <li>
              We do not receive or store your payment card information
            </li>
          </ul>

          <h3>Automatic Renewal</h3>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-4">
            <p className="font-semibold mb-2">
              Important Auto-Renewal Information:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Your subscription will automatically renew</strong> at
                the end of each billing period unless you cancel at least 24
                hours before the renewal date
              </li>
              <li>
                <strong>Renewal charge:</strong> Your subscription will renew at
                the same price as your current subscription period
              </li>
              <li>
                <strong>How to cancel:</strong> Go to Settings &rarr; Apple ID
                &rarr; Subscriptions on your device, select the app, and tap
                &quot;Cancel Subscription&quot;
              </li>
            </ul>
          </div>

          <h3>Refunds</h3>
          <p>
            Refunds are processed by Apple according to their{" "}
            <a
              href="https://support.apple.com/en-us/HT204084"
              target="_blank"
              rel="noopener noreferrer"
            >
              refund policy
            </a>
            . To request a refund, contact Apple Support or use the &quot;Report
            a Problem&quot; feature in your purchase history.
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

          <h2>9. AI Features and Disclaimer</h2>
          <p>
            Some of our applications use artificial intelligence to assist with
            content processing and guidance. Please understand:
          </p>
          <ul>
            <li>
              <strong>AI Limitations:</strong> AI-generated content is provided
              for informational purposes only and may contain errors,
              inaccuracies, or omissions
            </li>
            <li>
              <strong>No Professional Advice:</strong> AI suggestions are not a
              substitute for professional advice
            </li>
            <li>
              <strong>User Verification:</strong> You should always independently
              verify AI-generated content
            </li>
            <li>
              <strong>Optional Third-Party AI:</strong> If you configure your own
              API keys for OpenAI, Anthropic, or Google AI, your queries will be
              processed by those third parties under their respective terms
            </li>
          </ul>

          <h2>10. Food Safety Disclaimer</h2>
          <p>
            Our cooking applications provide guidance for{" "}
            <strong>informational purposes only</strong>. We are not responsible
            for:
          </p>
          <ul>
            <li>Allergic reactions or adverse health effects</li>
            <li>Food safety issues arising from recipe preparation</li>
            <li>Accuracy of nutritional information or calorie counts</li>
            <li>Suitability of recipes for specific dietary requirements</li>
          </ul>
          <p>
            <strong>Always:</strong>
          </p>
          <ul>
            <li>Use proper food handling and storage techniques</li>
            <li>Verify cooking temperatures with a food thermometer</li>
            <li>
              Consult healthcare professionals about dietary restrictions or
              allergies
            </li>
            <li>Check ingredient labels for allergens</li>
          </ul>

          <h2>11. Intellectual Property</h2>
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

          <h2>12. Privacy</h2>
          <p>
            Your use of the Service is also governed by our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which describes how we
            collect, use, and protect your personal data. By using the Service,
            you consent to the practices described in the Privacy Policy.
          </p>

          <h2>13. Disclaimer of Warranties</h2>
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

          <h2>14. Limitation of Liability</h2>
          <p>
            <strong>For users in the United States:</strong> TO THE MAXIMUM
            EXTENT PERMITTED BY LAW, PUDORU INC. SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul>
            <li>Loss of data, content, or profits</li>
            <li>Service interruptions or downtime</li>
            <li>Results from following app suggestions or AI content</li>
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

          <h2>15. Indemnification</h2>
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

          <h2>16. Termination</h2>

          <h3>Termination by You</h3>
          <p>
            You may stop using the Service at any time. To delete your account
            and all associated data, use the in-app settings. Active
            subscriptions must be canceled separately through the App Store.
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
            (c) Sections 8 (User Content licenses), 11 (IP), 13-15 (Disclaimers,
            Liability, Indemnification), and 17-19 (General Terms) survive.
          </p>

          <h2>17. Changes to Terms</h2>
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

          <h2>18. Governing Law and Disputes</h2>

          <h3>For Users in the United States</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the State of Delaware, United States, without regard to
            conflict of law principles. Any disputes shall be resolved in the
            state or federal courts located in Delaware.
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
            For users outside the US and EU, these Terms shall be governed by the
            laws of Delaware, USA, and disputes shall be resolved in Delaware
            courts, except where prohibited by local law.
          </p>

          <h2>19. General Terms</h2>

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

          <h2>20. Contact Us</h2>
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
