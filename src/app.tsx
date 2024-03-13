import { z } from 'zod'
import { AddNewItemForm } from './components/add-new-item-form'
import { Item } from './components/item'
import { useShoppingList } from './hooks/use-shopping-list'
import { units } from './data/units'
import { categories } from './data/categories'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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

export type FormSchemaType = z.infer<typeof formSchema>

export function App() {
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unit: 'unit',
      category: undefined,
    },
  })
  const { shoppingList } = useShoppingList()

  return (
    <FormProvider {...methods}>
      <div
        className={`bg-no-repeat bg-cover bg-left-top h-[185px] bg-[url(./assets/background.png)]`}
      />

      <main className="max-w-[720px] mx-auto mt-[-100px] px-6 sm:p-0 space-y-8">
        <h1 className="text-gray-100 font-bold text-3xl leading-none">
          Lista de Compras
        </h1>

        <AddNewItemForm />

        <ul className="space-y-3">
          {shoppingList.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      </main>
    </FormProvider>
  )
}
