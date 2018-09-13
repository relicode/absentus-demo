import Block from '../src/js/utils/block'
import Plot from '../src/js/utils/plot'


const block = new Block({
  country: 'finland',
  city: 'helsinki',
  cemetery: 'hietaniemi',
  positions: [
    [60.16874554734086, 24.918044068116334],
    [60.16890565784961, 24.918092359309178],
    [60.16889765234272, 24.91822113582339],
    [60.168734873279206, 24.918172844630586],
  ],
  blockNr: 1
})

test('Plot gets instanciated with proper values and provides an ISGN.', () => {
  const plot = new Plot({
    block,
    plotNr: 100,
    location: [60.16874514706719, 24.918160289525986],
    resident: 'Väinö-Klementti Ihalainen',
    notes: 'Some notes about this plot here.'
  })
  expect(plot.getIsgn()).toBe('358000910010001000100')
})

