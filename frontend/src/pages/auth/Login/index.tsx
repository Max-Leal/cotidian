import { Lock, Mail, User } from "lucide-react";
import logo from "../../../assets/logo.png";
import RightImage from "../../../assets/auth/right-image.png";
import { AuthInput } from "../../../components/auth/AuthInput";
import { AuthCheckBox } from "../../../components/auth/AuthCheckBox";

const Login = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-background ">
      <section className="flex flex-col h-full">
        <header className="flex items-center justify-between p-2 md:p-5 ">
          <div>
            <img src={logo} width={130} alt="Logo" />
          </div>

          <nav className="flex items-center gap-6">
            <p className="text-text/70">Já possui uma conta?</p>
            <a href="/login" className="text-primary hover:opacity-80">
              Login
            </a>
          </nav>
        </header>

        <div className="flex flex-1 items-center justify-center">
          <article className="flex flex-col items-center w-full max-w-md px-5">
            <header className="flex flex-col items-center gap-6 w-full mb-6">
              <div className="bg-light border border-light p-5 rounded-full">
                <User className="text-support" />
              </div>

              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold text-text">
                  Crie sua nova conta
                </h1>
                <p className="text-text/60">Insira suas informações</p>
              </div>
            </header>

            <form className="flex flex-col gap-4 w-full">
              <AuthInput
                label={"Nome completo"}
                type={"text"}
                id={"name"}
                placeholder={"Seu Nome"}
                icon={<User size={18} />}
              />

              <AuthInput
                label={"Email"}
                type={"email"}
                placeholder={"seuemail@gmail.com"}
                icon={<Mail size={18} />}
              />

              <AuthInput
                label={"Senha"}
                type={"password"}
                placeholder={"••••••••"}
                icon={<Lock size={18} />}
              />

              <AuthInput
                label={"Confirmar Senha"}
                type={"password"}
                placeholder={"••••••••"}
                icon={<Lock size={18} />}
              />

              <AuthCheckBox />

              <button
                className="bg-primary hover:opacity-90 text-white py-2 w-full rounded-md transition cursor-pointer"
                type="submit"
              >
                Crie sua conta
              </button>
            </form>
          </article>
        </div>
      </section>

      <aside className="hidden lg:block h-screen p-5 ">
        <div className="w-full h-full overflow-hidden rounded-4xl">
          <img
            src={RightImage}
            alt="Preview do app"
            className="w-full h-full object-cover"
          />
        </div>
      </aside>
    </main>
  );
};

export default Login;
