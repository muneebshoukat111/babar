"use client"

import { useEffect, useRef } from "react"

export default function EnhancedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle class with enhanced visuals
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      hue: number
      growing: boolean

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 2
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.hue = Math.random() * 60 + 200 // Blue to purple range
        this.color = `hsla(${this.hue}, 70%, 50%, ${Math.random() * 0.5 + 0.2})`
        this.growing = Math.random() > 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX *= -1
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY *= -1
        }

        // Pulsate size
        if (this.growing) {
          this.size += 0.03
          if (this.size > 7) {
            this.growing = false
          }
        } else {
          this.size -= 0.03
          if (this.size < 2) {
            this.growing = true
          }
        }

        // Slowly change color
        this.hue += 0.1
        if (this.hue > 260) this.hue = 200
        this.color = `hsla(${this.hue}, 70%, 50%, ${Math.random() * 0.3 + 0.2})`
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()

          // Add glow effect
          ctx.shadowBlur = 15
          ctx.shadowColor = this.color
        }
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(80, Math.floor(window.innerWidth / 20))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      if (ctx && canvas) {
        // Clear with semi-transparent background for trail effect
        ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update()
          particlesArray[i].draw()
        }

        // Draw connections
        connectParticles()

        animationFrameId = requestAnimationFrame(animate)
      }
    }

    // Connect particles with lines
    const connectParticles = () => {
      if (!ctx) return

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            // Gradient line
            const gradient = ctx.createLinearGradient(
              particlesArray[a].x,
              particlesArray[a].y,
              particlesArray[b].x,
              particlesArray[b].y,
            )
            gradient.addColorStop(0, particlesArray[a].color)
            gradient.addColorStop(1, particlesArray[b].color)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 h-full w-full" />
}
