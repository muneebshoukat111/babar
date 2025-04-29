"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, GraduationCap, Mail, MessageSquare, PenTool } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"
import ResearchMaterials from "@/components/research-materials"
import ServiceCard from "@/components/service-card"
import EnhancedBackground from "@/components/enhanced-background"
import FadeIn from "@/components/fade-in"
import FloatingAnimation from "@/components/floating-animation"
import TypingAnimation from "@/components/typing-animation"
import PulseAnimation from "@/components/pulse-animation"

// Define static image paths with absolute paths
const PROFILE_IMAGE = "/images/profile.png"
const CONTACT_IMAGE = "/images/contact.png"

// Define research materials with absolute image paths
const academicMaterials = [
  {
    title: "Research Methodology Guide",
    description: "Comprehensive guide to research methodologies for academic projects",
    link: "#",
    image: "/images/research-methodology.png",
  },
  {
    title: "Academic Writing Standards",
    description: "Guidelines for academic writing across different disciplines",
    link: "#",
    image: "/images/academic-writing.png",
  },
  {
    title: "Data Analysis Techniques",
    description: "Overview of quantitative and qualitative data analysis methods",
    link: "#",
    image: "/images/data-analysis.png",
  },
]

const technicalMaterials = [
  {
    title: "Technical Documentation Templates",
    description: "Templates for creating effective technical documentation",
    link: "#",
    image: "/images/technical-documentation.png",
  },
  {
    title: "API Documentation Guide",
    description: "Best practices for documenting APIs and technical interfaces",
    link: "#",
    image: "/images/api-documentation.png",
  },
  {
    title: "Technical Writing Style Guide",
    description: "Style guidelines for clear and concise technical writing",
    link: "#",
    image: "/images/technical-writing.png",
  },
]

const generalMaterials = [
  {
    title: "Content Creation Strategies",
    description: "Effective strategies for creating engaging content",
    link: "#",
    image: "/images/content-creation.png",
  },
  {
    title: "Writing for Different Audiences",
    description: "Guide to adapting writing style for various audiences",
    link: "#",
    image: "/images/writing-audiences.png",
  },
  {
    title: "Editing and Proofreading Checklist",
    description: "Comprehensive checklist for polishing written content",
    link: "#",
    image: "/images/editing-proofreading.png",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <EnhancedBackground />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "linear" }}
              >
                <GraduationCap className="h-6 w-6" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block font-bold"
              >
                Babar Ali
              </motion.span>
            </Link>
            <nav className="hidden md:flex gap-6">
              {["Services", "Research", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          <motion.div
            className="flex flex-1 items-center justify-end space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="outline" size="sm" className="hidden md:flex gap-1">
              <Mail className="h-4 w-4" />
              Contact
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(200,200,200,0.2),transparent_60%)]"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <FadeIn>
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      <TypingAnimation text="Babar Ali" speed={100} />
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      <TypingAnimation text="Research & Writing Professional" speed={50} delay={1000} />
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="space-y-2">
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Providing expert research skills, ghostwriting, technical writing, and general writing services to
                      help you achieve your goals.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#contact">
                      <PulseAnimation>
                        <Button size="lg" className="gap-1">
                          <MessageSquare className="h-4 w-4" />
                          Request Assistance
                        </Button>
                      </PulseAnimation>
                    </Link>
                    <Link href="#services">
                      <Button size="lg" variant="outline" className="gap-1">
                        <FileText className="h-4 w-4" />
                        View Services
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <FloatingAnimation
                duration={6}
                className="relative mx-auto aspect-square w-full max-w-[450px] overflow-hidden rounded-full border-8 border-background shadow-xl lg:order-last"
              >
                <img src={PROFILE_IMAGE || "/placeholder.svg"} alt="Babar Ali" className="h-full w-full object-cover" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                />
              </FloatingAnimation>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(100,100,100,0.2),transparent_70%)]"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <motion.div
                    className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Services
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Services</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Comprehensive research and writing services tailored to your specific needs
                  </p>
                </div>
              </div>
            </FadeIn>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <GraduationCap className="h-10 w-10" />,
                  title: "Research Skills",
                  description: "Expert research methodology and data analysis for academic and professional projects.",
                },
                {
                  icon: <PenTool className="h-10 w-10" />,
                  title: "Ghostwriting",
                  description: "Professional ghostwriting services for books, articles, and other content.",
                },
                {
                  icon: <FileText className="h-10 w-10" />,
                  title: "Technical Writing",
                  description: "Clear and concise technical documentation, manuals, and specifications.",
                },
                {
                  icon: <BookOpen className="h-10 w-10" />,
                  title: "Writing",
                  description: "High-quality content creation for various purposes and audiences.",
                },
              ].map((service, index) => (
                <FadeIn key={service.title} delay={0.2 * index} direction={index % 2 === 0 ? "left" : "right"}>
                  <ServiceCard icon={service.icon} title={service.title} description={service.description} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section
          id="research"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background relative"
        >
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(200,200,200,0.2),transparent_60%)]"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <motion.div
                    className="inline-block rounded-lg bg-background px-3 py-1 text-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Resources
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Research Materials</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Access valuable research materials and resources to support your projects
                  </p>
                </div>
              </div>
            </FadeIn>
            <div className="mx-auto max-w-5xl py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Tabs defaultValue="academic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="academic">Academic</TabsTrigger>
                    <TabsTrigger value="technical">Technical</TabsTrigger>
                    <TabsTrigger value="general">General</TabsTrigger>
                  </TabsList>
                  <TabsContent value="academic" className="mt-6">
                    <ResearchMaterials category="academic" materials={academicMaterials} />
                  </TabsContent>
                  <TabsContent value="technical" className="mt-6">
                    <ResearchMaterials category="technical" materials={technicalMaterials} />
                  </TabsContent>
                  <TabsContent value="general" className="mt-6">
                    <ResearchMaterials category="general" materials={generalMaterials} />
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(100,100,100,0.2),transparent_70%)]"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <motion.div
                    className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Contact
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Request Research Assistance</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get in touch to discuss your research and writing needs
                  </p>
                </div>
              </div>
            </FadeIn>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <FadeIn direction="left">
                <Card className="overflow-hidden">
                  <div className="relative h-40">
                    <img
                      src={CONTACT_IMAGE || "/placeholder.svg"}
                      alt="Contact"
                      className="h-full w-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out directly or fill out the form to request assistance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <p>contact@babarali.com</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <GraduationCap className="h-5 w-5 text-muted-foreground" />
                      <Link
                        href="https://www.linkedin.com/in/babar-ali-86b436253/"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        LinkedIn Profile
                      </Link>
                    </motion.div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Response time: Usually within 24-48 hours</p>
                  </CardFooter>
                </Card>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <motion.p
            className="text-center text-sm leading-loose text-muted-foreground md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © 2024 Babar Ali. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-4">
            {["LinkedIn", "Terms", "Privacy"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={item === "LinkedIn" ? "https://www.linkedin.com/in/babar-ali-86b436253/" : "#"}
                  target={item === "LinkedIn" ? "_blank" : "_self"}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
