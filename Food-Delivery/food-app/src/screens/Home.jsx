import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>Body</div>
      <div>
        <Footer />
      </div>
    </>
  );
}
