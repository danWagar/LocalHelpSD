export type registerFormDataType = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

export type loginFormDataType = {
  email: string;
  password: string;
};

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
