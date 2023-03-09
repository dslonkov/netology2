import React, {useState} from 'react';
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

const Portfolio = () => {

  const [toggleTab, setToggleTab] = useState("0");

  const setTab = index => {
    setToggleTab(index)
  }

  return (
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={toggleTab}
        onSelectFilter={setTab}
      />

      <ProjectList
        picture={toggleTab}
      />
    </>
  );
};

export default Portfolio;
