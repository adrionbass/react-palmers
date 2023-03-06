import styled from "styled-components";
import emailjs from "@emailjs/browser"

export default () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_adyfijw', 'template_nbe1j7q', e.target, 'NEOtN2WqqkO-5dO-h')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  };
  return (
    <Mailer>
            <form className="form-mail" onSubmit={sendEmail}>
        <label>Nombre: </label>
        <input type="text" name="user_name" />
        <hr />
        <label>Email: </label>
        <input type="email" name="user_email" />
        <hr />
        <label>Mensaje: </label><br/>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Enviar</button>
      </form>
    </Mailer>
  );
};

const Mailer = styled.div``;
