import React, { useEffect, useMemo, useState } from "react";
import Style from "@/styles/Header.module.css";
import Link from "next/link";
import { FaRegMoon } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const path = usePathname();

  const [showSideBar, setShowSideBar] = useState(false);
  const [showSideBarNow, setShowSideBarNow] = useState(false);

  useEffect(() => {
    setShowSideBar(false);
  }, [path]);

  return (
    <div className={Style.parent}>
      <div className={Style.right}>
        {!showSideBar && (
          <FiMenu
            className={Style.show_menu_icon}
            onClick={() => {
              setShowSideBarNow(true);
              setShowSideBar(true);
            }}
          />
        )}
        <ul
          className={`${Style.ul} ${
            showSideBar ? Style.show_side_bar : Style.close_delay_side_bar
          } ${!showSideBarNow && Style.close_side_bar}`}
        >
          {showSideBar && (
            <IoClose
              className={Style.close_menu_icon}
              onClick={() => {
                setShowSideBarNow(false);
                setTimeout(() => setShowSideBar(false), 2000);
              }}
            />
          )}
          <li className={`${path === "/" && Style.active}`}>
            <div>
              <Link href={"/"}>درباره من</Link>
            </div>
          </li>
          <li className={`${path === "/works" && Style.active}`}>
            <div>
              <Link href={"/works"}>نمونه کارها</Link>
            </div>
          </li>
          <li className={`${path === "/skills" && Style.active}`}>
            <div>
              <Link href={"/skills"}>توانایی ها</Link>
            </div>
          </li>
          <li className={`${path === "/contact-me" && Style.active}`}>
            <div>
              <Link href={"/contact-me"}>ارتباط با من</Link>
            </div>
          </li>
        </ul>
        <div
          className={`${showSideBar && Style.blank_side_bar}`}
          onClick={() => {
            setShowSideBarNow(false);
            setTimeout(() => setShowSideBar(false), 2000);
          }}
        ></div>
        {/* <i className={Style.them}>
          <FaRegMoon className={Style.them_icon} />
        </i> */}
      </div>
      <div className={Style.logo}>𝓜𝓸𝓼𝓽𝓪𝓯𝓪</div>
    </div>
  );
}
