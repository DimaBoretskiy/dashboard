import { IAnnouncement } from "./announcement.model";
import { ICategory } from "./category.modules";

export interface IViewAnnouncement extends  Omit<IAnnouncement,'imagesIds'> {
    user: {
      id: string,
      name: string
    },
    description: string,
    email: string,
    phone: string,
    category: ICategory
    images: string[]
}