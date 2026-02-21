import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Support - Pudoru Inc.",
  description:
    "Get help with Pudoru Inc. products. Contact our support team.",
};

export default function Support() {
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
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-text-primary">Support</h1>
          <p className="mt-3 text-lg text-text-secondary">
            We&apos;re here to help. Reach out and we&apos;ll get back to you as
            soon as possible.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-lg mx-auto bg-surface rounded-2xl border border-border p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/[0.06] flex items-center justify-center shrink-0">
              <Mail size={20} className="text-accent" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                Email Support
              </h2>
              <p className="text-text-secondary mt-1">
                For questions, bug reports, feature requests, or account issues.
              </p>
              <a
                href="mailto:founder@pudoru.com"
                className="inline-block mt-3 text-accent font-medium hover:underline"
              >
                founder@pudoru.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/[0.06] flex items-center justify-center shrink-0">
              <Phone size={20} className="text-accent" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                Phone Support
              </h2>
              <p className="text-text-secondary mt-1">
                Call or text us during business hours.
              </p>
              <a
                href="tel:+13025653888"
                className="inline-block mt-3 text-accent font-medium hover:underline"
              >
                +1 (302) 565-3888
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent/[0.06] flex items-center justify-center shrink-0">
              <Clock size={20} className="text-accent" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                Response Time
              </h2>
              <p className="text-text-secondary mt-1">
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>

        {/* Common Topics */}
        <h2 className="text-xl font-semibold text-text-primary mb-6 text-center">
          Common Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
          <div className="bg-white rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle size={18} className="text-accent/70" />
              <h3 className="font-medium text-text-primary">Account Issues</h3>
            </div>
            <p className="text-sm text-text-secondary">
              Sign-in problems, account deletion, or data export requests.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen size={18} className="text-accent/70" />
              <h3 className="font-medium text-text-primary">
                Subscription &amp; Billing
              </h3>
            </div>
            <p className="text-sm text-text-secondary">
              Manage subscriptions via your device settings or the app store
              from which you subscribed.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle size={18} className="text-accent/70" />
              <h3 className="font-medium text-text-primary">Bug Reports</h3>
            </div>
            <p className="text-sm text-text-secondary">
              Found something broken? Email us with steps to reproduce and your
              iOS version.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen size={18} className="text-accent/70" />
              <h3 className="font-medium text-text-primary">
                Feature Requests
              </h3>
            </div>
            <p className="text-sm text-text-secondary">
              We love hearing ideas. Tell us what would make our apps better for
              you.
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center text-sm text-text-muted border-t border-border pt-8">
          <p className="font-medium text-text-secondary">Pudoru Inc.</p>
          <p className="mt-1">
            403 Bury Lane, West Vancouver, BC, Canada V7S 1K4
          </p>
        </div>

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
