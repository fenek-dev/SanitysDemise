import { LOCATION_NAMES } from ".";
import { EventType } from "../events/types";

export interface LocationType {
  availableEvents: EventType[];
  image: string;
  name: LOCATION_NAMES;
  subLocations?: SublocationType[];
  thumbnail: string;
}

export interface SublocationType {
  image: string;
  name: string;
  triggerEvent: string;
}
