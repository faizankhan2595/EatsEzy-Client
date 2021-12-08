import React, { useState } from "react";
import { GrMapLocation } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";

const initialValue = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formDetail, setFormDetail] = useState(initialValue);

  const handleSubmit = () => {
    console.log(formDetail);
    setFormDetail(initialValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="question-section md:max-w-screen-lg mx-auto flex flex-col items-center px-10 py-6 mb-16">
        <div className="py-6 mb-6 max-w-screen-sm">
          <h1 className="section-title-font-size font-semibold py-3 text-center">
            Get in Touch
          </h1>
          <div className="card-section-small mx-20 text-gray-500 text-center">
            Nullam hendrerit massa quis dui egestas, id scelerisque felis
            rutrum. Etiam sem nibh, auctor sed, pharetra congue.
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/3">
            <div className="text-center md:text-left">
              <div className="contact-title my-3 text-center flex flex-nowrap justify-center items-center md:justify-start">
                <div className="text-card-red mr-2">
                  <GrMapLocation size={18} />
                </div>
                <p className=" font-bold text-lg"> Office Location</p>
              </div>
              <p className="text-gray-400 "> 132 Dartmouth Street</p>
              <p className="text-gray-400 "> Boston, Massachusetts 02156</p>
              <p className="text-gray-400 "> United States</p>
            </div>
            <div className="text-center md:text-left">
              <div className="contact-title my-3 text-center flex flex-nowrap justify-center items-center md:justify-start">
                <div className="text-card-red mr-2">
                  <AiOutlineMobile size={18} />
                </div>
                <p className=" font-bold text-lg"> Phone Number</p>
              </div>
              <p className=" cursor-pointer text-card-red hover:text-black ">
                {" "}
                +1 617 572 3012
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="contact-title my-3 text-center flex flex-nowrap justify-center items-center md:justify-start">
                <div className="text-card-red mr-2">
                  <MdOutlineMailOutline size={18} />
                </div>
                <p className=" font-bold text-lg"> Email Address</p>
              </div>
              <p className="cursor-pointer text-card-red hover:text-black">
                email@sitename.com
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="contact-title my-3 text-center flex flex-nowrap justify-center items-center md:justify-start">
                <div className="text-card-red mr-2">
                  <BsClock size={18} />
                </div>
                <p className=" font-bold text-lg">Working Address</p>
              </div>
              <p className="text-gray-400 ">09:00AM to 06:00PM</p>
            </div>
          </div>
          <div className="p-8 flex-grow bg-gray-100 rounded-lg md:w-2/3">
            <div className="w-full h-full flex justify-center flex-col gap-5">
              <div className="w-full flex flex-col lg:flex-row gap-5">
                <input
                  type="text"
                  value={formDetail.name}
                  onChange={(e) =>
                    setFormDetail({ ...formDetail, name: e.target.value })
                  }
                  placeholder="Name"
                  className="appearance-none border rounded-lg w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-card-red"
                />
                <input
                  type="email"
                  value={formDetail.email}
                  onChange={(e) =>
                    setFormDetail({ ...formDetail, email: e.target.value })
                  }
                  placeholder="Email"
                  className="appearance-none border rounded-lg w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-card-red"
                />
              </div>
              <input
                type="text"
                value={formDetail.subject}
                onChange={(e) =>
                  setFormDetail({ ...formDetail, subject: e.target.value })
                }
                placeholder="Subject"
                className="appearance-none border rounded-lg w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-card-red"
              />
              <textarea
                type="message"
                value={formDetail.message}
                onChange={(e) =>
                  setFormDetail({ ...formDetail, message: e.target.value })
                }
                placeholder="Message"
                className="appearance-none resize-none border rounded-lg w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-card-red"
              />
              <button
                type="submit"
                className="rounded cursor-pointer max-w-max font-medium text-white py-4 px-6 leading-tight transition-colors duration-300 focus:outline-none bg-card-red transform hover:bg-button-hvr"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contact;
