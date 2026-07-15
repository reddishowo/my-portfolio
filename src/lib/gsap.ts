"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    ScrollToPlugin,
    SplitText,
    Flip,
    MotionPathPlugin,
    DrawSVGPlugin,
    MorphSVGPlugin,
    ScrambleTextPlugin,
    CustomEase,
  );

  if (!gsap.parseEase("lab-smooth")) {
    CustomEase.create("lab-smooth", "M0,0 C0.22,1 0.36,1 1,1");
  }
}

export {
  DrawSVGPlugin,
  Flip,
  gsap,
  MorphSVGPlugin,
  MotionPathPlugin,
  ScrambleTextPlugin,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
  useGSAP,
};

export const motionMedia = {
  desktop: "(min-width: 881px)",
  compact: "(max-width: 880px)",
  finePointer: "(hover: hover) and (pointer: fine)",
  reduce: "(prefers-reduced-motion: reduce)",
} as const;
