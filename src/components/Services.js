export default function Services() {
  const items = [
    {
      title: "Fleet Maintenance (Amazon DSP)",
      desc: "We handle PM services, diagnostics, and full repairs for DSP fleets to keep your vans on the road.",
    },
    {
      title: "Road & Mobile Service",
      desc: "Techs available day and night at DSP warehouses or on-site — minimizing downtime.",
    },
    {
      title: "Body & Paint Work",
      desc: "High-quality collision repair and repainting for fleet and personal vehicles.",
    },
    {
      title: "General Auto Repair",
      desc: "From brakes to oil changes — we service all makes and models with precision.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-dark">Our Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {items.map((s, i) => (
          <div key={i} className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-primary mb-3">{s.title}</h3>
            <p className="text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
