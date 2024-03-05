import { ReactNode, createContext, useState } from 'react'
import { ShoppingList } from '../@types/shopping-list'

interface ShoppingListContextProps {
  children: ReactNode
}

interface ShoppingListContext {
  shoppingList: ShoppingList[]
}

export function ShoppingListContextProvider({
  children,
}: ShoppingListContextProps) {
  const shoppingListContext = createContext<ShoppingListContext>(
    {} as ShoppingListContext,
  )
  const [shoppingList, setShoppingList] = useState<ShoppingList[]>([])

  function addNewItemToTheShoppingList(newItem: ShoppingList) {
    setShoppingList((prevState) => [
      {
        ...newItem,
        id: crypto.randomUUID(),
      },
      ...prevState,
    ])
  }

  function removeItemFromTheShoppingList(id: string) {
    setShoppingList((prevState) => prevState.filter((item) => item.id !== id))
  }

  return (
    <shoppingListContext.Provider value={{ shoppingList }}>
      {children}
    </shoppingListContext.Provider>
  )
}
