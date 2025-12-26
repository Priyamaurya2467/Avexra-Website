"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/lib/ScrollReveal";

export default function ScrollRevealInit() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return null;
}
