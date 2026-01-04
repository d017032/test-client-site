import React from 'react';
import data from '../data/business-data.json';

const featureContent = {
  service: [
    { title: "Expert Consulting", desc: "Professional advice tailored to your growth." },
    { title: "24/7 Support", desc: "We are always here when your business needs us." },
    { title: "Data Analytics", desc: "Deep insights into your service performance." }
  ],
  shop: [
    { title: "Secure Payments", desc: "Fully encrypted checkout for your customers." },
    { title: "Fast Shipping", desc: "Logistics optimized for global delivery." },
    { title: "Inventory Sync", desc: "Real-time updates across all your platforms." }
  ],
  portfolio: [
    { title: "HD Galleries", desc: "Showcase your work in stunning high definition." },
    { title: "Case Studies", desc: "Detailed breakdowns of your creative process." },
    { title: "Client Testimonials", desc: "Social proof built directly into your work." }
  ]
};

export default function Features() {
  const type = data.siteType as keyof typeof featureContent;
  const items = featureContent[type] || featureContent.service;

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              {/* Dynamic Branding Applied Below: bg-brand-primary */}
              <div className="h-10 w-10 rounded-lg bg-brand-primary mb-6 flex items-center justify-center">
                <div className="h-5 w-5 border-2 border-white rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}