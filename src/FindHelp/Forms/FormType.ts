export type formDataType = {
  immunocompromised?: boolean;
  unemployment?: boolean;
  essential?: boolean;
  grocery_delivery?: boolean;
  walk_dogs?: boolean;
  donations?: boolean;
  counceling?: boolean;
  career_services?: boolean;
  story?: string;
  neighborhood?: string;
  avatar?: string;
};

export type formDataTypeRequired = {
  immunocompromised: boolean;
  unemployment: boolean;
  essential: boolean;
  grocery_delivery: boolean;
  walk_dogs: boolean;
  donations: boolean;
  counceling: boolean;
  career_services: boolean;
  story?: string;
  neighborhood?: string;
  avatar?: string;
};

export interface iForm {
  updateParentState: (data: formDataType) => void;
}
