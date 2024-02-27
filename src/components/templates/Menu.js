import React from "react";

export default function Menu({ items, onClick }) {
  return (
    <div className="flex justify-center gap-4 bg-green-400 p-8">
      {items.map((item) => (
        <div
          onClick={() => {
            onClick(item);
          }}
          className="hover:cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
