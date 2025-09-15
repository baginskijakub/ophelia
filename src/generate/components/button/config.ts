import { config } from "../../../config";
import { ButtonConfig } from "../../../types/components/button";

export const buttonConfig: ButtonConfig = config.components.button;

const buttonSizeKeys = ["sm", "md", "lg"] as const;
type ButtonSizeKeys = (typeof buttonSizeKeys)[number];

const buttonVariantKeys = ["solid", "outline", "ghost"] as const;
type ButtonVariantKeys = (typeof buttonVariantKeys)[number];
