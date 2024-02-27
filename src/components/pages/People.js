import React, { useEffect, useState } from "react";

export default function People() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://api.riedmann.rocks/demo/items/cars").then((data) =>
      data.json().then((data) => {
        console.log(data);
        setCars(data.data);
      })
    );
  }, []);
  return (
    <div>
      <h1>Cars</h1>
      {cars.map((car) => (
        <div>{car.name}</div>
      ))}
    </div>
  );
}
