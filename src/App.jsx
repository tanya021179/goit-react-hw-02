import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [counter, setCounter] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("counter"));
    if (saveData?.length) {
      return saveData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

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
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((counter.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedack}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={counter}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
