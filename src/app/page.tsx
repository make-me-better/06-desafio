import Image from 'next/image'
import { RocketLaunch } from '@phosphor-icons/react/dist/ssr'

export default function Login() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1440px]  items-center">
      <div className="grid w-full grid-cols-[auto_1fr]">
        <Image
          src="/hero-login.png"
          width={600}
          height={912}
          quality={100}
          className="p-5"
          alt="Logotipo da Book Wise, no fundo, mulher deitada lendo livro"
        />
        <div className="flex items-center justify-center">
          <div>
            <div>
              <h1 className="text-2xl font-bold">Bem vindo(a) ao Book Wise!</h1>
              <span className="text-base text-gray-200">
                Faça seu login ou acesse como visitante.
              </span>
            </div>
            <div className="my-10 flex flex-col gap-4">
              <div className="w-372 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200">
                <Image
                  src="/google-icon.svg"
                  width={32}
                  height={32}
                  alt="Logotipo do Google"
                />
                Entrar com Google
              </div>
              <div className="w-372 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200">
                <Image
                  src="/github-icon.svg"
                  width={32}
                  height={32}
                  alt="Logotipo do Github"
                />
                Entrar com GitHub
              </div>
              <div className="w-372 rounded-lg bg-gray-600 px-6 py-5 text-lg font-bold text-gray-200">
                <RocketLaunch size={32} className="text-purple-100" />
                Acessar como visitante
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
