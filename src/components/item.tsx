import * as Checkbox from '@radix-ui/react-checkbox'
import { TagCategory } from './tag-category'
import { Apple, Check } from 'lucide-react'
import { SettingsPopover } from './settings-popover'

export function Item() {
  return (
    <li className="bg-gray-400 border border-1 border-gray-300 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Checkbox.Root
          id="checked"
          className="size-4 bg-transparent border border-1 border-purple-light rounded-sm hover:bg-purple-dark flex items-center justify-center leading-none data-[state=checked]:bg-success-default data-[state=checked]:border-success-default hover:data-[state=checked]:bg-success-light hover:data-[state=checked]:border-success-light"
        >
          <Checkbox.Indicator>
            <Check className="text-gray-100 size-3" />
          </Checkbox.Indicator>
        </Checkbox.Root>

        <label
          htmlFor="checked"
          className="flex flex-col gap-[2px] leading-tight"
        >
          <strong className="text-gray-100">Maça</strong>
          <span className="text-gray-200 text-sm">2 unidades</span>
        </label>
      </div>

      <div className="flex items-center gap-3">
        <TagCategory
          category="Fruta"
          backgroundColor="bg-orange-dark"
          textColor="text-orange-light"
          icon={<Apple className="size-4 text-orange-light" />}
        />

        <SettingsPopover />
      </div>
    </li>
  )
}
