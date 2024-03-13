import { CategoryType } from './category'
import { UnitType } from './unit'

export interface ShoppingList {
  id?: string
  name: string
  quantity: number
  unit: UnitType
  category: CategoryType
  isChecked: boolean
}
