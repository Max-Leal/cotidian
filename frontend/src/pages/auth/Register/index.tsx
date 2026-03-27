import { Lock, Mail, User, UserPlus } from "lucide-react";
import { AuthInput } from "../../../components/auth/AuthInput";
import { AuthCheckBox } from "../../../components/auth/AuthCheckBox";
import logo from "../../../assets/logo.png";
import RightImage from "../../../assets/auth/right-image.png";
import GoogleIcon from "../../../assets/auth/google-icon.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        name,
        email,
        password,
      });

      console.log(response.data);

      navigate("/login");
    } catch (error: unknown) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Erro ao cadastrar");
      } else {
        alert("Erro ao conectar com o servidor");
      }
    } finally {
      setLoading(false);
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
            <p className="text-text/70">Já tem uma conta?</p>
            <a href="/login" className="text-primary hover:opacity-80">
              Entrar
            </a>
          </nav>
        </header>

        <div className="flex flex-1 items-center justify-center">
          <article className="flex flex-col items-center w-full max-w-md px-5">
            <header className="flex flex-col items-center gap-6 w-full mb-6">
              <div className="bg-light border border-light p-5 rounded-full">
                <UserPlus className="text-support" />
              </div>

              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold text-text">Crie sua conta</h1>
                <p className="text-text/60">Preencha os dados abaixo</p>
              </div>
            </header>

            <form className="flex flex-col gap-4 w-full" onSubmit={handleForm}>
              <AuthInput
                label={"Nome completo"}
                type={"text"}
                id={"name"}
                placeholder={"João Silva"}
                icon={<User size={18} />}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <AuthInput
                label="E-mail"
                type="email"
                id="email"
                placeholder="seu@email.com"
                icon={<Mail size={18} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <AuthInput
                label="Senha"
                type="password"
                id="password"
                placeholder="••••••••"
                icon={<Lock size={18} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <AuthInput
                label="Confirmar Senha"
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                icon={<Lock size={18} />}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <AuthCheckBox />

              <button
                disabled={loading}
                className="bg-primary hover:opacity-90 text-white py-2 w-full rounded-md transition cursor-pointer"
                type="submit"
              >
                {loading ? "Carregando..." : "Criar conta"}
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

export default Register;
