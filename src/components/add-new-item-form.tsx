import { Plus } from 'lucide-react'
import { SelectCategory } from './ui/select-category'
import { QuantityInput } from './ui/quantity-input'
import { ItemInput } from './ui/item-input'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useShoppingList } from '../hooks/use-shopping-list'
import { units } from '../data/units'
import { categories } from '../data/categories'

const formSchema = z.object({
  name: z.string().min(3),
  quantity: z.number().positive(),
  unit: z.nativeEnum(
    Object.fromEntries(units.map((unit) => [unit.value, unit.value])),
  ),
  category: z.nativeEnum(
    Object.fromEntries(
      categories.map((category) => [category.value, category.value]),
    ),
  ),
})

type FormSchemaType = z.infer<typeof formSchema>

export function AddNewItemForm() {
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unit: 'unit',
      category: undefined,
    },
  })

  const { handleSubmit, reset } = methods

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
    <FormProvider {...methods}>
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
    </FormProvider>
  )
}
