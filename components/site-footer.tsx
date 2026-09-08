import Image from 'next/image'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-border bg-card py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/dino-mascot.png"
              alt=""
              width={64}
              height={64}
              className="size-14 rounded-full border-2 border-border bg-secondary object-cover"
            />
            <span className="font-display text-2xl font-black leading-tight">
              Dino Tech
              <span className="block text-primary">Support</span>
            </span>
          </div>
          <p className="mt-5 flex items-start gap-3 text-lg text-muted-foreground">
            <MapPin className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
            {site.area}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold">Contact us</h2>
          <p className="mt-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-3 text-2xl font-black text-primary underline"
            >
              <Phone className="size-7" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 text-lg font-semibold underline"
            >
              <Mail className="size-6 text-primary" aria-hidden="true" />
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="flex items-center gap-3 text-2xl font-extrabold">
            <Clock className="size-7 text-primary" aria-hidden="true" />
            Opening hours
          </h2>
          <dl className="mt-4 flex flex-col gap-3 text-lg">
            {site.hours.map((entry) => (
              <div key={entry.days}>
                <dt className="font-bold">{entry.days}</dt>
                <dd className="text-muted-foreground">{entry.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl px-5 text-base text-muted-foreground">
        &copy; {new Date().getFullYear()} {site.name}. Patient tech help for our neighbours.
      </p>
    </footer>
  )
}
