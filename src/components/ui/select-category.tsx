import * as Select from '@radix-ui/react-select'
import {
  Apple,
  Beef,
  CakeSlice,
  Carrot,
  Check,
  ChevronDown,
  ChevronUp,
  Milk,
} from 'lucide-react'
import { useState } from 'react'

export function SelectCategory() {
  const [isSelectOpened, setIsSelectOpened] = useState(false)

  const categories = [
    {
      icon: <CakeSlice className="size-4 text-yellow-light" />,
      label: 'Padaria',
      value: 'bakery',
    },
    {
      icon: <Carrot className="size-4 text-green-light" />,
      label: 'Legume',
      value: 'vegetable',
    },
    {
      icon: <Beef className="size-4 text-pink-light" />,
      value: 'meat',
      label: 'Carne',
    },
    {
      icon: <Apple className="size-4 text-orange-light" />,
      value: 'fruit',
      label: 'Fruta',
    },
    {
      icon: <Milk className="size-4 text-blue-light" />,
      value: 'drink',
      label: 'Bebida',
    },
  ]

  function handleChangeSelectOpened(open: boolean) {
    setIsSelectOpened(open)
  }

  return (
    <div className="has-[input:focus]:text-purple-light flex flex-col gap-2">
      <label htmlFor="category">Categoria</label>

      <Select.Root onOpenChange={handleChangeSelectOpened}>
        <Select.Trigger
          className={`h-10 w-[160px] text-sm leading-none text-gray-100 data-[placeholder]:text-gray-200 outline-none rounded-md bg-gray-400 border border-1 p-3 flex items-center justify-between gap-3 focus:border-purple-light ${isSelectOpened ? 'border-purple-light' : 'border-gray-300'}`}
        >
          <Select.Value placeholder="Selecione"></Select.Value>
          <Select.Icon>
            {isSelectOpened ? (
              <ChevronUp className="size-4 text-purple-light" />
            ) : (
              <ChevronDown className="size-4" />
            )}
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content position="popper" sideOffset={4}>
            <Select.Viewport>
              {categories.map((category, index) => {
                let borderRadius = ''

                if (index === 0) {
                  borderRadius = 'rounded-t-md'
                } else if (index === categories.length - 1) {
                  borderRadius = 'rounded-b-md'
                }

                return (
                  <Select.Item
                    className={`bg-gray-400 outline-none border border-1 border-gray-300 flex items-center justify-between p-3 cursor-pointer text-sm text-gray-100 data-[state=checked]:bg-gray-300 hover:bg-gray-300 focus:bg-gray-300 focus:border-purple-light w-[160px] ${borderRadius}`}
                    key={category.value}
                    value={category.value}
                  >
                    <Select.ItemText>
                      <div className="flex gap-2 items-center">
                        {category.icon}
                        <span>{category.label}</span>
                      </div>
                    </Select.ItemText>
                    <Select.ItemIndicator className="text-purple-light">
                      <Check className="size-3" />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              })}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
