import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Importamos Link para navegación rápida

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gas-Tomar & Co.",
  description: "Optimización etílica y control",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white`}>
        {/* Nav de Navegación */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
          <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-700 p-2 rounded-2xl flex justify-around items-center shadow-2xl">
            
            <Link 
              href="/" 
              className="flex-1 text-center py-2 px-4 rounded-xl hover:bg-slate-800 transition-all group"
            >
              <span className="block text-xl">🍺</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400 group-hover:text-yellow-500">
                Optimizar
              </span>
            </Link>

            <div className="w-[1px] h-8 bg-slate-700"></div>

            <Link 
              href="/calculadora" 
              className="flex-1 text-center py-2 px-4 rounded-xl hover:bg-slate-800 transition-all group"
            >
              <span className="block text-xl">⚖️</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400 group-hover:text-blue-400">
                Sobriedad
              </span>
            </Link>

          </div>
        </nav>

        {/* El contenido de las páginas (page.tsx) se renderiza aquí */}
        <div className="pb-24"> 
          {children}
        </div>
      </body>
    </html>
  );
}