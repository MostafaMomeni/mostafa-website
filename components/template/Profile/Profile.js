import React from "react";
import styles from "@/styles/profile.module.css";
import Image from "next/image";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Profile() {
  return (
    <div className={styles.profile_parent}>
      <Image
        src={"/Assets/profile.png"}
        alt="profile"
        width={500}
        height={500}
        quality={100}
        className={styles.profile}
      />
      <h3 className={styles.name}>مصطفی مومنی</h3>
      <div className={styles.job}>طراح سایت</div>
      <div className={styles.icons_parent}>
        <a href="http://t.me/m0stafa_m0meni">
          <FaTelegramPlane className={styles.telegram_icon} />
        </a>
        <a href="http://instagram.com/m0stafa_m0meni">
          <FaInstagram className={styles.instagram_icon} />
        </a>
        <a href="http://github.com/MostafaMomeni">
          <FaGithub className={styles.github_icon} />
        </a>
      </div>

      <div className={styles.my_info_parent}>
        <div className={styles.item_my_info_parent}>
          <IoPhonePortraitOutline className={styles.phone_icon} />
          <div className={styles.text_my_info}>
            <span>شماره</span>
            <p>09100952046</p>
          </div>
        </div>
        <div className={styles.item_my_info_parent}>
          <MdOutlineEmail className={styles.email_icon} />
          <div className={styles.text_my_info}>
            <span>ایمیل</span>
            <p className={styles.email_text}>mostafa25101384@gmail.com</p>
          </div>
        </div>
        <div className={styles.item_my_info_parent}>
          <FaMapMarkerAlt className={styles.location_icon} />
          <div className={styles.text_my_info}>
            <span>مکان</span>
            <p>قم . پردیسان</p>
          </div>
        </div>
        <div className={styles.item_my_info_parent}>
          <FaRegCalendarDays className={styles.birthday_icon} />
          <div className={styles.text_my_info}>
            <span>تاریخ تولد</span>
            <p>1384/10/25</p>
          </div>
        </div>
      </div>
    </div>
  );
}
