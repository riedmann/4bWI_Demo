import React, { useState } from "react";
import Menu from "../templates/Menu";
import FootballTable from "./FootballTable";
import Footer from "../templates/Footer";

export default function Main() {
  const [actualSite, setActualSite] = useState("table");

  const getActualSite = () => {
    if (actualSite === "table") {
      return <FootballTable />;
    }
    if (actualSite === "matches") {
      return <div>Matches</div>;
    }

    return <div>not found</div>;
  };
  return (
    <div>
      <Menu
        items={["table", "matches", "drei"]}
        onClick={(site) => {
          setActualSite(site);
        }}
      ></Menu>

      {getActualSite()}
      <Footer />
    </div>
  );
}
