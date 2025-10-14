export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-dark mb-6">Contact Us</h2>
      <p className="mb-2 text-lg">48 East Broad Street, Mount Vernon, NY 10552</p>
      <p className="mb-2 text-lg">(914) 668-5472</p>
      <p className="mb-4 text-lg">📧 crosscountytire@gmail.com</p>
      <p className="mb-6">Open: Mon-Sat, 8:00 AM – 6:00 PM</p>
      <a
        href="mailto:crosscountytire@gmail.com"
        className="bg-primary hover:bg-orange-600 text-white py-3 px-8 rounded-lg transition"
      >
        Email Us
      </a>
    </section>
  );
}
