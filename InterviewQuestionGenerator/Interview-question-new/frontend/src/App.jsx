import React from "react";
import InterviewCoach from "./pages/InterviewCoach";
import { Navbar } from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <InterviewCoach />
    </>
  );
}