"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, transitions } from "@/lib/animations";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Pudoru Inc.?",
    answer:
      "Pudoru Inc. is a software company based in Newark, Delaware. We build consumer applications for iOS, focused on solving real everyday problems with thoughtful, accessible design.",
  },
  {
    question: "What apps does Pudoru make?",
    answer:
      "Our flagship product is Cozina, an AI-powered cooking companion for iOS. Cozina helps you import recipes from photos and URLs, cook hands-free with voice guidance, manage multiple timers, and organize your cookbook. We're always exploring new ideas for future products.",
  },
  {
    question: "Is my data safe with Pudoru apps?",
    answer:
      "Absolutely. We take privacy seriously. We don't sell your data, we don't track you across apps, and we collect only the minimum information needed to provide our services. All data is encrypted in transit and at rest. You can read our full Privacy Policy for details.",
  },
  {
    question: "How do I get support for Cozina?",
    answer:
      "You can reach us at founder@pudoru.com for any questions, bug reports, or feature requests. We read every message and typically respond within 24 hours.",
  },
  {
    question: "Is Cozina free to use?",
    answer:
      "Cozina offers a generous free tier with core features. Premium features like unlimited AI chat, advanced recipe import, and an ad-free experience are available through an optional subscription via the App Store.",
  },
  {
    question: "Where is Pudoru based?",
    answer:
      "Pudoru Inc. is based in West Vancouver, Canada. Our address is 403 Bury Lane, West Vancouver, BC, Canada V7S 1K4.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="text-base font-medium text-text-primary group-hover:text-accent transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeInUp}
            transition={transitions.standard}
            className="text-sm font-medium tracking-widest uppercase text-accent/60 mb-4"
          >
            Common Questions
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            transition={transitions.standard}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
          >
            FAQ
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={transitions.standard}
          className="bg-white rounded-2xl border border-border px-6"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
