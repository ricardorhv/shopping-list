import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface ItemInputProps {
  className?: string
  nameField?: string
}

export function ItemInput({ className, nameField }: ItemInputProps) {
  const { register } = useFormContext()

  return (
    <div
      className={twMerge(
        'has-[input:focus]:text-purple-light flex flex-col gap-2',
        className,
      )}
    >
      <label htmlFor="item">Item</label>
      <input
        className="text-sm h-10 leading-none text-gray-100 rounded-md outline-none border border-1 border-gray-300 bg-gray-500 p-3 focus:border-purple-light"
        id="item"
        type="text"
        {...register(nameField ?? 'name')}
      />
    </div>
  )
}
