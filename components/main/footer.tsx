import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-center gap-6 md:gap-10 flex-wrap mb-10">
          {FOOTER_DATA.map((column) => (
            <div key={column.title} className="flex flex-row items-center gap-6 md:gap-10">
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center hover:text-cyan-400 transition"
                >
                  {Icon && <Icon className="text-xl" />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Shivanshu {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
