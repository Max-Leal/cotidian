import { Lock, Mail, User } from "lucide-react";
import { AuthInput } from "../../../components/auth/AuthInput";
import { AuthCheckBox } from "../../../components/auth/AuthCheckBox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../hooks/auth/useAuth";
import logo from "../../../assets/logo.png";
import RightImage from "../../../assets/auth/right-image.png";
import GoogleIcon from "../../../assets/auth/google-icon.png";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    try {
      const response = await login(email, password);

      if (response) {
        navigate("/");
      }
    } catch {
      // erro já tratado no hook
    }
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-background ">
      <section className="flex flex-col h-full">
        <header className="flex items-center justify-between p-2 md:p-5 ">
          <div>
            <img src={logo} width={130} alt="Logo" />
          </div>

          <nav className="flex items-center gap-6">
            <p className="text-text/70">Não tem uma conta?</p>
            <Link to="/register" className="text-primary hover:opacity-80">
              Criar conta
            </Link>
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
                  Bem-vindo de volta
                </h1>
                <p className="text-text/60">Acesse sua conta para continuar</p>
              </div>
            </header>

            <form className="flex flex-col gap-4 w-full" onSubmit={handleForm}>
              <AuthInput
                label={"E-mail"}
                type={"email"}
                placeholder={"seu@email.com"}
                icon={<Mail size={18} />}
                onChange={(e) => setEmail(e.target.value)}
              />

              <AuthInput
                label={"Senha"}
                type={"password"}
                placeholder={"••••••••"}
                icon={<Lock size={18} />}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex flex-row justify-between">
                <AuthCheckBox />
                <Link
                  to="/forgot-password"
                  className="text-text/70 hover:opacity-90 cursor-pointer"
                >
                  Esqueceu sua senha?
                </Link>
              </div>

              <button
                disabled={loading}
                className="bg-primary hover:opacity-90 text-white py-2 w-full rounded-md transition cursor-pointer"
                type="submit"
              >
                {loading ? "Carregando..." : "Entrar"}
              </button>

              <div className="flex items-center gap-3">
                <hr className="flex-1 border-text/20" />
                <p className="text-text/60 text-sm">ou</p>
                <hr className="flex-1 border-text/20" />
              </div>

              <div className="flex items-center justify-center">
                <div className="flex w-32 h-17 bg-bg justify-center items-center border border-text/20 rounded-md cursor-pointer">
                  <img src={GoogleIcon} alt="Ícone Google" width={"25%"} />
                </div>
              </div>
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
