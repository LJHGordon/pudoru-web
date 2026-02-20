"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, transitions } from "@/lib/animations";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.p
          variants={fadeInUp}
          transition={transitions.standard}
          className="text-sm font-medium tracking-widest uppercase text-accent/60 mb-4"
        >
          Contact
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          transition={transitions.standard}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          transition={transitions.standard}
          className="mt-4 text-lg text-text-secondary"
        >
          Questions, feedback, feature requests, or partnership inquiries —
          we&apos;d love to hear from you.
        </motion.p>
        <motion.a
          variants={fadeInUp}
          transition={transitions.standard}
          href="mailto:founder@pudoru.com"
          className="mt-8 inline-flex items-center gap-3 bg-white border border-border rounded-2xl px-8 py-4 text-lg font-medium text-accent hover:border-accent/30 hover:shadow-sm transition-all group"
        >
          <Mail size={22} className="text-accent/70" />
          founder@pudoru.com
          <ArrowRight
            size={16}
            className="text-accent/40 group-hover:text-accent group-hover:translate-x-1 transition-all"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
