import { ButtonDynamicProperties } from "@repo/types";

interface ButtonPreviewProps {
  properties: ButtonDynamicProperties;
}

export const ButtonPreview = () => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Get started
    </button>
  );
};
