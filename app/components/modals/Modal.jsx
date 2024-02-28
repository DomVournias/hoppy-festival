import React from "react";
import { fetchMainMenu } from "@/api/functions";

const Modal = async () => {
  const menuData = await fetchMainMenu();

  const menu = menuData.data.menu.menuItems.nodes;
  return (
    <>
      <div className="modal max-w-full xl:hidden" role="dialog" id="menu_modal">
        <div className="modal-box w-screen max-w-full h-screen max-h-full rounded-none bg-primary text-primary-content justify-center items-center flex">
          <div className="modal-action">
            <a
              href="#"
              htmlFor="menu_modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-10 h-10"
            >
              ✕
            </a>
            <nav>
              <ul className="flex flex-col gap-4 text-center">
                {menu.map((item) => (
                  <li
                    key={item.id}
                    className="btn bg-transparent border-transparent text-white hover:text-black"
                  >
                    <a href={item.url}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
