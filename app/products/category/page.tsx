"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { productCategories } from "@/lib/hearing-data"

export default function HearingAidCategoryPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Hearing Aid Categories</h1>
            <p className="text-lg text-muted-foreground">
              Explore our wide range of hearing aid styles and find the perfect fit for your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <Card
                key={category.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                  <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 group/btn">
                    <Link href={`/products?category=${category.id}`}>
                      View Products
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
