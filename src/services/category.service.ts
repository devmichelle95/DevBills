import { Category } from "../entites/category.entity"

export class CategoryService {
 async create (): Promise <Category> {
    const category = new Category({
        title: 'Example',
        color:'#2fff'
    })

    return category
 }   
}