import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'He never once made me feel foolish. He wrote every step down on paper for me, and now I video call my grandchildren every Sunday.',
    name: 'Margaret, 78',
    location: 'Riverside',
  },
  {
    quote:
      'My internet had been dropping out for months. They fixed it in one visit and told me the price before they started. No surprises.',
    name: 'Frank, 71',
    location: 'Oakvale',
  },
  {
    quote:
      'I nearly replied to a text about a parcel. Dino Tech showed me how to spot the fakes. I feel much safer on my phone now.',
    name: 'Doreen, 83',
    location: 'Mill Creek',
  },
]

export function Testimonials() {
  return (
    <section className="py-14 sm:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-5">
        <h2
          id="testimonials-heading"
          className="text-balance text-3xl font-black sm:text-4xl lg:text-5xl"
        >
          What our customers say
        </h2>

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="flex flex-col rounded-2xl border-2 border-foreground/15 bg-card p-7"
            >
              <div className="flex gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-6 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-5 text-pretty text-xl leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-lg font-bold">
                {testimonial.name}
                <span className="block font-normal text-muted-foreground">
                  {testimonial.location}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
