import React from "react";

function ListItem(props) {
  return (
    <div className="p-5 flex-grow lg:p-6 lg:mr-10 bg-white cursor-pointer rounded-lg  flex flex-row items-center group shadow-list-section transition duration-400 ease-in-out transform hover:-translate-x-2 hover:bg-card-red hover:text-white">
      <div className="rounded-full p-3 flex items-center justify-center transition-all ease-in-out  bg-card-red group-hover:bg-white">
        <div className="text-white transition-all duration-600 ease-in-out group-hover:text-card-red">
          <props.icon size={32} />
        </div>
      </div>
      <div className=" pl-4 md:pl-6 flex flex-col">
        <div className="card-title text-2xl font-bold ">{props.title}</div>
        <div className="card-detail text-md text-gray-500  group-hover:text-white">
          {props.detail}
        </div>
      </div>
    </div>
  );
}

export default ListItem;
