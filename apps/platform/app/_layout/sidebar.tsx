import { SidebarItem } from "./sidebar-item";

export const Sidebar = () => {
  return (
    <div className="flex flex-col p-3 min-w-48">
      <div className="pl-2 mb-1 flex gap-2 w-full items-center">
        <span className="text-xs text-tertiary">SYSTEM</span>
        <span className="flex-1 h-[0.5px] bg-gray-400" />
      </div>
      <SidebarItem href="/typography">Typography</SidebarItem>
      <SidebarItem current href="/colors">
        Colors
      </SidebarItem>

      <div className="pl-2 mb-1 mt-3 flex gap-2 w-full items-center">
        <span className="text-xs text-tertiary">COMPONENTS</span>
        <span className="flex-1 h-[0.5px] bg-gray-400" />
      </div>
      <SidebarItem href="/button">Button</SidebarItem>
    </div>
  );
};
