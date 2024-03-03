import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TagCategoryProps {
  icon: ReactNode
  backgroundColor: string
  textColor: string
  category: string
}

export function TagCategory({
  category,
  backgroundColor,
  textColor,
  icon,
}: TagCategoryProps) {
  return (
    <div
      className={`${backgroundColor} rounded-full px-4 py-2 flex items-center gap-[6px] leading-tight`}
    >
      {icon}
      <span className={`${textColor} font-semibold text-sm`}>{category}</span>
    </div>
  )
}
