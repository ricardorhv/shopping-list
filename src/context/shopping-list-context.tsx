import { ReactNode, createContext, useState } from 'react'
import { ShoppingList } from '../@types/shopping-list'

interface ShoppingListContextProps {
  children: ReactNode
}

interface ShoppingListContext {
  shoppingList: ShoppingList[]
  addNewItemToTheShoppingList: (newItem: ShoppingList) => void
  removeItemFromTheShoppingList: (id: string) => void
  editItem: (itemEdited: ShoppingList) => void
}

export const ShoppingListContext = createContext<ShoppingListContext>(
  {} as ShoppingListContext,
)

export function ShoppingListContextProvider({
  children,
}: ShoppingListContextProps) {
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

  function editItem(itemEdited: ShoppingList) {
    setShoppingList((prevState) => {
      return prevState.map((item) => {
        if (item.id === itemEdited.id) {
          return itemEdited
        }

        return item
      })
    })
  }

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        addNewItemToTheShoppingList,
        removeItemFromTheShoppingList,
        editItem,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  )
}
