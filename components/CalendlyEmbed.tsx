'use client';
import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
      data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=141414&text_color=ffffff&primary_color=F5C518`}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
