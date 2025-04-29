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
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Request Received</h3>
          <p className="text-muted-foreground">
            Thank you for your interest. I'll review your request and get back to you shortly.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Assistance</CardTitle>
        <CardDescription>Fill out the form below to request research or writing assistance</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Enter your first name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Enter your last name" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
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
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-details">Project Details</Label>
            <Textarea
              id="project-details"
              placeholder="Please describe your project or research needs in detail"
              className="min-h-[120px]"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
