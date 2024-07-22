import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TSidebarItem = {
  title: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};
export type TCast = {
  name: string;
  role: string;
};
export type TMovie = {
  id: number;
  title: string;
  release_year: number;
  genre: string[];
  director: string;
  cast: TCast[];
  rating: number;
  duration_minutes: number;
  synopsis: string;
  thumbnail_horizontal: string;
  thumbnail_vertical: string;
};
