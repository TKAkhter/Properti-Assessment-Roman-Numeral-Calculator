import { useState } from "react";
import calculateNumberToRoman from '../helpers/functions'
import styles from './form.module.css';

export default function Form() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [roman, setRoman] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setRoman(calculateNumberToRoman(number, setError)!);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.inputLabel}>
        Enter your number:
      </label>
      <div>
        <input className={styles.input}
          type="text"
          value={number}
          placeholder="Enter Number..."
          onChange={(e) => setNumber(e.target.value)}
        />
        <p className={error ? styles.inputError : styles.displayNone}>{error ? error : null}</p>
        <input className={styles.inputButton} type="submit" />
      </div>
      <p className={styles.result}>Answer: <span style={{fontWeight: 700}}>{roman}</span></p>
      
    </form>
  );
}

