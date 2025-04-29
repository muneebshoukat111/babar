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
    <Card className="flex flex-col items-center text-center overflow-hidden group">
      <CardHeader className="pb-2">
        <motion.div
          className="mb-2 rounded-full bg-muted p-4 w-fit mx-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <div className="h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
    </Card>
  )
}
