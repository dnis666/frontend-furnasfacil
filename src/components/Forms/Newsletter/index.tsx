import { type FormEvent, useState } from 'react';
import './style.css';

const Newsletter = () => {
  const googleScript =
    'https://script.google.com/macros/s/AKfycbw34x6KUTAcgTm5wy_nMu-W7rAV0BVXrKCXgkQsnhgdvBeUOasHimmFnzluofK2GWWi_Q/exec';
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('nome', name);
    formData.append('email', email);

    fetch(googleScript, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        alert(`Enviado!`);
        console.info(response);
        setEmail('');
        setName('');
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
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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