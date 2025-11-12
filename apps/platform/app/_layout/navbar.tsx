import { Logo } from "@platform/components";
import { cx } from "@platform/utils";
import { PublishPanel, PublishPanelProvider } from "./publish-panel";

export const NAVBAR_HEIGHT = {
  value: "h-[52px]",
  compliment: "h-[calc(100vh-52px)]",
};

export const Navbar = () => {
  return (
    <nav
      className={cx(
        "p-3 flex justify-between items-center ",
        NAVBAR_HEIGHT.value,
      )}
    >
      <div className="flex items-center gap-2 text-gray-300 text-xs">
        <Logo />
        /
        <span className="h-6 w-20 bg-gray-300 rounded-sm" />
      </div>

      <div className="flex gap-2">
        <span className="h-8 w-24 bg-gray-300 rounded-sm" />

        <PublishPanelProvider>
          <PublishPanel />
        </PublishPanelProvider>
        <span className="h-8 w-8 bg-gray-300 rounded-full" />
      </div>
    </nav>
  );
};
