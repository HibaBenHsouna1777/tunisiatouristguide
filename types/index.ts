export interface Attraction {
  name: string
  description: string
}

export interface Restaurant {
  name: string
  description: string
  priceRange: string
}

export interface PlaceDetails {
  gettingThere: string
  entranceFee: string
  guidedTours: string
  attractions: Attraction[]
  restaurants: Restaurant[]
}

export interface Place {
  name: string
  description: string
  image: string
  coordinates: {
    lat: number
    lng: number
  }
  type: string
  details: PlaceDetails
}

export interface Governorate {
  name: string
  description: string
  places: Place[]
}

export interface Region {
  name: string
  governorates: Governorate[]
}

export interface TunisiaData {
  [key: string]: Region
}

