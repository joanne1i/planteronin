import React from "react";
import "../../App.css";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Cards from "../Cards";
import PlantInfo from "../PlantInfo";

function CurrentPlants() {
  return (
    <>
      <Sidebar />
      <PlantInfo />
    </>
  );
}

export default CurrentPlants;
