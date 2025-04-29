"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PulseAnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
  scale?: number
  className?: string
}

export default function PulseAnimation({
  children,
  delay = 0,
  duration = 2,
  scale = 1.05,
  className = "",
}: PulseAnimationProps) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: [1, scale, 1],
        transition: {
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
          delay: delay,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
