'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export function CalEmbed() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({})
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border">
      <Cal
        calLink="alex-dino/30min"
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  )
}