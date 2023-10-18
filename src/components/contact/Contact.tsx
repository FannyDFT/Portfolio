"use client";

import { useState, ChangeEvent } from "react";
import emailjs from "emailjs-com";
import "./_contact.scss";

interface UserInfos {
  firstname: string;
  email: string;
  message: string;
}

function Contact() {
  const [infos, setInfos] = useState<UserInfos>({
    firstname: "",
    email: "",
    message: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value,
    }));
  };

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value,
    }));
  };

  const resetForm = (): void => {
    setInfos({
      firstname: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = (): void => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error("Les variables d'environnement ne sont pas définies.");
      return;
    }
    const { firstname, email, message } = infos;

    const templateParams = {
      firstname: firstname,
      message,
      email: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("E-mail sent successfully:", response);
        resetForm();
      })
      .catch((error) => {
        console.error("Failed to send e-mail:", error);
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__text">
        <h1>Contactez moi !</h1>
        <p>
          Si vous avez des questions supplémentaires je suis à votre
          disposition. N&apos;hésitez pas à me contacter, je serais ravi
          d&apos;échanger avec vous.
        </p>
      </div>
      <form className="contact__form">
        <input
          type="text"
          placeholder="Prénom"
          onChange={handleChangeInput}
          name="firstname"
          value={infos.firstname}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChangeInput}
          name="email"
          value={infos.email}
        />
        <textarea
          placeholder="Message..."
          cols={25}
          rows={10}
          onChange={handleChangeTextarea}
          value={infos.message}
          name="message"
        ></textarea>
        <button type="button" onClick={sendEmail}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
