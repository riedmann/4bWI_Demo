import React, { useEffect, useState } from "react";
import { supabase } from "../services/DataService";

export default function Main() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      let { data: people, error } = await supabase.from("People").select("*");
      setPeople(people);
    };

    loadData();
    console.log("hello");
  }, []);
  return (
    <div>
      <h1>People</h1>
      <div>
        {people.map((person) => (
          <div>
            {person.firstname} {person.lastname}
          </div>
        ))}
      </div>
    </div>
  );
}
