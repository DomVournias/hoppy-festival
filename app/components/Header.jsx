import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchMainMenu } from "@/api/functions";
import logo from "@/images/HoppyFestivalLogo.jpg";

const Header = async () => {
  const res = await fetchMainMenu();

  const menu = res.data.menu.menuItems.nodes;

  return (
    <header
      className="absolute z-50 w-full bg-gray-600 bg-opacity-0 xl:backdrop-filter xl:backdrop-blur-md xl:bg-opacity-20 xl:border-b-[0.2px] xl:border-[rgba(255,255,255,0.2)] px-3
    "
    >
      <div className="flex justify-between items-center max-w-7xl m-auto h-20 z-50 text-white">
        <Link href="/" className="text-lg font-bold flex items-center gap-3">
          <Image
            alt="header logo"
            src={logo}
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="hidden xl:flex">Hoppy Festival 2024</span>
        </Link>
        <nav className="hidden xl:flex">
          <ul className="flex gap-4">
            {menu.map((item) => (
              <li key={item.id}>
                <Link href={item.url} className="p-4 block text-sm font-bold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a htmlFor="menu_modal" className="xl:hidden" href="#menu_modal">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
