import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchMainMenu } from "@/api/functions";
import { headerLinks } from "../data/home";
import logo from "@/images/HoppyFestivalLogo.jpg";

const Header = async () => {
  const res = await fetchMainMenu();

  const menu = res.data.menu.menuItems.nodes;

  return (
    <header
      className="absolute z-50 w-full bg-gray-600 backdrop-filter backdrop-blur-md bg-opacity-20 border-b-[0.2px] border-[rgba(255,255,255,0.2)]
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
          <span>Hoppy Festival 2024</span>
        </Link>
        <nav>
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
      </div>
    </header>
  );
};

export default Header;
