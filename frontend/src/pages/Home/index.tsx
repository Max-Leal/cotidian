import { CheckCircle, Home, Layers, TrendingUp } from "lucide-react";
import Sidebar, { SidebarItem } from "../../components/layout/Sidebar";

const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-background text-text">
      <Sidebar>
        <SidebarItem icon={<Home />} text="Hoje" active />
        <SidebarItem icon={<CheckCircle size={18} />} text="Hábitos" />
        <SidebarItem icon={<Layers size={18} />} text="Áreas da Vida" />
        <SidebarItem icon={<TrendingUp size={18} />} text="Progresso" />
      </Sidebar>

      <main className="flex-1 p-4">
        <div className="flex min-h-[calc(100vh-2rem)] flex-col gap-4">
          <header className="flex min-h-18 items-center justify-end gap-6 rounded-2xl border border-text/10 bg-white px-6 shadow-sm">
            <p className="font-semibold">Notificações</p>
            <p className="font-semibold">Nome e Foto de Perfil</p>
          </header>

          <div className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,2.2fr)_minmax(280px,1fr)]">
            <section className="grid gap-4 lg:grid-rows-[minmax(180px,1.2fr)_72px_72px_minmax(260px,1.8fr)]">
              <div className="flex items-center justify-center rounded-2xl border border-text/10 bg-white p-6 text-center font-semibold shadow-sm">
                <div>
                  <p>carrossel de imagens do cotidian</p>
                  <p>(divulgação de planos, features etc.)</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-center justify-center rounded-2xl border border-text/10 bg-white p-4 text-center font-semibold shadow-sm">
                  qtd tarefas a cumprir
                </div>
                <div className="flex items-center justify-center rounded-2xl border border-text/10 bg-white p-4 text-center font-semibold shadow-sm">
                  qtd tarefas feitas
                </div>
                <div className="flex items-center justify-center rounded-2xl border border-text/10 bg-white p-4 text-center font-semibold shadow-sm">
                  qtd tarefas totais
                </div>
              </div>

              <div className="flex items-center justify-center rounded-2xl border border-text/10 bg-white p-4 text-center font-semibold shadow-sm">
                algo entre tarefa importante ou urgente, ou próxima tarefa
              </div>

              <div className="flex items-center justify-center rounded-2xl border border-text/10 bg-white p-6 text-center font-semibold shadow-sm">
                CRUD DE HÁBITOS/TAREFAS
              </div>
            </section>

            <aside className="grid gap-4 lg:grid-rows-[minmax(150px,0.9fr)_minmax(190px,1.1fr)_minmax(240px,1.5fr)]">
              <div className="flex items-center justify-center rounded-2xl border border-text/10 bg-white p-6 text-center font-semibold shadow-sm">
                Streak de Dias fazendo tarefas
              </div>

              <div className="flex items-center justify-center rounded-2xl border border-text/10 bg-white p-6 text-center font-semibold shadow-sm">
                qtd de tarefas realizadas nos últimos dias em forma de gráfico
                de coluna
              </div>

              <div className="flex items-center justify-center rounded-2xl border border-text/10 bg-white p-6 text-center font-semibold shadow-sm">
                ranking de usuários com mais streaks
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
