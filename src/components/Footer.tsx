import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Top row: logo, nav links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/pudoru-logo.png"
                alt="Pudoru"
                width={24}
                height={24}
                className="mix-blend-multiply"
              />
              <span className="text-sm font-medium text-text-primary">
                Pudoru Inc.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <Link
                href="/privacy"
                className="hover:text-text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/support"
                className="hover:text-text-primary transition-colors"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Bottom row: address + copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-border">
            <p className="text-xs text-text-muted text-center sm:text-left">
              403 Bury Lane, West Vancouver, BC, Canada V7S 1K4
            </p>
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Pudoru Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
