
// src/components/NavBar.tsx

"use client";  // 0) Importar Link de Next.js para navegación

import Link from "next/link";
import { usePathname  } from  "next/navigation"; // 1) leer ruta actual

export default function NavBar() {
  const pathname = usePathname(); // 2) guardar ruta actual (ej: "/inventario") 

// 3) función para saber si un link está activo
const isActive = (href: string) => pathname === href;

// 4) función para construir clases condicionales (activo / inactivo)
const linkClass = (href: string) =>
  "px-3 py-1.5  rounded-md text-sm font-medium transition-colors " +
  (isActive(href)
    ? " bg-blue-600  text-white" // activo
    : " text-gray-700 hover:bg-gray-100"); // inactivo

  return (
    <header className="border-b bg-white">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Taller Ing. Mecánica
        </Link>

        <ul className="flex items-center gap-5 text-sm">
          <li><Link href="/inventario" className={linkClass("/inventario")}>Inventario</Link></li>
          <li><Link href="/prestamos"  className={linkClass("/prestamos")}>Préstamos</Link></li>
          <li><Link href="/calendario" className={linkClass("/calendario")}>Calendario</Link></li>
          <li><Link href="/usuarios"   className={linkClass("/usuarios")}>Usuarios</Link></li>
        </ul>
      </nav>
    </header>
  );
}
