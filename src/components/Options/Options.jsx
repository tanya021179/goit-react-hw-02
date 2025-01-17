import css from "./Options.module.css";

const Options = ({ onUpdate, onReset, totalFeedback }) => {
  return (
    <div>
      <button className={css.button} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
