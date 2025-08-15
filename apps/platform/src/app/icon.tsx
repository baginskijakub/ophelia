import { Logo } from "@ophelia/ui";
import { ImageResponse } from "next/og";

export default function Icon() {
  return new ImageResponse(<Logo size={192} />, {
    width: 192,
    height: 192,
  });
}
