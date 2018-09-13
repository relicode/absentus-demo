export default class Block {
  constructor({country, city, cemetery, positions, blockNr, tasks = []}) {
    if (!country || !city || !cemetery || !positions || !blockNr) {
      throw new Error('Country, city, cemetery, positions and blockNr are required.')
    }
    this.country = country
    this.city = city
    this.cemetery = cemetery
    this.positions = positions
    this.blockNr = blockNr
    this.tasks = tasks
  }
}

