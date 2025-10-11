import { Logo } from "@platform/components";
import { ImageResponse } from "next/og";

export const size = {
  width: 24,
  height: 24,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<Logo />, {
    ...size,
  });
}
