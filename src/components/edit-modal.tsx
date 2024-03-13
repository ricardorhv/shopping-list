import * as Dialog from '@radix-ui/react-dialog'
import { ItemInput } from './ui/item-input'
import { QuantityInput } from './ui/quantity-input'
import { SelectCategory } from './ui/select-category'
import { X } from 'lucide-react'
import { useShoppingList } from '../hooks/use-shopping-list'
import { ShoppingList } from '../@types/shopping-list'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { units } from '../data/units'
import { categories } from '../data/categories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

interface EditModalProps {
  itemId: string
}

const formSchema = z.object({
  nameEdit: z.string().min(3),
  quantityEdit: z.number().positive(),
  unitEdit: z.nativeEnum(
    Object.fromEntries(units.map((unit) => [unit.value, unit.value])),
  ),
  categoryEdit: z.nativeEnum(
    Object.fromEntries(
      categories.map((category) => [category.value, category.value]),
    ),
  ),
})

type FormSchemaType = z.infer<typeof formSchema>

export function EditModal({ itemId }: EditModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { shoppingList, editItem } = useShoppingList()
  const item =
    shoppingList.find((item) => item.id === itemId) ?? ({} as ShoppingList)

  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unitEdit: item.unit,
      categoryEdit: item.category,
      nameEdit: item.name,
      quantityEdit: item.quantity,
    },
  })
  const { handleSubmit } = methods

  function handleEditItem(data: FormSchemaType) {
    editItem({
      id: itemId,
      name: data.nameEdit,
      quantity: data.quantityEdit,
      unit: data.unitEdit,
      category: data.categoryEdit,
      isChecked: item.isChecked,
    })
    setIsModalOpen(false)
  }

  function handleOpenModal(open: boolean) {
    setIsModalOpen(open)
  }

  return (
    <FormProvider {...methods}>
      <Dialog.Root open={isModalOpen} onOpenChange={handleOpenModal}>
        <Dialog.Trigger className="px-3 py-2 w-full text-gray-100 text-left text-sm hover:bg-gray-400 rounded-t-md outline-none border border-gray-400 hover:border-purple-light focus-visible:border-purple-light">
          Editar
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-gray-500/40 fixed inset-0" />

          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-gray-600 p-5 rounded-md text-gray-200 border border-gray-300 flex flex-col justify-between gap-3">
            <Dialog.Title className="text-lg font-bold text-gray-100">
              Editar item
            </Dialog.Title>

            <form
              onSubmit={handleSubmit(handleEditItem)}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <ItemInput nameField="nameEdit" />

                <div className="flex justify-between">
                  <QuantityInput nameField="quantityEdit" />
                  <SelectCategory nameField="categoryEdit" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-default hover:bg-purple-dark rounded-md py-2 text-white font-semibold text-sm"
              >
                Confirmar
              </button>
            </form>

            <Dialog.Close className="absolute right-4 top-4">
              <X className="size-5 text-red-600 hover:text-red-500" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </FormProvider>
  )
}
