"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingAnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function FloatingAnimation({
  children,
  delay = 0,
  duration = 4,
  className = "",
}: FloatingAnimationProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
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
