import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { categories } from '../../data/categories'

interface SelectCategoryProps {
  nameField?: string
}

export function SelectCategory({ nameField }: SelectCategoryProps) {
  const [isSelectOpened, setIsSelectOpened] = useState(false)

  const { control } = useFormContext()

  function handleChangeSelectOpened(open: boolean) {
    setIsSelectOpened(open)
  }

  return (
    <div className="has-[input:focus]:text-purple-light flex flex-col gap-2">
      <label htmlFor="category">Categoria</label>

      <Controller
        control={control}
        name={nameField ?? 'category'}
        render={({ field: { onChange, value } }) => (
          <Select.Root
            onValueChange={onChange}
            onOpenChange={handleChangeSelectOpened}
            value={value}
          >
            <Select.Trigger
              className={`h-10 w-[140px] sm:w-[160px] text-sm leading-none text-gray-100 data-[placeholder]:text-gray-200 outline-none rounded-md bg-gray-400 border border-1 p-3 flex items-center justify-between gap-3 focus:border-purple-light ${isSelectOpened ? 'border-purple-light' : 'border-gray-300'}`}
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
                        className={`bg-gray-400 outline-none border border-1 border-gray-300 flex items-center justify-between p-3 cursor-pointer text-sm text-gray-100 data-[state=checked]:bg-gray-300 hover:bg-gray-300 focus:bg-gray-300 focus:border-purple-light w-[140px] sm:w-[160px] ${borderRadius}`}
                        key={category.value}
                        value={category.value}
                      >
                        <Select.ItemText>
                          <div className="flex gap-2 items-center">
                            {
                              <category.icon
                                className={`size-4 ${category.textColor}`}
                              />
                            }
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
        )}
      />
    </div>
  )
}
