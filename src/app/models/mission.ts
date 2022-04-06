export interface Mission {
  flight_number: number;
  launch_year: number;
  mission_name: string;
  rocket: {
    rocket_type: string;
    rocket_name: string;
  };
  links: {

    mission_patch_small: string;
  };
  launch_site: {
    site_name_long: string;

  };
  details: string;
}
