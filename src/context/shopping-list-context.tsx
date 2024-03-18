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
  checkItem: (checked: boolean, itemId: string) => void
}

export const ShoppingListContext = createContext<ShoppingListContext>(
  {} as ShoppingListContext,
)

export function ShoppingListContextProvider({
  children,
}: ShoppingListContextProps) {
  const [shoppingList, setShoppingList] = useState<ShoppingList[]>(
    () => JSON.parse(localStorage.getItem('shoppingList')!) ?? [],
  )

  function addNewItemToTheShoppingList(newItem: ShoppingList) {
    const shoppingListWithNewItem = [
      {
        ...newItem,
        id: crypto.randomUUID(),
      },
      ...shoppingList,
    ]

    setShoppingList(shoppingListWithNewItem)

    localStorage.setItem(
      'shoppingList',
      JSON.stringify(shoppingListWithNewItem),
    )
  }

  function removeItemFromTheShoppingList(id: string) {
    const shoppingListWithoutTheItem = shoppingList.filter(
      (item) => item.id !== id,
    )
    setShoppingList(shoppingListWithoutTheItem)

    localStorage.setItem(
      'shoppingList',
      JSON.stringify(shoppingListWithoutTheItem),
    )
  }

  function editItem(itemEdited: ShoppingList) {
    const shoppingListWithEditedItem = shoppingList.map((item) => {
      if (item.id === itemEdited.id) {
        return itemEdited
      }

      return item
    })

    setShoppingList(shoppingListWithEditedItem)

    localStorage.setItem(
      'shoppingList',
      JSON.stringify(shoppingListWithEditedItem),
    )
  }

  function checkItem(checked: boolean, itemId: string) {
    const shoppingListWithCheckedItem = shoppingList.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isChecked: checked,
        }
      }

      return item
    })

    setShoppingList(shoppingListWithCheckedItem)

    localStorage.setItem(
      'shoppingList',
      JSON.stringify(shoppingListWithCheckedItem),
    )
  }

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        addNewItemToTheShoppingList,
        removeItemFromTheShoppingList,
        editItem,
        checkItem,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  )
}
