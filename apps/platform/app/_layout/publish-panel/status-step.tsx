import { PropsWithChildren, useEffect, useState } from "react";
import { StatusStepIcon } from "./status-step-icon";

interface Props extends PropsWithChildren {
  status: "pending" | "in-progress" | "completed";
}

export const StatusStep = (props: Props) => {
  const { children, status } = props;

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (status === "in-progress") {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <div className="flex items-center gap-2">
      <StatusStepIcon status={status} />

      <p className="text-sm flex-1">{children}</p>

      {seconds > 0 && <p className="text-xs text-tertiary pr-1">{seconds}s</p>}
    </div>
  );
};
