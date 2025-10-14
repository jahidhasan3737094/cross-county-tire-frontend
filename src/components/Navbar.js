export default function Navbar() {
  return (
    <nav className="bg-dark text-white flex justify-between items-center px-8 py-4 shadow-lg">
      <h1 className="text-xl font-bold text-primary">
        Cross County Tire & Service Inc.
      </h1>
      <ul className="flex gap-8">
        <li><a href="#services" className="hover:text-primary transition">Services</a></li>
        <li><a href="#about" className="hover:text-primary transition">About</a></li>
        <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
      </ul>
    </nav>
  );
}
