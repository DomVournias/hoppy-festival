import Image from "next/image";
import { IoIosPin } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import React from "react";

const About = (section) => {
  return (
    <section className="">
      <div className="flex space-x-20 ">
        <div className="relative w-1/2 ">
          <Image
            alt={section.section.image.node.title}
            src={section.section.image.node.sourceUrl}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-1/2 pr-40 space-y-6 flex flex-col justify-center py-40">
          <h3 className="text-4xl font-bold pb-2 text-black ">
            Σχετικά με εμάς
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: section.section.description }}
          />
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <IoIosPin className="flex bg-accent text-accent-content w-8 h-8 p-[4px] rounded-full" />
              <address className="font-semibold">
                <a
                  href="https://www.google.com/search?q=%CE%92%CE%B1%CF%83.+%CE%97%CF%81%CE%B1%CE%BA%CE%BB%CE%B5%CE%AF%CE%BF%CF%85+%26+%CE%9A%CE%BF%CE%BC%CE%BD%CE%B7%CE%BD%CF%8E%CE%BD+17+%CE%A4%CE%9A+54624%2C+%CE%98%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%AF%CE%BA%CE%B7&oq=%CE%92%CE%B1%CF%83.+%CE%97%CF%81%CE%B1%CE%BA%CE%BB%CE%B5%CE%AF%CE%BF%CF%85+%26+%CE%9A%CE%BF%CE%BC%CE%BD%CE%B7%CE%BD%CF%8E%CE%BD+17+%CE%A4%CE%9A+54624%2C+%CE%98%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%AF%CE%BA%CE%B7&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzQ3MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  rel="noopener"
                >
                  Βασ. Ηρακλείου & Κομνηνών 17 ΤΚ 54624, Θεσσαλονίκη
                </a>
              </address>
            </div>
            <div className="flex items-center space-x-2">
              <MdPhone className="flex bg-accent text-accent-content w-8 h-8 p-[4px] rounded-full" />
              <a href="tel:2315155312" className="font-semibold">
                2315155312
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MdPhoneAndroid className="flex bg-accent text-accent-content w-8 h-8 p-[4px] rounded-full" />
              <a href="tel:6979991825" className="font-semibold">
                6979991825
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
