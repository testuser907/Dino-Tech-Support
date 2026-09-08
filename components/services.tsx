import { Apple, Laptop, ShieldCheck, Wifi } from 'lucide-react'

const services = [
  {
    icon: Apple,
    title: 'Apple & Mobile Essentials',
    text: 'iCloud backup & storage full warnings, iPhone/iPad setup, syncing photos across Mac & phone, making text/icons larger, transferring data to a new device.',
  },
  {
    icon: Laptop,
    title: 'Laptops & Computers (Mac & Windows)',
    text: 'Speeding up slow computers, removing pop-ups & adware, clearing storage space, email setup (Gmail/Outlook), password manager configuration.',
  },
  {
    icon: Wifi,
    title: 'Home Wi-Fi & Smart TV',
    text: 'Fixing internet dropouts, setting up Smart TVs (Kayo, Netflix, ABC iview), connecting Apple TV/Chromecast, getting Wi-Fi signal to every room.',
  },
  {
    icon: ShieldCheck,
    title: 'Scam Protection & Digital Safety',
    text: 'Identifying fake texts & scam emails, setting up secure two-factor auth/passkeys, recovering locked accounts, peace-of-mind safety checks.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="border-y-2 border-border bg-card py-14 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-5">
        <h2
          id="services-heading"
          className="text-balance text-3xl font-black sm:text-4xl lg:text-5xl"
        >
          How we help
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
          Pick whatever sounds like your problem. If it is not on this list, call us anyway — we
          have probably seen it before.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border-2 border-border bg-background p-7 sm:p-8"
            >
              <span className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <service.icon className="size-9" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-extrabold text-balance sm:text-3xl">{service.title}</h3>
              <p className="mt-4 text-lg leading-relaxed sm:text-xl">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
