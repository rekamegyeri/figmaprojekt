import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import { useState } from 'react'
import Blog from "./components/Blog.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Navigation from "./components/Navigation.jsx"
import Works from "./components/Work.jsx"
import WorkDetails from "./components/Workdetails.jsx"




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Works />} />
        <Route path="/workdetails" element={<WorkDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);

