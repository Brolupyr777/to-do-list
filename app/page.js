"use client";
import Loader from "./loading";
import Error from "./error";
import supabase from "./api";
import { useState, useEffect, forceUpdate } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  const updateData = async function (e) {
    e.preventDefault();
    const res = await supabase.from("notes").insert({
      title: e.target[0].value,
      text: e.target[1].value,
    });
    requestData();
  };

  const requestData = async function () {
    try {
      const res = await supabase.from("notes").select();
      if (res.error) throw new Error(res.error);
      console.log(data);
      setData(res.data);
    } catch (err) {
      setData("");
    }
  };

  useEffect(() => {
    requestData();
  }, []);

  if (!data) return <Error />;

  return (
    <main className="flex min-h-screen items-center justify-evenly flex-row w-auto relative">
      <ul className="flex justify-center w-1/2 relative border-2 rounded p-16 aspect-video flex-wrap gap-14 h-auto overflow-y-auto">
        {data.map((note) => {
          return (
            <li
              className="flex-col border-2 p-3 justify-around w-1/4 h-max aspect-square hover:cursor-pointer "
              key={note.id}
            >
              <h1 className="m-1">{note.title}</h1>
              <p1 className="text-sm ">{note.text}</p1>
            </li>
          );
        })}
      </ul>
      <form
        className="flex flex-col gap-2 text-white justify-center items-center"
        onSubmit={updateData}
      >
        <input
          type="text"
          placeholder="Title"
          className="rounded border-2 border-white bg-black h-6"
        ></input>
        <input
          type="text"
          placeholder="Text"
          className="rounded border-2 border-white bg-black h-12"
        ></input>
        <button className="border-2 border-white bg-black  rounded  p-1 w-1/2 shadow-white duration-200 hover:opacity-50 ">
          Submit
        </button>
      </form>
    </main>
  );
}

// Make animation where on click you can cross out the sticky note
{
  /* <Image src="../public/next.svg" width={500} height={500} alt="logo" /> */
}
// Implement UI where the sticky note expands as needed
// Make UI adjustable to browser window
// Make font adjustable to browser size
// Replace bar in the box with global scroll
