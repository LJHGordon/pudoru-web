"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, transitions } from "@/lib/animations";
import { Shield, Accessibility, Sparkles, Focus } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Privacy by Default",
    description:
      "We don't sell data. We don't track behavior. We collect the minimum needed to make things work, and we're transparent about every byte.",
  },
  {
    icon: Accessibility,
    title: "Built for Everyone",
    description:
      "Accessibility isn't an afterthought. We design for neurodivergent users, screen readers, and every way people interact with technology.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Design",
    description:
      "Every interaction is considered. We sweat the details — animations, typography, spacing — because craft is what separates good from great.",
  },
  {
    icon: Focus,
    title: "Small and Focused",
    description:
      "We'd rather make one excellent product than ten mediocre ones. Depth over breadth. Quality over quantity. Always.",
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            transition={transitions.standard}
            className="text-sm font-medium tracking-widest uppercase text-accent/60 mb-4"
          >
            How We Build
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            transition={transitions.standard}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
          >
            Our Principles
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              transition={transitions.standard}
              className="group bg-white rounded-2xl border border-border p-6 sm:p-8 hover:border-accent/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/[0.06] flex items-center justify-center mb-4 group-hover:bg-accent/[0.1] transition-colors">
                <value.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
