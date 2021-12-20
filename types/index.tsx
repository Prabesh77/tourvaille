export interface Place {
    id: Number
    name: String
    location: String
    price: Number
    image: String
}

export interface Trekking {
    id: Number
    name: String
    image: String,
    HighestAccess: String
    Duration: Number
    DaysGroupSize: String
    Coordinates: String
    ELocation: String
    Country: String
    Airport: String
    DepartureFrom: String
    Grade: String
    Accommodation: String
    tMeals: String
    Transportation: String
    BestSeason: String
    MajorActivity: String
    IncludeActivity: String
    Culture: String
    Himalayansights: String
    desc: String
    coordinates: []
}

export interface Rafting {
    id: Number
    name: String
    image: String
    RaftingStarts: String
    RaftingEnds: String
    Grades: String
    Duration: String
    Distance: String
    BestSeason: String
    PerfectFor: String
    Difficulty: String
    TourStartsAt: String
    desc: String
}

export interface Places {
    places: Place[]
}

export interface Trekkings {
    trekking: Trekking[]
}

export interface Raftings {
    rafting: Rafting[]
}
