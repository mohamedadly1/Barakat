import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Insio Custom - Signia Hearing Aids | Al-Barakat",
  description: "Discover Signia Insio Custom - custom-molded hearing aids for ultimate comfort and discretion.",
}

export default function InsioCustomPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Signia Insio Custom</h1>
            <p className="text-lg text-muted-foreground">
              Custom-molded precision. Tailored perfectly to your ear for ultimate comfort and discretion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <img
                src="/images/Insio-IX_IIC_black_left_shadow_size-ratio_1920x1080.jpg"
                alt="Signia Insio Custom"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold">Personalized Fit</h2>
              <ul className="mb-8 space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Custom-molded to your exact ear shape</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Maximum discretion and concealment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Enhanced comfort for extended wear</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Premium sound quality and clarity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Wireless connectivity features</span>
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
          <h2 className="mb-8 text-3xl font-bold">Custom Solution</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Perfect Fit</h3>
                <p className="text-muted-foreground">
                  Custom-molded shells ensure comfortable, secure wear that stays in place.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Invisible</h3>
                <p className="text-muted-foreground">
                  Sits deep in the ear canal for maximum discretion and natural appearance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Premium Sound</h3>
                <p className="text-muted-foreground">Advanced technology delivers exceptional audio quality.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Your Perfect Custom Hearing Aid</h2>
              <p className="mb-6 text-lg opacity-90">Schedule a fitting appointment with our specialists today.</p>
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
