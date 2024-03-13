import * as Popover from '@radix-ui/react-popover'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { MoreVertical } from 'lucide-react'
import { EditModal } from './edit-modal'
import { useShoppingList } from '../hooks/use-shopping-list'

interface SettingsPopoverProps {
  itemId: string
}

export function SettingsPopover({ itemId }: SettingsPopoverProps) {
  const { removeItemFromTheShoppingList } = useShoppingList()

  function handleRemoveItemFromShoppingList() {
    removeItemFromTheShoppingList(itemId)
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="border-none outline-none focus-visible:outline-1 focus-visible:outline-purple-light bg-transparent flex justify-center items-center leading-none">
          <MoreVertical className="size-5 text-purple-light" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="bg-gray-500 rounded-md w-[100px]">
          <EditModal itemId={itemId} />

          <AlertDialog.Root>
            <AlertDialog.Trigger className="px-3 py-2 w-full text-gray-100 text-left text-sm hover:bg-gray-400 rounded-b-md outline-none border border-gray-400 hover:border-purple-light focus-visible:border-purple-light">
              Excluir
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
              <AlertDialog.Overlay className="bg-gray-500/40 fixed inset-0" />

              <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] bg-gray-600 p-5 rounded-md border border-gray-300 flex flex-col justify-between gap-4">
                <AlertDialog.Title className="text-white font-bold text-lg">
                  Você deseja mesmo excluir esse item?
                </AlertDialog.Title>

                <div className="flex gap-4 justify-end">
                  <AlertDialog.Cancel className="rounded-md font-semibold bg-gray-300 hover:bg-gray-400 text-white px-4 py-2 text-sm">
                    Cancelar
                  </AlertDialog.Cancel>

                  <AlertDialog.Action
                    onClick={handleRemoveItemFromShoppingList}
                    className="rounded-md font-semibold text-white px-4 py-2 text-sm bg-red-600 hover:bg-red-700"
                  >
                    Excluir
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
