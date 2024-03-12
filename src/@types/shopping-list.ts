export interface ShoppingList {
  id?: string
  name: string
  quantity: number
  unit: 'unit' | 'liter' | 'kilogram'
  category: 'vegetable' | 'fruit' | 'drink' | 'bakery'
  isChecked: boolean
}
