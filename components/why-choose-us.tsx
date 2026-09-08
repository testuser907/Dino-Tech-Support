import { HeartHandshake, Receipt, Users } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Local & friendly',
    body: 'We live in your area. The same helper comes back each time, so you never explain yourself twice.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient step-by-step guidance',
    body: 'We go at your pace, write notes you can keep, and never make you feel silly for asking.',
  },
  {
    icon: Receipt,
    title: 'Transparent flat rates',
    body: 'You hear the full price before we start. No hourly surprises and no hidden call-out fees.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="why-heading" className="text-balance text-3xl font-black sm:text-4xl lg:text-5xl">
          Why neighbours choose us
        </h2>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.title} className="rounded-2xl border-2 border-foreground/15 bg-card p-7">
              <reason.icon className="size-11 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-extrabold">{reason.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {reason.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
