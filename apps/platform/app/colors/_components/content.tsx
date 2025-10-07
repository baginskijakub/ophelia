import { useColorsForm } from "./colors-form";
import { Primitives } from "./primitives";
import { SemanticsFormProvider, Semantics } from "./semantics";

export const Content = () => {
  const { layer } = useColorsForm();

  const LAYER_MAP = {
    primitives: <Primitives />,
    semantics: (
      <SemanticsFormProvider>
        <Semantics />
      </SemanticsFormProvider>
    ),
  };

  return LAYER_MAP[layer];
};
