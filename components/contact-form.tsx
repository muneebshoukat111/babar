"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[300px] text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
          >
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Request Received
          </motion.h3>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Thank you for your interest. I'll review your request and get back to you shortly.
          </motion.p>
        </CardContent>
      </Card>
    )
  }

  const formFields = [
    {
      id: "first-name",
      label: "First name",
      placeholder: "Enter your first name",
      type: "text",
      required: true,
      gridSpan: 1,
    },
    {
      id: "last-name",
      label: "Last name",
      placeholder: "Enter your last name",
      type: "text",
      required: true,
      gridSpan: 1,
    },
    { id: "email", label: "Email", placeholder: "Enter your email", type: "email", required: true, gridSpan: 2 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Assistance</CardTitle>
        <CardDescription>Fill out the form below to request research or writing assistance</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {formFields.map((field, index) => (
              <motion.div
                key={field.id}
                className={`space-y-2 ${field.gridSpan === 2 ? "col-span-2" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input id={field.id} type={field.type} placeholder={field.placeholder} required={field.required} />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Label htmlFor="service-type">Service Type</Label>
            <Select required>
              <SelectTrigger id="service-type">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="research">Research Assistance</SelectItem>
                <SelectItem value="ghostwriting">Ghostwriting</SelectItem>
                <SelectItem value="technical-writing">Technical Writing</SelectItem>
                <SelectItem value="general-writing">General Writing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Label htmlFor="project-details">Project Details</Label>
            <Textarea
              id="project-details"
              placeholder="Please describe your project or research needs in detail"
              className="min-h-[120px]"
              required
            />
          </motion.div>
        </CardContent>
        <CardFooter>
          <motion.div className="w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                />
              ) : null}
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </motion.div>
        </CardFooter>
      </form>
    </Card>
  )
}
