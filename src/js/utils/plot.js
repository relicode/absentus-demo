import Block from './block'


const COUNTRY = 'country'
const CITY = 'city'
const CEMETERY = 'cemetery'
const BLOCK = 'block'
const PLOT = 'plot'

const pad = (stringToPad, padType) => {
  switch (padType) {
    case COUNTRY:
      return String(stringToPad).padStart(3, '0') // 195 countries in the world
    case 'city':
      return String(stringToPad).padStart(5, '0') // According to the U.S. Census Bureau, there are 19,354 "incorporated places" in the United States.
    case 'cemetery':
      return String(stringToPad).padStart(3, '0')    // Up to 1000 cemeteries per city
    case 'block':
      return String(stringToPad).padStart(4, '0')       // Up to 10000 blocks per cemetery
    case 'plot':
      return String(stringToPad).padStart(6, '0')        // Up to 1,000,000 plots per block
    default:
      throw new Error('PadType is missing or invalid.')
  }
}

// Country codes based on international country calling code
const countryMap = {
  finland: 358,
  singapore: 65,
}

const cityMap = {
  finland: {
    helsinki: '091',
    vantaa: '092',
    espoo: '049',
    forssa: '061',
  },
  singapore: {
    singapore: '0'
  }
}

const cemeteryMap = {
  helsinki: {
    hietaniemi: '1',
    malmi: '2',
    'maunulan uurnalehto': '3',
  }
}

export default class Plot {
  constructor(block, plotNr) {
    if (!(block instanceof Block) || !plotNr) {
      throw new Error('Block and plotNr are required.')
    }
    this.block = block
    this.plotNr = plotNr
  }

  getIsgn() {
    const { block, plotNr } = this
    const { country, city, cemetery } = block
    return (
      pad(countryMap[country], COUNTRY) +
      pad(cityMap[country][city], CITY) +
      pad(cemeteryMap[city][cemetery], CEMETERY) +
      pad(block.blockNr, BLOCK) +
      pad(plotNr, PLOT)
    )
  }
}

