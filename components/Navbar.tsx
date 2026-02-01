"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const navItems = [
  { title: "Inicio", to: "/" },
  { title: "Nosotros", to: "/nosotros" },
  { title: "Servicios", to: "/servicios" },
  { title: "Projectos", to: "/projectos" },
  { title: "Contacto", to: "/contacto" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="p-4 border-b-2 border-b-gray-400 w-full">
      <section className="flex w-full justify-between items-center">
        <Image src="/logo.svg" alt="Axom Veritas Logo" width={80} height={80} />
        <nav>
          <ul className="flex gap-12 items-center">
            {navItems.map((el: any, index: number) => {
              const isActive = pathname === el.to;
              return (
                <li key={el.to}>
                  <Link
                    className={`font-medium transition-colors pb-2 border-b-2 ${
                      isActive
                        ? "text-primary font-semibold border-b-primary"
                        : "text-gray-700 hover:text-primary border-b-transparent"
                    }`}
                    href={el.to}
                  >
                    {el.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="bg-bg-primary text-tertiary font-semibold py-3 px-6 hover:bg-tertiary hover:text-bg-primary transition duration-200 border-2 border-tertiary border-b-4">
          Comencemos!
        </button>
      </section>
    </header>
  );
};
