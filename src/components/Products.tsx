"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  cardHover,
  buttonPress,
  transitions,
} from "@/lib/animations";
import { ExternalLink } from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/app/cozina-ai-recipe-organizer/id6740042905";

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
              <motion.a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonPress}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="mt-4 inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors hover:bg-accent/90"
              >
                Download on the App Store
                <ExternalLink size={14} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
