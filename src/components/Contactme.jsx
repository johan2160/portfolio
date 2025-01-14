import React, { useState, useEffect } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contactme = () => {
  const initialFormValues = {
    user_name: "",
    user_email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qal9fp6",
        "template_jdca0tg",
        e.target,
        "SFcWM1u1BUM6dGD95"
      )
      .then(
        () => {
          setFormValues(initialFormValues);
          setIsEmailSent(true);
        },
        (error) => {
          console.log("Error...", error.text);
        }
      );
  };

  useEffect(() => {
    let timer;
    if (isEmailSent) {
      timer = setTimeout(() => {
        setIsEmailSent(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isEmailSent]);

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <section
      id="contactme"
      className="flex flex-col items-center justify-center p-4 mt-64 text-center text-content md:h-screen md:mt-80 xl:mt-96"
    >
      <motion.h2
        className="text-3xl md:text-5xl mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        custom={0}
      >
        Contáctame
      </motion.h2>
      <motion.form
        onSubmit={sendEmail}
        className="w-full max-w-[496px] xl:max-w-[774px] flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        custom={1}
      >
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name" className="text-start text-label">
              Nombre <span className="text-required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="John Doe"
              value={formValues.user_name}
              onChange={handleInputChange}
              className="px-4 py-3 border-2 rounded-md outline-none border-darkgrey focus:border-primary bg-darkgrey"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="email" className="text-start text-label">
              Correo <span className="text-required">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="user_email"
              placeholder="johndoe@gmail.com"
              value={formValues.user_email}
              onChange={handleInputChange}
              className="px-4 py-3 border-2 rounded-md outline-none border-darkgrey focus:border-primary bg-darkgrey"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-start text-label">
            Escriba su mensaje <span className="text-required">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Como anda la cosa?"
            value={formValues.message}
            onChange={handleInputChange}
            className="px-4 py-3 border-2 rounded-md outline-none resize-none border-darkgrey focus:border-primary min-h-72 bg-darkgrey"
            required
          ></textarea>
        </div>
        <div className="self-center">
          <Button text="Enviar mensaje" />
        </div>
        {isEmailSent && (
          <span className="p-5 font-semibold rounded-md outline-none text-background bg-primary">
            Mensaje enviado correctamente ✅!
          </span>
        )}
      </motion.form>
    </section>
  );
};

export default Contactme;
