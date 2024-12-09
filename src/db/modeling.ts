import { UserFunc } from '../Model/user'
import { MovementFunc } from '../Model/movement'
import { CategoriesFunc } from '../Model/categories'
import { MonthResumeFunc } from '../Model/monthResume'
import { MovementTypeFunc } from '../Model/movementType'
import { PlanningFunc } from '../Model/planning'

import { db } from './db'

export const User = UserFunc(db)
export const Movement = MovementFunc(db)
export const Categories = CategoriesFunc(db)
export const MonthResume = MonthResumeFunc(db)
export const MovementType = MovementTypeFunc(db)
export const Planning = PlanningFunc(db)
