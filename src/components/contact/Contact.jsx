import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('SERVICE ID', 'TEMPLATE ID', form.current, {
        publicKey: 'PUBLIC ID',
      })
      .then(
        () => {
          setName("");
          setMail("");
          setMsg("");
          toast.success("message sent Successfully")
        },
        (error) => {
          toast.error("Something went Wrong");
        },
      );
  };
  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div
        // data-aos="fade-up"
        className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div
              data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button

              data-aos="zoom-in"

              className=" text-blue-400 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. Ruturaj Sahu"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. admin@ruturaj.cloud"
              name="user_email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Drop your message"
              name="user_msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              id=""
              required
            />
            <button
              className="bg-gradient-to-r from-blue-300 to-blue-400  w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1 hover:text-black"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
