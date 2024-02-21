import React, { useEffect, useMemo, useState } from "react";
import Style from "@/styles/Header.module.css";
import Link from "next/link";
import { FaRegMoon } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

export default function Header() {
  const path = usePathname();

  const [showSideBar, setShowSideBar] = useState(false);
  const [showSideBarNow, setShowSideBarNow] = useState(false);

  const [localThem, setLocalThem] = useState(null);
  const [localThemLoad, setLocalThemLoad] = useState(null);

  useEffect(() => {
    setShowSideBar(false);
    setLocalThem(localStorage.getItem("them"));
  }, [path]);

  useEffect(() => {
      setLocalThemLoad(localStorage.getItem("them"));
      console.log(localStorage.getItem("them"));
      if (localStorage.getItem("them") === null) {
        setLocalThem("light");
        localStorage.setItem("them", "light");
      }
  }, []);

  useEffect(() => {
    localStorage.setItem("them", localThem);

    if (localThem === "dark") {
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty(
        "--bg-body",
        "url(https://bostami-bootstrap.ibthemespro.com/bostami-template/assets/img/bg/page-bg-dark-1.jpg)"
      );
      document.documentElement.style.setProperty("--them-primary", "#0055bd");
      document.documentElement.style.setProperty(
        "--bg-card",
        "rgba(0 , 0 , 0, 0.8)"
      );
      document.documentElement.style.setProperty("--bg-light-items", "#212020");
      document.documentElement.style.setProperty(
        "--conflict-text-color",
        "black"
      );
    } else {
      document.documentElement.style.setProperty("--text-color", "black");
      document.documentElement.style.setProperty(
        "--bg-body",
        "url(https://bostami-bootstrap.ibthemespro.com/bostami-template/assets/img/bg/page-bg-1.jpg)"
      );
      document.documentElement.style.setProperty("--them-primary", "#60a7fe");
      document.documentElement.style.setProperty(
        "--bg-card",
        "rgba(255, 255, 255, 0.995)"
      );
      document.documentElement.style.setProperty("--bg-light-items", "#ededed");
      document.documentElement.style.setProperty(
        "--conflict-text-color",
        "white"
      );
    }
  }, [localThem]);

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
        <i className={Style.them}>
          {localThem === "light" ? (
            <FaRegMoon
              className={Style.them_icon}
              onClick={() =>
                localThem === "dark"
                  ? setLocalThem("light")
                  : setLocalThem("dark")
              }
            />
          ) : (
            <FaSun
              className={Style.them_icon}
              onClick={() =>
                localThem === "dark"
                  ? setLocalThem("light")
                  : setLocalThem("dark")
              }
            />
          )}
        </i>
      </div>
      <div className={Style.logo}>𝓜𝓸𝓼𝓽𝓪𝓯𝓪</div>
    </div>
  );
}
