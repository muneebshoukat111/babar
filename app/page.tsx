import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, GraduationCap, Mail, MessageSquare, PenTool } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import ResearchMaterials from "@/components/research-materials"
import ServiceCard from "@/components/service-card"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <AnimatedBackground />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6" />
              <span className="inline-block font-bold">Babar Ali</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
                Services
              </Link>
              <Link href="#research" className="text-sm font-medium transition-colors hover:text-primary">
                Research
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex gap-1">
              <Mail className="h-4 w-4" />
              Contact
            </Button>
          </div>
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
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Babar Ali</h1>
                  <p className="text-xl text-muted-foreground">Research & Writing Professional</p>
                </div>
                <div className="space-y-2">
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Providing expert research skills, ghostwriting, technical writing, and general writing services to
                    help you achieve your goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      Request Assistance
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline" className="gap-1">
                      <FileText className="h-4 w-4" />
                      View Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[450px] overflow-hidden rounded-full border-8 border-background shadow-xl lg:order-last">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Babar Ali"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(100,100,100,0.2),transparent_70%)]"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive research and writing services tailored to your specific needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                icon={<GraduationCap className="h-10 w-10" />}
                title="Research Skills"
                description="Expert research methodology and data analysis for academic and professional projects."
              />
              <ServiceCard
                icon={<PenTool className="h-10 w-10" />}
                title="Ghostwriting"
                description="Professional ghostwriting services for books, articles, and other content."
              />
              <ServiceCard
                icon={<FileText className="h-10 w-10" />}
                title="Technical Writing"
                description="Clear and concise technical documentation, manuals, and specifications."
              />
              <ServiceCard
                icon={<BookOpen className="h-10 w-10" />}
                title="Writing"
                description="High-quality content creation for various purposes and audiences."
              />
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Resources</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Research Materials</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access valuable research materials and resources to support your projects
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="academic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="general">General</TabsTrigger>
                </TabsList>
                <TabsContent value="academic" className="mt-6">
                  <ResearchMaterials
                    category="academic"
                    materials={[
                      {
                        title: "Research Methodology Guide",
                        description: "Comprehensive guide to research methodologies for academic projects",
                        link: "#",
                        image: "/placeholder.svg?height=200&width=400&text=Research+Methodology",
                      },
                      {
                        title: "Academic Writing Standards",
                        description: "Guidelines for academic writing across different disciplines",
                        link: "#",
                        image: "/placeholder.svg?height=200&width=400&text=Academic+Writing",
                      },
                      {
                        title: "Data Analysis Techniques",
                        description: "Overview of quantitative and qualitative data analysis methods",
                        link: "#",
                        image: "/placeholder.svg?height=200&width=400&text=Data+Analysis",
                      },
                    ]}
                  />
                </TabsContent>
                <TabsContent value="technical" className="mt-6">
                  <ResearchMaterials
                    category="technical"
                    materials={[
                      {
                        title: "Technical Documentation Templates",
                        description: "Templates for creating effective technical documentation",
                        link: "#",
                        image: "/placeholder.svg?height=200&width=400&text=Technical+Documentation",
                      },
                      {
                        title: "API Documentation Guide",
                        description: "Best practices for documenting APIs and technical interfaces",
                        link: "#",
                        image: "/placeholder.svg?height=200&width=400&text=API+Documentation",
                      },
                      {
                        title: "Technical Writing Style Guide",
                        description: "Style guidelines for clear and concise technical writing",
                        link: "#",
                        image: "/placeholder.svg?height=200&width=400&text=Technical+Writing",
                      },
                    ]}
                  />
                </TabsContent>
                <TabsContent value="general" className="mt-6">
                  <ResearchMaterials
                    category="general"
                    materials={[
                      {
                        title: "Content Creation Strategies",
                        description: "Effective strategies for creating engaging content",
                        link: "#",
                        image: "/placeholder.svg?height=200&width=400&text=Content+Creation",
                      },
                      {
                        title: "Writing for Different Audiences",
                        description: "Guide to adapting writing style for various audiences",
                        link: "#",
                        image: "/placeholder.svg?height=200&width=400&text=Writing+Audiences",
                      },
                      {
                        title: "Editing and Proofreading Checklist",
                        description: "Comprehensive checklist for polishing written content",
                        link: "#",
                        image: "/placeholder.svg?height=200&width=400&text=Editing+Proofreading",
                      },
                    ]}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(100,100,100,0.2),transparent_70%)]"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Request Research Assistance</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch to discuss your research and writing needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=200&width=600&text=Contact+Babar+Ali"
                    alt="Contact"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out directly or fill out the form to request assistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <p>contact@babarali.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="https://www.linkedin.com/in/babar-ali-86b436253/"
                      target="_blank"
                      className="text-primary hover:underline"
                    >
                      LinkedIn Profile
                    </Link>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">Response time: Usually within 24-48 hours</p>
                </CardFooter>
              </Card>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Babar Ali. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/babar-ali-86b436253/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
