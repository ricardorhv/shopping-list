import { useContext } from 'react'
import { ShoppingListContext } from '../context/shopping-list-context'

export const useShoppingList = () => useContext(ShoppingListContext)
