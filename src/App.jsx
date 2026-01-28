import { useState } from "react";
import "./App.css";

function App() {
  const [goal, setGoal] = useState("");
  const [days, setDays] = useState("");
  const [plan, setPlan] = useState([]);

  const workouts={
    fat: [
      "Jumping Jacks",
      "Burpees",
      "Mountain Climbers",
      "High Knees",
      "Plank",
      "Squats",
    ],
    muscle: [
      "Push Ups",
      "Pull Ups",
      "Bench Press",
      "Deadlift",
      "Bicep Curls",
      "Shoulder Press",
    ],
  };

   const generatePlan = () => {
    if (!goal || !days) {
      alert("Please select goal and days");
      return;
    }

    let result = [];
    for (let i = 0; i < days; i++) {
      result.push(workouts[goal].slice(i, i + 3));
    }
    setPlan(result);
  };
  return (
    <div className="container">
      <h1>🏋️ Workout Planner</h1>
      {goal && (
  <div className={`goal-badge ${goal}`}>
    {goal === "fat" ? "🔥 Fat Loss Plan" : "💪 Muscle Gain Plan"}
  </div>
)}
      <div className="form">
        <select onChange={(e) => setGoal(e.target.value)}>
          <option value="">Select Goal</option>
          <option value="fat">Fat Loss</option>
          <option value="muscle">Muscle Gain</option>
        </select>

        <select onChange={(e) => setDays(e.target.value)}>
          <option value="">Workout Days</option>
          <option value="3">3 Days</option>
          <option value="4">4 Days</option>
          <option value="5">5 Days</option>
        </select>

        <button onClick={generatePlan}>Generate</button>
      </div>
       {plan.length > 0 && (
  <div className="plan-section">
    <h2>✅ Your Personalized Weekly Workout Plan</h2>

    <div className="plan">
      {plan.map((day, index) => (
        <div className="day-card" key={index}>
          <div className="day-header">
            Day {index + 1}
          </div>

          <ul className="exercise-list">
            {day.map((ex, i) => (
              <li key={i}>💪 {ex}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)}


    </div>
  );
}

export default App;
