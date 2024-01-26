import React, { useState } from "react";
import {
  ValidatingName,
  ValidatingPhone,
  ValidatingEmail,
} from "../../utilities/Validation.jsx";
const Contact = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [msg, setMsg] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
    setMsg({});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, subject, message } = formData;
    const result1 = ValidatingName(firstName);
    const result2 = ValidatingName(lastName);
    const result3 = ValidatingEmail(email);
    const result4 = ValidatingPhone(phone);
    const result5 = ValidatingName(subject);
    const result6 = message.trim().length > 0;
    if (result1 && result2 && result3 && result4 && result5 && result6) {
      try {
        const formData = new FormData(e.target);

        formData.append("access_key", "84af6ef6-eba5-413e-a498-756dea8e4e0e");

        const object = Object.fromEntries(formData);

        const json = JSON.stringify(object);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());
        console.log(res);
        if (res.success) {
          setMsg({ text: "message sent...", class: "green" });
          setformData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setTimeout(() => {
            setMsg({});
          }, 2000);
        }
      } catch (error) {
        setMsg({
          text: error.message,
          class: "red",
        });
      }
    } else {
      setMsg({
        text: "failed to send please fill the all input feilds",
        class: "red",
      });
    }
  };
  return (
    <div className="text-white w-11/12 mt-8">
      <h1 className="text-2xl">Envoyez nous un message</h1>
      <div className="max-w-2xl mx-auto m-4">
        <form onSubmit={handleSubmit}>
          <div className="grid xl:grid-cols-2 xl:gap-6 text-black">
            <div className="relative z-0 mb-6 w-full group bg-white  rounded-sm">
              <input
                type="text"
                name="firstName"
                id="floating_first_name"
                className="block pt-4 px-2 w-full text-sm bg-transparent   text-gray-900 appearance-none peer focus:outline-none"
                placeholder=" "
                required=""
                value={formData.firstName}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_first_name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-2 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
              >
                Prénom
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group bg-white rounded-sm">
              <input
                type="text"
                name="lastName"
                id="floating_last_name"
                className="block pt-4 px-2 w-full text-sm bg-transparent   text-gray-900 appearance-none peer focus:outline-none"
                placeholder=" "
                required=""
                value={formData.lastName}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_last_name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-2 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
              >
                Nom
              </label>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6 rounded-sm">
            <div className="relative z-0 mb-6 w-full group bg-white">
              <input
                type="text"
                name="email"
                id="floating_email"
                className="block pt-4 px-2 w-full text-sm bg-transparent   text-gray-900 appearance-none peer focus:outline-none"
                placeholder=" "
                required=""
                value={formData.email}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-2 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group bg-white">
              <input
                type="text"
                name="phone"
                id="floating_phone"
                className="block pt-4 px-2 w-full text-sm bg-transparent   text-gray-900 appearance-none peer focus:outline-none"
                placeholder=" "
                required=""
                value={formData.phone}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_phone"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-2 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
              >
                numéro de téléphone
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <div className="relative z-0 mb-6 w-full group bg-white rounded-sm">
              <input
                type="text"
                name="subject"
                id="floating_subject"
                className="block pt-4 px-2 w-full text-sm bg-transparent   text-gray-900 appearance-none peer focus:outline-none"
                placeholder=" "
                required=""
                value={formData.subject}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_subject"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-2 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
              >
                Subjet
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group bg-white rounded-sm">
            <textarea
              name="message"
              id="floating_message"
              rows="10"
              className=" resize-none p-4 pt-8 block px-2 w-full text-sm bg-transparent   text-gray-900 appearance-none peer focus:outline-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label
              htmlFor="floating_message"
              className="absolute text-lg text-gray-500 duration-300 transform -translate-y-2 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
            >
              Message
            </label>
          </div>
          <p className={`text-${msg.class}-400`}>{msg.text}</p>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
