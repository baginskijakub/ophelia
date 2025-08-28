import { createContext, PropsWithChildren, useContext, useState } from "react";

interface GroupContextValues {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const GroupContext = createContext<GroupContextValues>(
  {} as GroupContextValues,
);

export const GroupProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [open, setOpen] = useState(true);

  return (
    <GroupContext.Provider value={{ open, setOpen }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroupContext must be used within a GroupProvider");
  }
  return context;
};
