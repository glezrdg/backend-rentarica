export class Category {
  _id: string
  name: string
  subcategories?: SubCategory[]
}

export class SubCategory {
  _id: string
  name: string
}