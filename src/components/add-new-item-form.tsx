import { Plus } from 'lucide-react'
import { SelectCategory } from './ui/select-category'
import { QuantityInput } from './ui/quantity-input'
import { ItemInput } from './ui/item-input'
import { FormProvider, useForm } from 'react-hook-form'

import { useShoppingList } from '../hooks/use-shopping-list'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { categories } from '../data/categories'
import { units } from '../data/units'

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
    },
  })
  const { handleSubmit, reset } = methods

  const { addNewItemToTheShoppingList } = useShoppingList()

  function handleAddNewItem(data: FormSchemaType) {
    if ('name' in data) {
      addNewItemToTheShoppingList({
        ...data,
        isChecked: false,
      })
      reset({
        name: '',
        quantity: 1,
        unit: 'unit',
        category: 'bakery',
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleAddNewItem)}
        className="grid grid-cols-[1fr_140px_40px] grid-rows-2 gap-3 sm:grid-rows-1 sm:grid-cols-[1fr_150px_160px_40px] items-end text-gray-100 leading-none text-sm"
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
