"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scrollReveal";

export default function ScrollRevealInit() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return null;
}
