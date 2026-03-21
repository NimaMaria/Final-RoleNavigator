import React from "react";
import ResumeBuilder from "./pages/ResumeBuilder";
import { Navbar } from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <ResumeBuilder />
    </>
  );
}