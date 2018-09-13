export const WATER_PLANTS = 'WATER_PLANTS'
export const ADJUST_HEADSTONE = 'ADJUST_HEADSTONE'

const taskTypes = [
  WATER_PLANTS,
  ADJUST_HEADSTONE,
]

export default class Task {
  constructor({ type, description, completed = false }) {
    if (!taskTypes.includes(type)) {
      throw new Error('Invalid task type: ' + type + '.')
    }
    this.type = type
    this.description = description
    this.completed = completed
  }
}


