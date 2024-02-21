import React, { useState } from "react";
import Styles from "@/styles/ContactMe.module.css";
import Swal from "sweetalert2";

export default function contactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!name  || !email || !message) {
      Swal.fire({
        title:"لطفا همه فیلد ها را پر کنید",
        icon:"warning",
        confirmButtonText:"باشه"
      })
    } 
    else if(name.trim().length < 4){
      Swal.fire({
        title:"نام شما باید حداقل 4 کاراکتر داشته باشد",
        icon:"warning",
        confirmButtonText:"باشه"
      })
    }
    else if(email.trim().length < 8){
      Swal.fire({
        title:"ایمیل شما باید حداقل 4 کاراکتر داشته باشد",
        icon:"warning",
        confirmButtonText:"باشه"
      })
    }
    else if(message.trim().length < 6){
      Swal.fire({
        title:"پیغام شما باید حداقل 4 کاراکتر داشته باشد",
        icon:"warning",
        confirmButtonText:"باشه"
      })
    }
    else {
      fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }).then((res) => {
        if (res.status === 201) {
          Swal.fire({
            title:"پیغام شما با موفقیت ارسال شد😉",
            icon:"success",
            confirmButtonText:"باشه"
          })
          setName("");
          setEmail("");
          setMessage("");
        } else if (res.status === 409) {
          Swal.fire({
            title:"لطفا همه فیلم ها را پر کنید",
            icon:"warning",
            confirmButtonText:"باشه پر میکنم"
          })
        } else if (res.status === 500) {
          Swal.fire({
            title:"مشکلی در سرور پیش آمده بعدا دوباره امتحان کنید",
            icon:"error",
            confirmButtonText:"باشه"
          })
        } else if (res.status === 509) {
          Swal.fire({
            title:"خطای ناشناخته",
            icon:"error",
            confirmButtonText:"باشه"
          })
        }
      });
    }
  };


  return (
    <>
      <h1 className={Styles.title_header}>ارتباط با من</h1>

      <div className={Styles.box_parent}>
        <h3 className={Styles.title_text}>
          من همیشه آماده صحبت در مورد پروژه ها هستم
        </h3>
        <h2 className={Styles.title_text} >
          {" "}
          کار طراحی سایت(front-end)
        </h2>
        <br />
        <form className={Styles.form}>
          <label for="name" className={Styles.label}>
            نام:
          </label>
          <div className={Styles.input_parent}>
            <input
              type="text"
              id="name"
              placeholder="نام خود را وارد کنید..."
              className={`${Styles.input} ${name.trim() && Styles.input_valid}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label for="email" className={Styles.label}>
            ایمیل:
          </label>
          <div className={Styles.input_parent}>
            <input
              type="email"
              id="email"
              placeholder="ایمیل خود را وارد کنید..."
              className={`${Styles.input} ${
                email.trim() && Styles.input_valid
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label for="message" className={Styles.label}>
            پیغام:
          </label>
          <div className={Styles.input_parent}>
            <textarea
              type="text"
              id="message"
              placeholder="پیغام خود را وارد کنید..."
              className={`${Styles.textarea} ${
                message.trim() && Styles.textarea_valid
              }`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className={Styles.button} onClick={(e) => sendMessage(e)}>
            ارسال
          </button>
        </form>
      </div>
    </>
  );
}
