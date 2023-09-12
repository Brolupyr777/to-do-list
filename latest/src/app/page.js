import React from "react";

const todos = [];

const page = () => {
  return (
    <div className="flex justify-center content-center">
      <form className="justify-between ">
        <input
          type="text"
          className="flex bg-black border-white text-white relative m-5 rounded"
        ></input>
        <btn className="bg-black text-white rounded p-1 relative cursor-pointer">
          Add a ToDo
        </btn>
      </form>
    </div>
  );
};

export default page;
