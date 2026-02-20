"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeIn, transitions } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orbs */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/[0.04] to-transparent blur-3xl"
        />
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/[0.03] to-transparent blur-3xl"
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
      >
        <motion.div variants={fadeInUp} transition={transitions.standard}>
          <Image
            src="/pudoru-logo.png"
            alt="Pudoru Inc."
            width={88}
            height={88}
            className="mx-auto mix-blend-multiply"
            priority
          />
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          transition={transitions.standard}
          className="mt-8 text-5xl sm:text-7xl font-bold tracking-tight text-text-primary"
        >
          Pudoru Inc.
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          transition={transitions.standard}
          className="mt-5 text-xl sm:text-2xl text-text-secondary font-light"
        >
          Software made with intention.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          transition={transitions.standard}
          className="mt-3 text-base text-text-muted max-w-md mx-auto"
        >
          We build focused consumer apps for iOS — designed with care,
          built for real people.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          transition={transitions.standard}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#products"
            className="inline-flex items-center px-6 py-2.5 border border-border text-sm font-medium text-text-primary rounded-lg hover:bg-surface transition-colors"
          >
            Our Products
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
