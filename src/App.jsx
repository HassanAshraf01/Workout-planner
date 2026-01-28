import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [goal, setGoal] = useState("");
  const [days, setDays] = useState("");
  const [plan, setPlan] = useState([]);

  const workouts = {
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
    <motion.div
      className="container"
      style={{ minHeight: "100vh" }}
      initial={{ background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" }}
      animate={{
        background: [
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          "linear-gradient(135deg, #ff416c, #cc2103, #1e3c72)",
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        ]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <h1>🏋️ Workout Planner</h1>

      {/* Goal Badge */}
      {goal && (
        <motion.div
          className={`goal-badge ${goal}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {goal === "fat" ? "🔥 Fat Loss Plan" : "💪 Muscle Gain Plan"}
        </motion.div>
      )}

      {/* Form */}
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

      {/* Plan Section */}
      {plan.length > 0 && (
        <div className="plan-section">
          <h2>✅ Your Personalized Weekly Workout Plan</h2>
          <div className="plan">
            {plan.map((day, index) => (
              <motion.div
                className="day-card"
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="day-header">Day {index + 1}</div>
                <ul className="exercise-list">
                  {day.map((ex, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      💪 {ex}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default App;
