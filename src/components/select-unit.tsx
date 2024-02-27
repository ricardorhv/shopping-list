import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export function SelectUnit() {
  const [isSelectOpened, setIsSelectOpened] = useState(false)

  const units = [
    {
      value: 'unit',
      label: 'Un.',
    },
    {
      value: 'liter',
      label: 'L',
    },
    {
      value: 'kilogram',
      label: 'Kg',
    },
  ]

  function handleChangeSelectOpened(open: boolean) {
    setIsSelectOpened(open)
  }

  return (
    <Select.Root onOpenChange={handleChangeSelectOpened} defaultValue="unit">
      <Select.Trigger className="w-[72px] h-10 text-xs leading-none text-gray-200 outline-none rounded-e-md bg-gray-400 border border-1 border-gray-300 p-3 flex items-center justify-between focus:border-purple-light">
        <Select.Value></Select.Value>
        <Select.Icon>
          {isSelectOpened ? (
            <ChevronUp className="size-4 text-white" />
          ) : (
            <ChevronDown className="size-4 text-white " />
          )}
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content position="popper" sideOffset={4}>
          <Select.Viewport>
            {units.map((unit, index) => {
              let borderRadius = ''

              if (index === 0) {
                borderRadius = 'rounded-t-md'
              } else if (index === units.length - 1) {
                borderRadius = 'rounded-b-md'
              }

              return (
                <Select.Item
                  className={`bg-gray-400 outline-none border border-1 border-gray-300 flex items-center gap-2 p-3 cursor-pointer text-sm text-gray-100 data-[state=checked]:bg-gray-300 hover:bg-gray-300 focus:bg-gray-300 focus:border-purple-light w-[72px] ${borderRadius}`}
                  key={unit.value}
                  value={unit.value}
                >
                  <Select.ItemText>{unit.label}</Select.ItemText>
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
  )
}
