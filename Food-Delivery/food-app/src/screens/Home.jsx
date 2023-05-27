import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import Card from "../components/card";
import Carousal from "../components/Carousal";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Carousal />
      </div>

      <div className="mt-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
