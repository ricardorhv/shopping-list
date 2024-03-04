import { Plus } from 'lucide-react'
import { SelectCategory } from './ui/select-category'
import { QuantityInput } from './ui/quantity-input'
import { ItemInput } from './ui/item-input'

export function AddNewItemForm() {
  return (
    <form className="grid grid-cols-[1fr_160px_40px] grid-rows-2 sm:grid-rows-1 sm:grid-cols-[1fr_150px_160px_40px] items-end gap-3 text-gray-100 leading-none text-sm">
      <ItemInput className="col-span-3 sm:col-span-1" />

      <QuantityInput />

      <SelectCategory />

      <button className="p-2 rounded-full bg-purple-default outline-none border-none flex justify-center items-center self-end leading-none cursor-pointer hover:bg-purple-dark">
        <Plus className="size-6" />
      </button>
    </form>
  )
}
