import { categories } from '../data/categories'

export type CategoryType = (typeof categories)[number]['value']
