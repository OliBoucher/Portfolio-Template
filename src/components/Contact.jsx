import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {
  send,
  sendHover,
  dribble,
  linkedin,
  cv,
  telephone,
  mail,
  cvOli,
} from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        "serviceID", // paste your ServiceID here (you'll get one when your service is created).
        "templateID", // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "YourName", // put your name here.
          from_email: form.email,
          to_email: "youremail@gmail.com", //put your email here.
          message: form.message,
        },
        "yourpublickey" //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="my-[4rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Prenons contact</p>
        <div className="flex justify-between items-center">
          <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
          <div className="flex justify-start items-center">
            <a href="https://www.linkedin.com/in/oliboucher" className="cursor-pointer">
              <img src={linkedin} alt="" className="w-8 sm:w-10 md:w-12" />
            </a>
            <img
              src={cv}
              alt=""
              className="w-8 sm:w-10 md:w-12 mx-4 cursor-pointer"
              onClick={() => window.open(cvOli, "_blank")}
            />
            <a href="https://dribbble.com/Oliboi_" target="_blank" className="cursor-pointer">
              <img src={dribble} alt="" className="w-8 sm:w-10 md:w-12" />
            </a>
          </div>
        </div>
        <h4 className="text-2xl mt-5 lg:text-3xl">
          <span className="text-degrade2 font-bold">Oli Boucher</span> |
          Saint-Jérôme | Développeur front-end
        </h4>
        <div className="flex flex-row justify-start items-center mt-8">
          <img src={telephone} alt="" className="w-8 mr-8" />
          <p className="text-xl lg:text-2xl font-medium">438 334.3050</p>
        </div>
        <div className="flex flex-row justify-start items-center mt-2">
          <img src={mail} alt="" className="w-8 mr-8" />
          <p className="text-xl lg:text-2xl font-medium">oli_boucher@outlook.com</p>
        </div>
        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
