import { ICategory } from "./category.model";

export interface IExtendCategory extends ICategory {
    subCategories?: IExtendCategory[];
  }