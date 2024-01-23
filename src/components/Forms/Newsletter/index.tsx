import { type FormEvent, useState } from 'react';
import './style.css';

const Newsletter = () => {
  const googleScript = 'https://api.sheetmonkey.io/form/f1XxtX4jk1MWb4p68GQCcS';
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('email', email);

    fetch(googleScript, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then((response) => {
        alert(`Enviado!`);
        console.info(response);
        setEmail('');
      })
      .catch((error) => {
        console.error('Erro no envio dos dados', error);
      });
    // https://script.google.com/macros/s/AKfycbw34x6KUTAcgTm5wy_nMu-W7rAV0BVXrKCXgkQsnhgdvBeUOasHimmFnzluofK2GWWi_Q/exec
  };

  return (
    <>
      <form onSubmit={handleSubmit} name="newsletter-form">
        <h2>Newsletter</h2>
        <p>
          Cadastre o seu emial e fique por dentro de todas as nossas novidades!
        </p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input type="submit" value="enviar" id="enviar" />
      </form>
    </>
  );
};

export default Newsletter;
