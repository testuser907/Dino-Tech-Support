import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { BookingForm } from '@/components/booking-form'
import { Testimonials } from '@/components/testimonials'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div id="top">
      <a
        href="#booking"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-5 focus:py-3 focus:text-xl focus:font-bold focus:text-primary-foreground"
      >
        Skip to booking form
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <BookingForm />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  )
}
