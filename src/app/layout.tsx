import "./globals.css";

import NavBar from "../components/NavBar";

export const metadata = { title: "Taller Ing. Mecánica" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
