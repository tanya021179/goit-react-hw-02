import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [counter, setCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setCounter((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedack = () => {
    setCounter({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = counter.good + counter.neutral + counter.bad;

  return (
    <div>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedack}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? <Feedback feedback={counter} /> : <Notification />}
    </div>
  );
};

export default App;
