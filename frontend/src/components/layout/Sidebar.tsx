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
    <aside
      className={`min-h-screen shrink-0 border-r border-text/10 bg-background shadow-sm transition-all duration-300 ${
        expanded ? "w-64" : "w-20"
      }`}
    >
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
          <ul className="flex-1 px-3 py-2">{children}</ul>
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
        relative my-1 flex h-12 items-center overflow-hidden rounded-xl px-3
        font-medium cursor-pointer transition-all
        ${
          active
            ? "bg-light text-text"
            : "text-text/70 hover:bg-bg hover:text-text"
        }
    `}
    >
      <span
        className={`flex shrink-0 items-center justify-center text-support ${
          expanded ? "h-9 w-9" : "h-full w-full"
        }`}
      >
        {icon}
      </span>
      <span
        className={`overflow-hidden whitespace-nowrap text-sm transition-all ${
          expanded ? "ml-3 w-40 opacity-100" : "ml-0 w-0 opacity-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute h-2 w-2 rounded bg-primary ${
            expanded ? "right-3 top-1/2 -translate-y-1/2" : "right-3 top-3"
          }`}
        />
      )}
    </li>
  );
}
