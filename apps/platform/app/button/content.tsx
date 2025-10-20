import { ButtonFormProvider, Editor } from "./_components";
import { Buttons } from "./_components/buttons";

export const Content = () => {
  return (
    <ButtonFormProvider>
      <Buttons />

      <Editor />
    </ButtonFormProvider>
  );
};
