import logo from "../../../assets/logo.png";

const Register = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <section className="flex flex-col h-full">
        <header className="flex items-center justify-between p-5">
          <div>
            <img src={logo} width={50} alt="Logo" />
          </div>

          <nav className="flex items-center gap-2">
            <p>Já possui uma conta?</p>
            <a href="/login">Login</a>
          </nav>
        </header>

        <div className="flex flex-1 items-center justify-center">
          <article className="flex flex-col items-center w-full max-w-md px-5">
            <header className="flex flex-col items-center gap-6 w-full mb-6">
              <div>
                <img src={logo} width={50} alt="Logo" />
              </div>

              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold">Crie sua nova conta</h1>
                <p>Insira suas informações</p>
              </div>
            </header>

            <form className="flex flex-col gap-4 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="name">Nome completo</label>
                <input
                  className="border border-gray-300 px-3 py-2 w-full"
                  id="name"
                  type="text"
                  placeholder="Luciano Leal"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="email">Email</label>
                <input
                  className="border border-gray-300 px-3 py-2 w-full"
                  id="email"
                  type="email"
                  placeholder="lucianoLeal@gmail.com"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="confirmEmail">Confirmar email</label>
                <input
                  className="border border-gray-300 px-3 py-2 w-full"
                  id="confirmEmail"
                  type="email"
                  placeholder="lucianoLeal@gmail.com"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="password">Senha</label>
                <input
                  className="border border-gray-300 px-3 py-2 w-full"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Lembre-me</label>
              </div>

              <button
                className="bg-black text-white py-2 w-full cursor-pointer"
                type="submit"
              >
                Crie sua conta
              </button>
            </form>
          </article>
        </div>
      </section>

      <aside className="hidden lg:block">
        <div className="bg-black h-full w-full"></div>
      </aside>
    </main>
  );
};

export default Register;
