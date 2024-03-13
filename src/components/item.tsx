import * as Checkbox from '@radix-ui/react-checkbox'
import { TagCategory } from './tag-category'
import { Check } from 'lucide-react'
import { SettingsPopover } from './settings-popover'
import { ShoppingList } from '../@types/shopping-list'
import { categories } from '../data/categories'
import { units } from '../data/units'

export function Item({
  name,
  isChecked,
  category: categoryValue,
  quantity,
  unit: unitValue,
}: ShoppingList) {
  const category = categories.find(
    (category) => category.value === categoryValue,
  ) as (typeof categories)[number]

  const unit = units.find(
    (unit) => unit.value === unitValue,
  ) as (typeof units)[number]

  const isQuantityMajorThanOne = quantity > 1

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
          <strong className="text-gray-100">{name}</strong>
          <span className="text-gray-200 text-sm">
            {quantity} {unit.label.default}
            {isQuantityMajorThanOne && 's'}
          </span>
        </label>
      </div>

      <div className="flex items-center gap-3">
        <TagCategory
          category={category?.label}
          backgroundColor={category?.bgColor}
          textColor={category?.textColor}
          icon={<category.icon className={`size-4 ${category.textColor}`} />}
        />

        <SettingsPopover />
      </div>
    </li>
  )
}
