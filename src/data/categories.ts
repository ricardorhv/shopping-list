import { Apple, Beef, CakeSlice, Carrot, Milk } from 'lucide-react'

export const categories = [
  {
    label: 'Padaria',
    value: 'bakery',
    textColor: 'text-yellow-light',
    bgColor: 'bg-yellow-dark',
    icon: CakeSlice,
  },
  {
    label: 'Legume',
    value: 'vegetable',
    textColor: 'text-green-light',
    bgColor: 'bg-green-dark',
    icon: Carrot,
  },
  {
    label: 'Carne',
    value: 'meat',
    textColor: 'text-pink-light',
    bgColor: 'bg-pink-dark',
    icon: Beef,
  },
  {
    label: 'Fruta',
    value: 'fruit',
    textColor: 'text-orange-light',
    bgColor: 'bg-orange-dark',
    icon: Apple,
  },
  {
    label: 'Bebida',
    value: 'drink',
    textColor: 'text-blue-light',
    bgColor: 'bg-blue-dark',
    icon: Milk,
  },
] as const
