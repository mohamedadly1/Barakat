"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Battery, Zap } from "lucide-react"
import { accessories } from "@/lib/hearing-data"

export default function AccessoriesBatteriesPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Accessories & Batteries</h1>
            <p className="text-lg text-muted-foreground">
              Essential accessories and batteries to maximize your hearing aid performance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {accessories.map((accessory, index) => (
              <Card
                key={accessory.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={accessory.image || "/placeholder.svg"}
                    alt={accessory.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                    {accessory.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{accessory.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <Link href="/booking">Order Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="border-t bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <Battery className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Why Choose Quality Batteries</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  Longer lasting power
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  Compatible with all hearing aid models
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  Environmental responsibility
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Accessory Benefits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  Enhanced connectivity options
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  Improved maintenance and care
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  Better hearing experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
