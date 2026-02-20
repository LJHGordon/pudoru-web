"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInDown, transitions } from "@/lib/animations";

export default function Nav() {
  return (
    <motion.nav
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      transition={transitions.snappy}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/80 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/pudoru-logo.png"
              alt="Pudoru"
              width={32}
              height={32}
              className="mix-blend-multiply"
            />
            <span className="font-semibold text-lg text-text-primary">
              Pudoru
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="hidden sm:block text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#products"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
