"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, transitions } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-64 h-64 rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
      >
        <motion.p
          variants={fadeInUp}
          transition={transitions.standard}
          className="text-sm font-medium tracking-widest uppercase text-accent/60 mb-4"
        >
          Our Mission
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          transition={transitions.standard}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
        >
          Technology should serve people,
          <br />
          <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
            not overwhelm them.
          </span>
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          transition={transitions.standard}
          className="mt-8 space-y-4 text-lg text-text-secondary leading-relaxed"
        >
          <p>
            Pudoru Inc. builds consumer apps for people who want tools that
            respect their time and attention. We believe the best software
            disappears into the background — it helps you do what you came to do,
            then gets out of the way.
          </p>
          <p>
            We start with real problems. We study how people actually work, cook,
            create, and live. Then we build the simplest thing that genuinely
            helps. No feature bloat. No dark patterns. No engagement traps.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
