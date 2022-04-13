import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/HomePage">Home</Link>
      </li>
      <li>
        <Link to="/BudgetPage">Budget</Link>
      </li>
      <li>
        <Link to="/DailyPage">Daily Calorie Intake</Link>
      </li>
      <li>
        <Link to="/WeeklyPage">Weekly Calorie Intake</Link>
      </li>
      <li>
        <Link to="/ExercisePage">Exercise Tracker</Link>
      </li>
      <li>
        <Link to="/FoodDBPage">Food Database</Link>
      </li>
      <li>
        <Link to="/MacroPage">Macronutrient Tracker</Link>
      </li>
    </ul>
  );
}

export default NavBar;
