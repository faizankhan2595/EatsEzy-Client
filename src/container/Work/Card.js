import React from "react";

function Card(props) {
  return (
    <div className="px-8 py-12 h-full cursor-pointer rounded-xl flex flex-col gap-y-5 bg-white justify-center items-center group shadow-card-initial transition duration-400 ease-in-out hover:shadow-card-final transform hover:-translate-y-2 hover:bg-card-red hover:text-white md:justify-self-stretch md:self-stretch">
      <div className="rounded-full p-5 flex items-center justify-center  transition-all duration-600 ease-in-out  bg-card-red group-hover:bg-white">
        <div className="text-white transition-all duration-600 ease-in-out group-hover:text-card-red">
          <props.icon size={36} />
        </div>
      </div>
      <div className="card-title text-center">
        <div className=" text-2xl font-bold text-center">{props.title}</div>
      </div>
      <div className="card-detail px-6 text-md text-gray-500 text-center group-hover:text-white">
        {props.detail}
      </div>
    </div>
  );
}

export default Card;
