import React from 'react';
import data from '../data/business-data.json';

export default function Hero() {
  const ctaText = data.cta[data.siteType as keyof typeof data.cta];
  const baseUrl = "/agency-v3"; // Match your config

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Modern Solutions for <span className="text-brand-primary">{data.businessName}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We build high-performance, AI-ready static sites tailored for {data.siteType} businesses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={`${baseUrl}/contact`}
              className="rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-hover transition-all"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}