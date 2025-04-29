"use client"

import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface Material {
  title: string
  description: string
  link: string
  image: string
}

interface ResearchMaterialsProps {
  category: "academic" | "technical" | "general"
  materials: Material[]
}

export default function ResearchMaterials({ category, materials }: ResearchMaterialsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {materials.map((material, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            y: -10,
            boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md h-full"
            initial={{ borderRadius: "0.5rem" }}
            whileHover={{ borderRadius: "1rem" }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-40 w-full overflow-hidden">
              <motion.img
                src={material.image || "/placeholder.svg"}
                alt={material.title}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{material.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-base">{material.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href={material.link}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <FileDown className="h-4 w-4" />
                  Download
                </Link>
              </motion.div>
            </CardFooter>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
