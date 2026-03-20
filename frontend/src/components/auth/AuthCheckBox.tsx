import { Check } from "lucide-react";

export const AuthCheckBox = () => {
  return (
    <div className="flex items-center gap-2 text-text/70">
      <label className="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" className="hidden peer" />

        <div
          className="w-4 h-4 border border-text/30 rounded-md flex items-center justify-center
    peer-checked:bg-primary peer-checked:border-primary transition"
        >
          <Check
            size={12}
            className="text-white scale-0 group-has-[input:checked]:scale-100 transition-transform"
          />
        </div>

        <span className="text-text/70">Lembre-me</span>
      </label>
    </div>
  );
};
