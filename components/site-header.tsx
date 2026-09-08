import Image from 'next/image'
import { Calendar, Gift, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { bigButtonPrimary } from '@/components/big-button'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  return (
    <header className="border-b-2 border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-5 sm:flex-row sm:justify-between">
        <a
          href="#top"
          className="flex items-center gap-4 rounded-xl"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/images/dino-mascot.png"
            alt=""
            width={72}
            height={72}
            className="size-16 rounded-full border-2 border-border bg-secondary object-cover sm:size-[72px]"
          />
          <span className="font-display text-2xl font-black leading-tight sm:text-3xl">
            Dino Tech
            <span className="block text-primary">Support</span>
          </span>
        </a>

        {/* Action Buttons Group */}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          {/* Solid Gift Button & Larger Subtext */}
          <div className="flex flex-col items-center">
            <a
              href="https://buy.stripe.com/your-gift-link-here"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 text-lg font-black text-amber-950 shadow-sm transition-colors hover:bg-amber-500 sm:w-auto"
            >
              <Gift className="size-5 shrink-0 text-amber-950" aria-hidden="true" />
              <span>Gift a Support Session</span>
            </a>
            <span className="mt-1 text-center text-sm font-extrabold text-amber-950">
              Tired of being family IT support? 🎁
            </span>
          </div>

          {/* Book Online Button */}
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary bg-primary/10 px-5 py-3 text-lg font-bold text-primary transition-colors hover:bg-primary/20"
          >
            <Calendar className="size-5 shrink-0" aria-hidden="true" />
            <span>Book Online</span>
          </a>

          {/* Call Us Button */}
          <a
            href={site.phoneHref}
            className={cn(bigButtonPrimary, 'w-full text-center text-xl sm:w-auto')}
          >
            <Phone className="size-6" aria-hidden="true" />
            <span>
              Call Us: <span className="whitespace-nowrap">{site.phoneDisplay}</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}