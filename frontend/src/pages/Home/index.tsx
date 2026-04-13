import { CheckCircle, Home, Layers, TrendingUp } from "lucide-react";
import Sidebar, { SidebarItem } from "../../components/layout/Sidebar";

const HomePage = () => {
  return (
    <div className="h-screen flex bg-slate-50">
      <Sidebar>
        <SidebarItem icon={<Home />} text="Hoje" active />
        <SidebarItem icon={<CheckCircle size={18} />} text="Hábitos" />
        <SidebarItem icon={<Layers size={18} />} text="Áreas da Vida" />
        <SidebarItem icon={<TrendingUp size={18} />} text="Progresso" />
      </Sidebar>
      <main className="flex-1 h-full p-3">
        <div className="flex gap-5 justify-end bg-amber-200 p-7">
          <div>
            <p>Notificações</p>
          </div>
          <div>
            <p>Nome</p>
          </div>
        </div>

        <div className="flex gap-4 my-4">
          <div className="flex-2 min-h-screen bg-amber-200"></div>
          <div className="flex-1 min-h-screen bg-amber-200"></div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
