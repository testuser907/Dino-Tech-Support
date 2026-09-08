'use client'

import { useState } from 'react'
import {
  Check,
  Gift,
  Home,
  Laptop,
  MessageCircleQuestion,
  Smartphone,
  Video,
  Wifi,
} from 'lucide-react'
import CalEmbed from '@/components/cal-embed'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

type SupportType = 'remote' | 'in-person'

const helpOptions = [
  { id: 'computer', label: 'Computer or laptop', icon: Laptop },
  { id: 'phone', label: 'Phone or tablet', icon: Smartphone },
  { id: 'internet', label: 'Internet, Wi-Fi or TV', icon: Wifi },
  { id: 'other', label: 'Something else', icon: MessageCircleQuestion },
]

const stepHeading = 'font-display text-2xl font-extrabold sm:text-3xl'

function StepNumber({ n }: { n: number }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-black text-primary-foreground"
    >
      {n}
    </span>
  )
}

export function BookingForm() {
  const [supportType, setSupportType] = useState<SupportType>('remote')
  const [needs, setNeeds] = useState<string[]>([])

  function toggleNeed(id: string) {
    setNeeds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return (
    <section
      id="booking"
      className="border-y-2 border-border bg-card py-14 sm:py-20"
      aria-labelledby="booking-heading"
    >
      {/* Expanded to max-w-4xl for extra calendar width */}
      <div className="mx-auto max-w-4xl px-5">
        <h2
          id="booking-heading"
          className="text-balance text-3xl font-black sm:text-4xl lg:text-5xl"
        >
          Book a remote session
        </h2>

        <p className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-5 py-2 text-xl font-extrabold text-primary">
          {site.price}
        </p>

        <p className="mt-4 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          Not sure how long your issue will take? Most problems are solved within 30 minutes. Extra
          time is simply billed at $25 per 15-min block, and Alex will always check with you before
          going over.
        </p>

        <p className="mt-4 text-xl text-muted-foreground">
          Prefer to talk now?{' '}
          <a href={site.phoneHref} className="font-bold text-primary underline">
            Call {site.phoneDisplay}
          </a>
          .
        </p>

        <div className="mt-10 flex flex-col gap-10 rounded-3xl border-2 border-foreground/15 bg-background p-6 sm:p-9">
          {/* Step 1 */}
          <fieldset>
            <legend className="mb-5 flex items-center gap-4">
              <StepNumber n={1} />
              <span className={stepHeading}>What kind of support do you want?</span>
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              {(
                [
                  {
                    id: 'remote',
                    label: 'Phone, video or remote',
                    hint: 'We help you from your own home',
                    icon: Video,
                  },
                  {
                    id: 'in-person',
                    label: 'In-home visit (add-on)',
                    hint: 'Around Byron Bay only',
                    icon: Home,
                  },
                ] as const
              ).map((option) => {
                const selected = supportType === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSupportType(option.id)}
                    className={cn(
                      'flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-colors',
                      selected
                        ? 'border-primary bg-primary/10'
                        : 'border-input hover:border-foreground/40',
                    )}
                  >
                    <option.icon
                      className={cn('size-9 shrink-0', selected ? 'text-primary' : 'text-foreground')}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-xl font-bold">{option.label}</span>
                      <span className="block text-lg text-muted-foreground">{option.hint}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          {/* Step 2 */}
          <fieldset>
            <legend className="mb-5 flex items-center gap-4">
              <StepNumber n={2} />
              <span className={stepHeading}>What do you need help with?</span>
            </legend>
            <p className="mb-4 text-lg text-muted-foreground">Tick as many as you like.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {helpOptions.map((option) => {
                const selected = needs.includes(option.id)
                return (
                  <label
                    key={option.id}
                    className={cn(
                      'flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-5 transition-colors has-[input:focus-visible]:outline has-[input:focus-visible]:outline-[3px] has-[input:focus-visible]:outline-offset-[3px] has-[input:focus-visible]:outline-ring',
                      selected ? 'border-primary bg-primary/10' : 'border-input hover:border-foreground/40',
                    )}
                  >
                    <input
                      type="checkbox"
                      name="needs"
                      value={option.id}
                      checked={selected}
                      onChange={() => toggleNeed(option.id)}
                      className="sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        'flex size-9 shrink-0 items-center justify-center rounded-lg border-2',
                        selected
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-foreground/40 bg-background',
                      )}
                    >
                      {selected ? <Check className="size-6" /> : null}
                    </span>
                    <option.icon className="size-8 shrink-0 text-foreground" aria-hidden="true" />
                    <span className="text-xl font-bold">{option.label}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          {/* Step 3 — Cal.com scheduling widget */}
          <fieldset>
            <legend className="mb-5 flex items-center gap-4">
              <StepNumber n={3} />
              <span className={stepHeading}>Pick your time</span>
            </legend>
            <CalEmbed />
          </fieldset>

          <p className="text-center text-lg text-muted-foreground">
            Trouble with the calendar? Just{' '}
            <a href={site.phoneHref} className="font-bold text-primary underline">
              call {site.phoneDisplay}
            </a>{' '}
            and we will book you in.
          </p>
        </div>

        {/* Gift a Session Card */}
        <div className="mt-10 rounded-3xl border-2 border-primary/30 bg-primary/5 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <Gift className="size-8 text-primary shrink-0" />
            <h3 className="text-2xl font-black text-foreground sm:text-3xl">
              Gift a Session to a Loved One
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Tired of playing 24/7 tech support for family members? Gift them a 30-minute session with Alex. 
            We&apos;ll provide patient, friendly help and leave written notes behind.
          </p>
          <a
            href="https://buy.stripe.com/your-gift-link-here"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3.5 text-xl font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Buy a Prepaid Gift Voucher ($50)
          </a>
        </div>
      </div>
    </section>
  )
}