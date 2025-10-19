"use client";

import { cx, generateCssVars } from "@platform/utils";
import { PropsWithChildren } from "react";
import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "../../app/_layout";
import { useConfigForm } from "../../app/_components/config-form";

interface CanvasProps extends PropsWithChildren {}

const Root = (props: CanvasProps) => {
  const { children } = props;

  return (
    <div
      className={cx(
        "relative",
        "bg-primary bg-[radial-gradient(#F0F2F4_1px,transparent_1px)]",
        "[background-size:16px_16px]",
        "border-primary-style border-l-[0.5px] border-t-[0.5px] rounded-ss-lg",
        SIDEBAR_WIDTH.compliment,
        NAVBAR_HEIGHT.compliment,
      )}
    >
      {children}
    </div>
  );
};

const Content = (props: PropsWithChildren) => {
  const { children } = props;
  const { config } = useConfigForm();

  return (
    <div className="h-full overflow-auto">
      <div className="w-max min-w-full min-h-full p-16 mr-[320px] flex gap-20">
        <style>{generateCssVars(config)}</style>
        {children}
      </div>
    </div>
  );
};

const Toolbar = (props: PropsWithChildren) => {
  const { children } = props;

  return <div className="absolute top-2 left-2 z-10">{children}</div>;
};

export { Root, Content, Toolbar };
