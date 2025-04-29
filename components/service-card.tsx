"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3 },
      }}
    >
      <Card className="flex flex-col items-center text-center overflow-hidden group h-full">
        <CardHeader className="pb-2">
          <motion.div
            className="mb-2 rounded-full bg-muted p-4 w-fit mx-auto"
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5 },
            }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
        <motion.div
          className="h-1 w-0 bg-primary"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  )
}
