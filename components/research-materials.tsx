import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileDown } from "lucide-react"
import Link from "next/link"
import AnimatedCard from "./animated-card"

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
        <AnimatedCard key={index} className="flex flex-col overflow-hidden" delay={index * 100}>
          <div className="relative h-40 w-full">
            <img
              src={material.image || "/placeholder.svg"}
              alt={material.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-lg">{material.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription className="text-base">{material.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={material.link} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              <FileDown className="h-4 w-4" />
              Download
            </Link>
          </CardFooter>
        </AnimatedCard>
      ))}
    </div>
  )
}
