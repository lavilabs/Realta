import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<Header />
			<About />
			<Products />
      <Contact />
			<Footer />
		</div>
	);
}

export default App;
