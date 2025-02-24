import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import RestaurantList from "./pages/RestaurantList"; 
import Home from "./pages/Home"; 
import RestaurantDetail from "./pages/RestaurantDetail";
import ImageSearchResults from "./pages/ImageSearchResults"; // New page

const App = () => {
  return (
    <div>
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/image-search-results" element={<ImageSearchResults />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;