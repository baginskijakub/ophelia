import { Branding } from "./branding";
import { Posting } from "./posting";

export interface Listing {
  posting: Posting;
  branding: Branding;
}
