import Task, { WATER_PLANTS } from '../src/js/utils/task'


const description = 'Simple, just water the plants'

test('Task gets instanciated with proper values.', () => {
  const task = new Task({
    type: WATER_PLANTS,
    description,
  })
  expect(task.type).toBe(WATER_PLANTS)
  expect(task.description).toBe(description)
  expect(task.completed).toBe(false)
})

