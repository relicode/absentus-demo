import Block from '../src/js/utils/block'


test('Block gets instanciated with proper values', () => {
  const block = new Block({
    country: 'finland',
    city: 'helsinki',
    cemetery: 'hietaniemi',
    coordinates: [
      [60.16874554734086, 24.918044068116334],
      [60.16890565784961, 24.918092359309178],
      [60.16889765234272, 24.91822113582339],
      [60.168734873279206, 24.918172844630586],
    ],
    blockNr: 1
  })
  expect(block.country).toBe('finland')
  expect(block.city).toBe('helsinki')
  expect(block.cemetery).toBe('hietaniemi')
  expect(block.blockNr).toBe(1)
})

