import * as Popover from '@radix-ui/react-popover'
import * as Dialog from '@radix-ui/react-dialog'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { MoreVertical } from 'lucide-react'

export function SettingsPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="border-none outline-none focus-visible:outline-1 focus-visible:outline-purple-light bg-transparent flex justify-center items-center leading-none">
          <MoreVertical className="size-5 text-purple-light" />
        </button>
      </Popover.Trigger>
      {/* <Popover.Anchor /> */}
      <Popover.Portal>
        <Popover.Content className="bg-gray-500 rounded-md w-[100px]">
          <Dialog.Root>
            <Dialog.Trigger className="px-3 py-2 w-full text-gray-100 text-left text-sm hover:bg-gray-400 rounded-t-md outline-none border border-gray-400 hover:border-purple-light focus-visible:border-purple-light">
              Editar
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Title />
                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <AlertDialog.Root>
            <AlertDialog.Trigger className="px-3 py-2 w-full text-gray-100 text-left text-sm hover:bg-gray-400 rounded-b-md outline-none border border-gray-400 hover:border-purple-light focus-visible:border-purple-light">
              Excluir
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay />
              <AlertDialog.Content>
                <AlertDialog.Title />
                <AlertDialog.Description />
                <AlertDialog.Cancel />
                <AlertDialog.Action />
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
