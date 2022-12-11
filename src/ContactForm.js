import { useState } from "react";
import "./ContactForm.css";

const Form = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmitForm = (event) => {
    alert("form submitted");
    event.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmitForm}>
        <h2> Contact Form </h2>
        <div className="form">
          <label>
            {" "}
            Name:
            <input
              id="name"
              name="name"
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={Name}
            />
          </label>
        </div>
        <br></br>
        <div className="form">
          <label>
            {" "}
            Email:
            <input
              id="email"
              name="email"
              type="email"
              required
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <br></br>
        <div className="form">
          <label>
            {" "}
            Message:
            <textarea
              id="message"
              name="message"
              type="text"
              value={Message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
        </div>
        <br></br>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default Form;
