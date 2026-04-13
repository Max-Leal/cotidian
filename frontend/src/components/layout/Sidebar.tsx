import { ChevronFirst, ChevronLast } from "lucide-react";
import logo from "../../assets/logo.png";
import { createContext, useContext, useState, type ReactNode } from "react";

type SidebarContextValue = {
  expanded: boolean;
};

type SidebarProps = {
  children: ReactNode;
};

type SidebarItemProps = {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

const Sidebar = ({ children }: SidebarProps) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen bg-background border-r border-text/10 shadow-sm">
      <nav className="h-full flex flex-col">
        <div
          className={`p-4 pb-4 flex items-center ${expanded ? "justify-between gap-3" : "justify-center"}`}
        >
          <img
            src={logo}
            alt="Logo do Cotidian"
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"} h-10 object-contain`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="flex items-center justify-center p-1.5 rounded-lg bg-light hover:bg-bg cursor-pointer"
          >
            {expanded ? (
              <ChevronFirst className="text-text" />
            ) : (
              <ChevronLast className="text-text" />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

export default Sidebar;

export function SidebarItem({
  icon,
  text,
  active = false,
  alert = false,
}: SidebarItemProps) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("SidebarItem must be used inside Sidebar");
  }

  const { expanded } = context;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors
        ${
          active
            ? "bg-light text-text"
            : "text-text/70 hover:bg-bg hover:text-text"
        }
    `}
    >
      <span className="text-support">{icon}</span>
      <span
        className={`overflow-hidden whitespace-nowrap transition-all ${expanded ? "md:w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-primary ${expanded ? "" : "top-2"}`}
        />
      )}
    </li>
  );
}
