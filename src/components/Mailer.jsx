import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  const errorMessage = validate(name, email, message);
  /* alert(validate(name, email, message)); */


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_adyfijw",
        "template_nbe1j7q",
        e.target,
        "NEOtN2WqqkO-5dO-h"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <Mailer>
      <form className="form-mail" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          className="input-text"
          value={name}
          placeholder=" Nombre"
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          name="user_email"
          className="input-text"
          value={email}
          placeholder=" Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <textarea
          name="user_message"
          id=""
          cols="30"
          rows="10"
          className="input-text"
          value={message}
          placeholder=" Tu mensaje..."
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br /> <br />
        <Btn >
          <button type="submit" disabled={errorMessage}>
            Enviar
          </button>
        </Btn>
      </form>
    </Mailer>
  );
};

const validate = (name, email, message) => {
  name = name.trim();
  email = email.trim();
  message = message.trim();
  let errMsg = "Todos los campos son requeridos";
  if (!name | !email | !message) {
    return errMsg;
  }
};

const Mailer = styled.div`
  ${"" /* width: 50vw; */}
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 20px 35px;
  border-radius: 15px;

  .input-text {
    width: 100%;
    border-radius: 3px;
    border: none;
  }
`;

const Btn = styled.div`
  button {
    border: none;
    border-radius: 10px;
    padding: 10PX 15px;
    color: #000;
    background: #ffb84c;
    &:hover {
      background: #f16767;
    }
  }
`;
