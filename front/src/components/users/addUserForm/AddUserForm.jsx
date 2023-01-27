import { useState } from "react";
// import axios from "axios";
import styles from "./styles.module.scss";

const AddUserForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerSurname, setCustomerSurname] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [message, setMesasge] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          customerSurname,
          customerPhone,
        }),
      });

      const resJson = await res.json();
      await setMesasge(resJson.message);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.message}>{message}</div>

      <div className={styles.formControl}>
        <label htmlFor="customerName">Ime</label>
        <input
          type="text"
          name="customerName"
          id="customerName"
          value={customerName}
          placeholder="Ime mušterije"
          onChange={(e) => setCustomerName(() => e.target.value)}
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="customerSurname">Prezime</label>
        <input
          type="text"
          name="customerSurname"
          id="customerSurname"
          value={customerSurname}
          placeholder="Prezime mušterije"
          onChange={(e) => setCustomerSurname(() => e.target.value)}
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="customerPhone">Telefon</label>
        <input
          type="tel"
          name="customerPhone"
          id="customerPhone"
          value={customerPhone}
          placeholder="Telefon mušterije"
          onChange={(e) => setCustomerPhone(() => e.target.value)}
        />
      </div>
      <div className={styles.formControl}>
        <input
          type="submit"
          className={styles.submitBtn}
          value={"Dodaj mušteriju"}
        />
      </div>
    </form>
  );
};

export default AddUserForm;
