import { Plus } from 'lucide-react'
import { SelectCategory } from './ui/select-category'
import { QuantityInput } from './ui/quantity-input'
import { ItemInput } from './ui/item-input'
import { useFormContext } from 'react-hook-form'

import { useShoppingList } from '../hooks/use-shopping-list'
import { FormSchemaType } from '../app'

export function AddNewItemForm() {
  const { handleSubmit, reset } = useFormContext<FormSchemaType>()

  const { addNewItemToTheShoppingList } = useShoppingList()

  function handleAddNewItem(data: FormSchemaType) {
    addNewItemToTheShoppingList({
      ...data,
      isChecked: false,
    })
    reset({
      name: '',
      quantity: 1,
      unit: 'unit',
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleAddNewItem)}
      className="grid grid-cols-[1fr_160px_40px] grid-rows-2 sm:grid-rows-1 sm:grid-cols-[1fr_150px_160px_40px] items-end gap-3 text-gray-100 leading-none text-sm"
    >
      <ItemInput className="col-span-3 sm:col-span-1" />

      <QuantityInput />

      <SelectCategory />

      <button
        type="submit"
        className="p-2 rounded-full bg-purple-default outline-none border-none flex justify-center items-center self-end leading-none cursor-pointer hover:bg-purple-dark"
      >
        <Plus className="size-6" />
      </button>
    </form>
  )
}
