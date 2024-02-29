import { ReactNode } from 'react'

interface TagCategoryProps {
  icon: ReactNode
  color: 'purple' | 'orange' | 'green' | 'yellow' | 'blue'
  category: string
}

export function TagCategory({ category, color, icon }: TagCategoryProps) {
  const containerColor = `bg-${color}-dark`
  const textColor = `text-${color}-light`

  return (
    <div
      className={`${containerColor} rounded-full px-4 py-2 flex items-center gap-[6px] leading-tight`}
    >
      {icon}
      <span className={`${textColor} font-semibold text-sm`}>{category}</span>
    </div>
  )
}
