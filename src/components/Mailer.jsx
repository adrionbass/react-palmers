import styled from "styled-components";
import emailjs from "@emailjs/browser";

export default () => {
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
        <div className="data-ctt">
          <label>Nombre: </label>
          <input type="text" name="user_name" className="input-text" />
          <br />
          <label>Email: </label>
          <input type="email" name="user_email" className="input-text" />
        </div>
        <br />
        <label>Mensaje: </label>
        <br />

        <textarea
          name="user_message"
          id=""
          cols="30"
          rows="10"
          className="input-text"
        ></textarea>
        <br />
        <Btn>Enviar</Btn>
      </form>
    </Mailer>
  );
};

const Mailer = styled.div`
  ${"" /* width: 50vw; */}
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 20px 35px;
  border-radius: 15px;
  .data-ctt {
    display: inline-block;
    text-align: right;
  }
  .input-text {
    border-radius: 3px;
    border: none;
  }
`;

const Btn = styled.button`
  border: none;
  border-radius: 3px;
  padding: 0 15px;
  color: #000;
  background: #ffb84c;
  &:hover {
    background: #f16767;
  }
  ${"" /* background: none; */}
`;
