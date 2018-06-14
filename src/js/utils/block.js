export default class Block {
  plots = []
  plotCounter = 1
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
  addPlot(type, description, completed = false) {
    this.tasks.push(new Task({
      completed,
      description,
      type,
    }))
    this.taskCounter += 1
  }

}

