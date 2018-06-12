// const Plot = require('../src/js/utils/plot')

import Plot from '../src/js/utils/plot'

test('Plot gets instanciated with proper values', () => {
  const plot = new Plot({
    country: 'finland',
    city: 'helsinki',
    cemetery: 'hietaniemi',
    block: 1,
    plot: 6,
  })
  expect(plot.getIsgn()).toBe('358000910010001000006')
})

