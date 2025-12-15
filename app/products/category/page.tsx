"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { productCategories } from "@/lib/hearing-data"
const featuredProducts = [
  {
    id: "pure-ric",
    name: "Signia Pure RIC",
    slug: "signia-pure-ric",
    image: "/images/product-showcase-1.jpg",
    description: "Our smallest, invisible-in-canal solution for discreet daily wear.",
  },
  {
    id: "styletto",
    name: "Signia Styletto Slim RIC",
    slug: "signia-styletto-slim-ric",
    image: "/images/product-showcase-2.jpg",
    description: "Rechargeable, sleek design with enhanced natural sound processing.",
  },
  {
    id: "motion",
    name: "Signia Motion",
    slug: "signia-motion",
    image: "/images/product-showcase-3.jpg",
    description: "Ultra-slim, award-winning design with motion sensor technology.",
  },
  {
    id: "insio",
    name: "Signia Insio Custom",
    slug: "signia-insio-custom",
    image: "/images/product-showcase-4.jpg",
    description: "Custom-made hearing aids designed for comfort and performance.",
  },
  {
    id: "silk",
    name: "Signia Silk",
    slug: "signia-silk",
    image: "/images/product-showcase-5.jpg",
    description: "Instant-fit, discreet hearing aids with natural sound quality.",
  },
  {
    id: "intuis",
    name: "Intuis 4",
    slug: "intuis-4",
    image: "/images/product-showcase-6.jpg",
    description: "Reliable and easy-to-use hearing solution with durable design.",
  },
]

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
  {featuredProducts.map((product, index) => (
    <Card
      key={product.id}
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <p className="mb-4 text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <Button asChild variant="link" className="p-0 text-primary group/btn">
          <Link href={`/products/${product.slug}`}>
            See More
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
