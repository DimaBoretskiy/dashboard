import { ICategory } from "../models/category.model";

interface IExtendCategory extends ICategory {
    subCategories?: IExtendCategory[];
  }
const EMPTY_PARENT_ID = '00000000-0000-0000-0000-000000000000'
function computeSubCategories(
    currentCategories: IExtendCategory[],
    rootCategories: IExtendCategory[]
  ) {
    return currentCategories.reduce((acc: IExtendCategory[], current) => {
      const subCategories = rootCategories.filter(
        (category) => current.id === category.parentId
      );

      const newCategory = {
        ...current,
      };
      if (subCategories.length) {
        newCategory.subCategories = computeSubCategories(
          subCategories,
          rootCategories
        );
      }

      acc.push(newCategory);
      return acc;
    }, []);
  }
  
  export function formatCategories(categories: ICategory[]) {
    const rootCategories = categories.filter((item) => item.parentId !== EMPTY_PARENT_ID);
    console.log(rootCategories)
    return computeSubCategories(rootCategories, categories);
  }