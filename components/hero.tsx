import { CalendarCheck, Phone, ShieldCheck } from 'lucide-react'
import { site } from '@/lib/site'
import { bigButtonOutline, bigButtonPrimary } from '@/components/big-button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-20" aria-labelledby="hero-heading">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-4 py-2 text-base font-bold text-primary">
            <span aria-hidden="true">{'\u{1F44B}'}</span>
            Tech help for young, old, and everyone in between.
          </p>

          <h1
            id="hero-heading"
            className="text-pretty text-4xl font-black leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Book your Dino Tech Support Session
          </h1>

          <p className="mt-4 text-2xl font-black text-primary sm:text-3xl">
            We work as fast as you can.
          </p>

          <p className="mt-6 max-w-xl text-pretty text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            Friendly, reliable tech help over the phone, screen share, or in-person. Whether
            you&apos;re setting up a new iPhone, fixing dropouts on your Smart TV, or troubleshooting a
            laptop for work or school&mdash;Alex goes at whatever pace suits you best.
          </p>
        </div>

        <div className="rounded-3xl border-2 border-border bg-card p-7 shadow-lg sm:p-9">
          <h2 className="text-balance text-2xl font-black sm:text-3xl">
            Standard 30-Minute Session
          </h2>

          <p className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-black text-primary sm:text-5xl">$50</span>
            <span className="text-lg font-bold text-muted-foreground">AUD per 30-min session</span>
          </p>

          <div className="mt-7 flex flex-col gap-4">
            <a href="#booking" className={cn(bigButtonPrimary, 'w-full text-xl')}>
              <CalendarCheck className="size-7" aria-hidden="true" />
              Book a Remote Slot Now
            </a>
            <a href={site.phoneHref} className={cn(bigButtonOutline, 'w-full text-xl')}>
              <Phone className="size-7 text-primary" aria-hidden="true" />
              Call Us Now: {site.phoneDisplay}
            </a>
          </div>

          <p className="mt-6 flex items-center gap-3 text-base font-semibold">
            <ShieldCheck className="size-6 shrink-0 text-primary" aria-hidden="true" />
            No call-out fees. Plain English guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}
