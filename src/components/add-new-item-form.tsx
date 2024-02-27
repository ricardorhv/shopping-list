import { Plus } from 'lucide-react'
import { SelectCategory } from './select-category'
import { SelectUnit } from './select-unit'

export function AddNewItemForm() {
  return (
    <form className="grid grid-cols-[320px_150px_160px_40px] items-end gap-3 text-gray-100 leading-none text-sm">
      <div className="has-[input:focus]:text-purple-light flex flex-col gap-2">
        <label htmlFor="item">Item</label>
        <input
          className="text-sm leading-none text-gray-100 rounded-md outline-none border border-1 border-gray-300 bg-gray-500 p-3 focus:border-purple-light"
          id="item"
          type="text"
        />
      </div>

      <div className="has-[input:focus]:text-purple-light has-[button:focus]:text-purple-light flex flex-col gap-2">
        <label htmlFor="quantity">Quantidade</label>

        <div className="flex">
          <input
            className="h-10 text-sm leading-none text-gray-100 rounded-s-md outline-none border border-1 border-gray-300 bg-gray-500 p-3 focus:border-purple-light w-[80px]"
            id="quantity"
            type="number"
            defaultValue={1}
          />

          <SelectUnit />
        </div>
      </div>

      <div className="has-[input:focus]:text-purple-light flex flex-col gap-2">
        <label htmlFor="category">Categoria</label>
        <SelectCategory />
      </div>

      <button className="p-2 rounded-full bg-purple-default outline-none border-none flex justify-center items-center leading-none cursor-pointer hover:bg-purple-dark">
        <Plus className="size-6" />
      </button>
    </form>
  )
}
