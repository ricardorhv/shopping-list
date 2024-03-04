import * as Dialog from '@radix-ui/react-dialog'
import { ItemInput } from './ui/item-input'
import { QuantityInput } from './ui/quantity-input'
import { SelectCategory } from './ui/select-category'
import { X } from 'lucide-react'

export function EditModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-3 py-2 w-full text-gray-100 text-left text-sm hover:bg-gray-400 rounded-t-md outline-none border border-gray-400 hover:border-purple-light focus-visible:border-purple-light">
        Editar
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-500/40 fixed inset-0" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-gray-600 p-5 rounded-md text-gray-200 border border-gray-300 flex flex-col justify-between gap-3">
          <Dialog.Title className="text-lg font-bold text-gray-100">
            Editar item
          </Dialog.Title>

          <form className="flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <ItemInput />

              <div className="flex justify-between">
                <QuantityInput />
                <SelectCategory />
              </div>
            </div>

            <button className="w-full bg-purple-default hover:bg-purple-dark rounded-md py-2 text-white font-semibold text-sm">
              Confirmar
            </button>
          </form>

          <Dialog.Close className="absolute right-4 top-4">
            <X className="size-5 text-red-600 hover:text-red-500" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}