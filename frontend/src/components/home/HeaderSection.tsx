import { Bell, Mail } from "lucide-react";

export const HeaderSection = () => {
  return (
    <header className="flex min-h-18 items-center justify-end gap-6 rounded-2xl border border-text/10 bg-white px-6 shadow-sm">
      <div className="flex gap-8">
        <Mail size={20} />
        <Bell size={20} />
      </div>
      <div className="flex justify-center items-center gap-4 ">
        <div className="bg-blue-900 h-10 w-10 rounded-full"></div>
        <div>
          <p className="font-bold">Eric Dias</p>
          <p className="font-light">ericdiasblu@gmail.com</p>
        </div>
      </div>
    </header>
  );
};
