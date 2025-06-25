import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Mi Sitio Optimizado
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contacto" className="hover:underline">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
