export type formData = {
  immunocompromised?: boolean;
  unemployment?: boolean;
  essential?: boolean;
  grocery_delivery?: boolean;
  walk_dogs?: boolean;
  donations?: boolean;
  counceling?: boolean;
  career_services?: boolean;
};

export interface iForm {
  next: () => void;
  updateParentState: (data: formData) => void;
}
