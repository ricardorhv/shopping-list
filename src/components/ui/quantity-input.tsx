import { useFormContext } from 'react-hook-form'
import { SelectUnit } from '../select-unit'

interface QuantityInputProps {
  nameField?: string
}

export function QuantityInput({ nameField }: QuantityInputProps) {
  const { register } = useFormContext()

  return (
    <div className="has-[input:focus]:text-purple-light has-[button:focus]:text-purple-light flex flex-col gap-2">
      <label htmlFor="quantity">Quantidade</label>

      <div className="flex">
        <input
          className="h-10 text-sm leading-none text-gray-100 rounded-s-md outline-none border border-1 border-gray-300 bg-gray-500 p-3 focus:border-purple-light w-[80px]"
          id="quantity"
          type="number"
          defaultValue={1}
          {...register(nameField ?? 'quantity', { valueAsNumber: true })}
        />

        <SelectUnit nameField={nameField ? 'unitEdit' : undefined} />
      </div>
    </div>
  )
}
