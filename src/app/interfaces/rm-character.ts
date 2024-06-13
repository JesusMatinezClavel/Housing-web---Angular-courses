export interface Info {
    count: number,
    pages: number,
    next: string,
    prev: null
}

export interface Origin {
    name: string,
    url: string
}

export interface Location {
    name: string,
    url: string
}

export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Origin,
    location: Location,
    image: string,
    episodes: [string],
    url: string,
    created: Date
}

export interface RmCharacter {
    info: Info,
    results: [Character]
}
