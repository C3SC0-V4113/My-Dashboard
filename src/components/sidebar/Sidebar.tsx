import Image from "next/image";
import React from "react";
import {
  IoBrowsersOutline,
  IoCalculatorOutline,
  IoHeartOutline,
  IoLogoReact,
} from "react-icons/io5";
import { MdCatchingPokemon } from "react-icons/md";
import { SideBarItem } from "./SideBarItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={24} />,
    title: "Dashboard",
    subtitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline size={24} />,
    title: "Calculator",
    subtitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <MdCatchingPokemon size={24} />,
    title: "Pokemons",
    subtitle: "Generación Estática",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={24} />,
    title: "Favoritos",
    subtitle: "Favoritos por Estado Global",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>
          <span>.</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full"
              src={"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"}
              alt={"profile-pic"}
              width={32}
              height={32}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Francisco Valle
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((menuItem) => (
          <SideBarItem key={menuItem.path} {...menuItem} />
        ))}
      </div>
    </div>
  );
};
