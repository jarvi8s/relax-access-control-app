/**
 * A zone represents an area at a centre.Each zone has a name and a
 * capacity which represents the maximum number of people who can enter
 * the zone at any one time. Each zone must maintain a list of all cards
 * (and hence members) currently in the zone. These lists are updated
 * whenever members enter or leave a zone,and it is always possible to
 * say how many people(cards) are in the zone and who they are.
 */

class Zone {
  private people: Array<Person>
//  static zonepeople: any

  constructor(
    private zonename: String,
    private zonecapacity: number,
    private zonepeople: number,
    private zoneprice: number
  ) {
    this.zonename = zonename
    this.zonecapacity = zonecapacity
    this.zonepeople = zonepeople
    this.zoneprice = zoneprice
  }
  public addPerson = (person: Person): void => {
    this.people.push(person)
  }
  public howmanyPeople = (): number => this.people.length
  public incapacity = (): void => {
    if (this.zonepeople > this.zonecapacity) {
      console.log('out of capacity')
    }
  }
  public cardsInZone = (): void => {
    this.people.forEach(function (item) {
      console.log(item.toString())
    })
  }
}
