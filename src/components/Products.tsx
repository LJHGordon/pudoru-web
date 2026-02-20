"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  cardHover,
  transitions,
} from "@/lib/animations";
import { Clock } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={transitions.standard}
          className="text-2xl sm:text-3xl font-bold text-text-primary text-center mb-12"
        >
          Our Products
        </motion.h2>

        <motion.div
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          className="max-w-lg mx-auto bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-start gap-5">
            <Image
              src="/cozina-icon.png"
              alt="Cozina"
              width={80}
              height={80}
              className="rounded-2xl shrink-0"
            />
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-text-primary">
                Cozina
              </h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                An AI-powered cooking companion for iOS. Import recipes from
                photos and URLs, cook hands-free with voice guidance, and keep
                your cookbook organized.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-5 py-2.5 rounded-lg">
                <Clock size={14} />
                Coming Soon on the App Store
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
