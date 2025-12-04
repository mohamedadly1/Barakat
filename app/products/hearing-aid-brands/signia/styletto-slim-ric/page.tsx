import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Styletto Slim RIC - Signia Hearing Aids | Al-Barakat",
  description: "Discover Signia Styletto Slim RIC - ultra-thin and stylish hearing aids designed for modern living.",
}

export default function StilettoSlimRICPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Signia Styletto Slim RIC</h1>
            <p className="text-lg text-muted-foreground">
              Ultra-thin design meets premium performance. The slimmest receiver-in-canal hearing aid available.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <img
                src="/images/signia-styletto-connect-black_pair.png"
                alt="Signia Styletto Slim RIC"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold">Why Choose Styletto Slim?</h2>
              <ul className="mb-8 space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Ultra-slim profile - virtually invisible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Premium styling available in multiple colors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Exceptional sound clarity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>All-day battery or rechargeable options</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Perfect for social situations</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button asChild size="lg" className="transition-all hover:scale-105">
                  <Link href="/booking">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all hover:scale-105 bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Design & Technology</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Sleek Design</h3>
                <p className="text-muted-foreground">
                  Slim, elegant design that complements your personal style and goes unnoticed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Smart Features</h3>
                <p className="text-muted-foreground">
                  App control, automatic environment detection, and adaptive hearing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Durability</h3>
                <p className="text-muted-foreground">Water and dust resistant for active lifestyles.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Experience the Styletto Difference</h2>
              <p className="mb-6 text-lg opacity-90">Schedule your free fitting and consultation today.</p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Book Your Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
