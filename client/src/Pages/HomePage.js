import React, { useState } from "react";
import MacroPage from "./MacroPage";
import BudgetPage from "./BudgetPage";
import DailyPage from "./DailyPage";
import WeeklyPage from "./WeeklyPage";
import ExercisePage from "./ExercisePage";
import FoodDBPage from "./FoodDBPage";
import NavBar from "./NavBar";
import { Route, Link, Routes } from "react-router-dom";

function HomePage({ Username, Logout }) {
  const [testUser, setTestUser] = useState({ name: Username });
  const [activePage, setActivePage] = useState("Home");

  const handleLogout = () => {
    setTestUser("");
    Logout();
  };

  return (
    <div className="Home">
      <div className="Navigation">
        <h1>
          Welcome, <span>{testUser.name}</span>
        </h1>
        <NavBar />
        <Routes>
          <Route exact path="/HomePage" element={<HomePage />} />
          <Route exact path="/MacroPage" element={<MacroPage />} />
          <Route exact path="/BudgetPage" element={<BudgetPage />} />
          <Route exact path="/DailyPage" element={<DailyPage />} />
          <Route exact path="/WeeklyPage" element={<WeeklyPage />} />
          <Route exact path="/ExercisePage" element={<ExercisePage />} />
          <Route exact path="/FoodDBPage" element={<FoodDBPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
