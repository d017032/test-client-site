import React from 'react';
import data from '../data/business-data.json';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          See why businesses choose {data.businessName} for their digital presence.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none">
          {data.testimonials.map((t, index) => (
            <div key={index} className="flex flex-col items-start gap-y-6 rounded-2xl bg-slate-50 p-8 border border-slate-100">
              <p className="text-lg italic text-slate-700 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-x-4">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full bg-slate-200" />
                <div className="text-left">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}