import { cn } from '@/lib/utils'

export const bigButton =
  'inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-xl font-bold font-display transition-colors disabled:opacity-60 disabled:pointer-events-none'

export const bigButtonPrimary = cn(
  bigButton,
  'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_0_0_oklch(0.38_0.09_195)]',
)

export const bigButtonOutline = cn(
  bigButton,
  'border-2 border-foreground/25 bg-card text-foreground hover:border-foreground/50 hover:bg-secondary',
)
