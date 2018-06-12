export default class Block {
  constructor({country, city, cemetery, coordinates, blockNr}) {
    if (!country || !city || !cemetery || !coordinates || !blockNr) {
      throw new Error('Country, city, cemetery, coordinates and blockNr are required.')
    }
    this.country = country
    this.city = city
    this.cemetery = cemetery
    this.coordinates = coordinates
    this.blockNr = blockNr
  }
}

