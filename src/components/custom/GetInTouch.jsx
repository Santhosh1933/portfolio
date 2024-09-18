import { getInTouch } from "@/constant";
import React from "react";

export const GetInTouch = () => {
  return (
    <div>
      {" "}
      <h1 className="font-medium pb-4 text-2xl">Get In Touch</h1>
      <ul>
        {getInTouch.map((contact, index) => (
          <li key={index}>
            <span className="pr-2">{contact.icon} </span>
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.method}: {contact.details}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
