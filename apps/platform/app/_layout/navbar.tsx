import { Logo } from "@platform/components";

export const Navbar = () => {
  return (
    <nav className="p-3 flex justify-between items-center ">
      <div className="flex items-center gap-2 text-gray-300 text-xs">
        <Logo />
        /
        <span className="h-6 w-20 bg-gray-300 rounded-sm" />
      </div>

      <div className="flex gap-2">
        <span className="h-7 w-24 bg-gray-300 rounded-sm" />
        <span className="h-7 w-28 bg-gray-300 rounded-sm" />
        <span className="h-7 w-7 bg-gray-300 rounded-full" />
      </div>
    </nav>
  );
};
