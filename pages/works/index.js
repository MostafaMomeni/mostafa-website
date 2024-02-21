import React, { useState } from "react";
import Styles from "@/styles/Works.module.css";
import Image from "next/image";

export default function works() {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "سایت دانلود فیلم",
      src: "/Assets/movie-works.png",
      color: "aqua",
      href: "https://mostafatest.iran.liara.run",
    },
    {
      id: 2,
      title: "سایت فروشگاهی",
      src: "/Assets/shop-works.png",
      color: "pink",
      href: "https://szstore.liara.run",
    },
  ]);

  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>نمونه کار ها</h1>
      <br />
      <div>
        {works.map((item) => (
          <div
            className={`${item.color === "pink" ? Styles.pink : Styles.aqua} ${
              Styles.box_parent
            }`}
          >
            <a href={item.href}>
              <Image
                className={Styles.image}
                src={item.src}
                alt={item.title}
                width={700}
                height={500}
              />
            </a>
            <p className={Styles.title_box}>
              <a href={item.href}>{item.title}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
