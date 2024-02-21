import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.home_parent}>
        <h1 className={styles.title}>درباره من</h1>
        <br />
        <p className={styles.text_me}>
           مصطفی مومنی دانش آموز رشته کامپیوتر شهر قم هستم و در توسعه
          وبسایت(front-end) فعالیت میکنم.
        </p>
        <p className={styles.text_me}>
          من فعالیت خودم را در این زمینه از سن 15 سالگی شروع کردم.
        </p>
        <p className={styles.text_me}>
          من علاقه خاصی به حل کردن چالش ها و همکاری در کار تیمی و اضافه کردن به
          دانش خویش دارم.
        </p>
        <br />
        <br />
        <h2 className={styles.title_h2}>چرا به سایت نیاز دارید؟</h2>
        <br />
        <p className={styles.text_me}>
          در دنیای امروزی که تکنولوژی پیشرفت کرده نیاز افراد و شرکت ها به داشتن
          سایت برای معرفی خود و ارائه خدمات بیشتر شده .
        </p>
        <p className={styles.text_me}>
          پس داشتن سایت میتواند به شما کمک های بسیاری کند مانند:
        </p>

        <div className={styles.box_parent}>
          <div className={styles.sale_box}>
            <IoBagHandleSharp className={styles.blue_icon_box} />
            <span className={styles.title_box}>فروش محصولات</span>
            <p className={` mt-2 ${styles.text_box_me}`}>
              شما میتوانید با استفاده از سایت محصولات خود را به دیگران نشان دهید
              و از طریق آن حتی محصولات خود را بفروش برسانید
            </p>
          </div>
          <div className={styles.user_box}>
            <FaUsers className={styles.pink_icon_box} />
            <span className={styles.title_box}>معرفی خود</span>
            <p className={` mt-2 ${styles.text_box_me}`}>
              شما میتوانید با استفاده از سایت خودتان را به دیگران معرفی کنید و
              این کار علاوه بر کسب اعتماد مردم باعث شناخته شدن بین مردم میشود.
            </p>
          </div>
        </div>
        <div className={`mt-4 ${styles.box_parent}`}>
          <div className={styles.user_box}>
            <LuMessagesSquare className={styles.pink_icon_box} />
            <span className={styles.title_box}>وبلاگ نویسی</span>
            <p className={` mt-2 ${styles.text_box_me}`}>
              با استفاده از سایت شما میتوانید انواع وبلاگ ها را بسازید و دانش
              خود را با مردم به اشتراک بزارید
            </p>
          </div>
          <div className={styles.sale_box}>
            <FaDollarSign className={styles.blue_icon_box} />
            <span className={styles.title_box}>کسب درآمد</span>
            <p className={` mt-2 ${styles.text_box_me}`}>
              شما میتوانید با استفاده از سایت از راه های مختلفی کسب درآمد داشته
              باشید یکی از این راه ها تبلیغات هست
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
