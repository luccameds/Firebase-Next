'use client';
import React from 'react';
import Image from 'next/image';
import signIn from '@/firebase/SignIn';
import { useRouter } from 'next/navigation';

function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    } else {
      return router.push('/Admin');
    }
  };
  return (
    <div className="flex flex-row justify-center h-screen bg-white text-black">
      <div className="flex flex-col justify-center items-center w-1/2">
        <h1 className="text-2xl font-bold my-5">Faça o Login</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>E-mail</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="Exemplo@email.com"
              className="py-3 px-5 my-5 outline-[#EA454C]/30"
            />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="Senha"
              name="Senha"
              id="Senha"
              placeholder="Digite sua Senha"
              className="py-3 px-5 my-5 outline-[#EA454C]/30"
            />
          </label>
          <button
            type="submit"
            className="bg-[#EA454C] text-bold text-white rounded-3xl my-5 py-3 px-5 w-1/2"
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex relative w-1/2 max-md:hidden">
        <Image src="/loginBG.svg" alt="loginBackground" sizes="100vw" fill />
      </div>
    </div>
  );
}

export default Page;
