export default class Player {
  id: string
  first_name: string
  last_name: string
  weight_pounds: number
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string

  constructor(obj: any) {
    const {
      id,
      first_name,
      last_name,
      weight_pounds,
      abbreviation,
      city,
      conference,
      division,
      full_name,
      name,
    } = obj

    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.weight_pounds = weight_pounds
    this.abbreviation = abbreviation
    this.city = city
    this.conference = conference
    this.division = division
    this.full_name = full_name
    this.name = name
  }
}