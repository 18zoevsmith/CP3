//watched, liked, disliked
//start much like shopping cart lab
let mock = [{
    id: 1,
    name: "Citizen Kane",
    year: "1941",
    summary: "",
    image: 'cit_kane.jpg'
  },
  {
    id: 2,
    name: "Casablanca",
    year: "1942",
    summary: "",
    image: 'casa.jpg'
  },
  {
    id: 3,
    name: "The Godfather",
    year: "1972",
    summary: "",
    image: 'gf.jpg'
  },
  {
    id: 4,
    name: "Gone with the Wind",
    year: "1939",
    summary: "",
    image: 'gwtw.jpg'
  },
{
    id: 5,
    name: "Lawrence of Arabia",
    year: "1962",
    summary: "",
    image: 'lawoa.jpg'
  },
{
    id: 6,
    name: "The Wizard of Oz",
    year: "1939",
    summary: "",
    image: 'wo_oz.jpg'
  },
{
    id: 7,
    name: "The Graduate",
    year: "1962",
    summary: "",
    image: 'grad.jpg'
 },
{
    id: 8,
    name: "On the Waterfront",
    year: "1954",
    summary: "",
    image: 'otw.jpg'
  },
{
    id: 9,
    name: "Schindler’s List",
    year: "1993",
    summary: "",
    image: 'sch.jpg'
  },
{
    id: 10,
    name: "Singin’ in the Rain",
    year: "1952",
    summary: "",
    image: 'sitr.jpg'
  },
{
    id: 11,
    name: "It’s A Wonderful Life",
    year: "1946",
    summary: "",
    image: 'wonder.jpg'
  },
{
    id: 12,
    name: "Sunset Boulevard",
    year: "1950",
    summary: "",
    image: 'sunset.jpg'
  },
{
    id: 13,
    name: "The Bridge on the River Kwai",
    year: "1957",
    summary: "",
    image: 'river.jpg'
  },
{
    id: 14,
    name: "Some Like It Hot",
    year: "1959",
    summary: "",
    image: 'hot.jpg'
  },
{
    id: 15,
    name: "Star Wars",
    year: "1977",
    summary: "",
    image: 'star.jpg'
  },
{
    id: 16,
    name: "All About Eve",
    year: "1950",
    summary: "",
    image: 'eve.jpg'
  },
{
    id: 17,
    name: "The African Queen",
    year: "1951",
    summary: "",
    image: 'queen.jpg'
  },
{
    id: 18,
    name: "Psycho",
    year: "1960",
    summary: "",
    image: 'psycho.jpg'
  },
{
    id: 19,
    name: "Chinatown",
    year: "1974",
    summary: "",
    image: 'china.jpg'
  },
{
    id: 20,
    name: "One Flew Over the Cuckoo’s Nest",
    year: "1975",
    summary: "",
    image: 'cuckoo.jpg'
  },
{
    id: 21,
    name: "The Grapes of Wrath",
    year: "1940",
    summary: "",
    image: 'grape.jpg'
  },
{
    id: 22,
    name: "2001: A Space Odyssey",
    year: "1968",
    summary: "",
    image: 'space.jpg'
  },
{
    id: 23,
    name: "The Maltese Falcon",
    year: "1941",
    summary: "",
    image: 'malt.jpg'
  },
{
    id: 24,
    name: "Raging Bull",
    year: "1980",
    summary: "",
    image: 'bull.jpg'
  },
{
    id: 25,
    name: "E.T. The Extra-Terrestrial",
    year: "1982",
    summary: "",
    image: 'et.jpg'
  },
{
    id: 26,
    name: "Dr. Stangelove",
    year: "1964",
    summary: "",
    image: 'love.jpg'
  },
{
    id: 27,
    name: "Bonnie & Clyde",
    year: "1967",
    summary: "",
    image: 'bonnie.jpg'
  },
{
    id: 28,
    name: "Apocalypse Now",
    year: "1979",
    summary: "",
    image: 'apoc.jpg'
  },
{
    id: 29,
    name: "Mr. Smith Goes to Washington",
    year: "1939",
    summary: "",
    image: 'smith.jpg'
  },
{
    id: 30,
    name: "Treasure of the Sierra Madre",
    year: "1948",
    summary: "",
    image: 'trea.jpg'
  },
{
    id: 31,
    name: "Annie Hall",
    year: "1977",
    summary: "",
    image: 'hall.jpg'
  },
{
    id: 32,
    name: "The Godfather Part II",
    year: "1974",
    summary: "",
    image: 'two.jpg'
  },
{
    id: 33,
    name: "High Noon",
    year: "1952",
    summary: "",
    image: 'noon.jpg'
  },
{
    id: 34,
    name: "To Kill A Mockingbird",
    year: "1962",
    summary: "",
    image: 'tkam.jpg'
  },
{
    id: 35,
    name: "It Happened One Night",
    year: "1934",
    summary: "",
    image: 'night.jpg'
  },
{
    id: 36,
    name: "Midnight Cowboy",
    year: "1969",
    summary: "",
    image: 'mid.jpg'
  },
{
    id: 37,
    name: "The Best Years of Our Lives",
    year: "1946",
    summary: "",
    image: 'best.jpg'
  },
{
    id: 38,
    name: "Double Indemnity",
    year: "1944",
    summary: "",
    image: 'di.jpg'
  },
{
    id: 39,
    name: "Doctor Zhivago",
    year: "1965",
    summary: "",
    image: 'doc.jpg'
  },
{
    id: 40,
    name: "North by Northwest",
    year: "1959",
    summary: "",
    image: 'north.jpg'
  },
{
    id: 41,
    name: "West Side Story",
    year: "1961",
    summary: "",
    image: 'west.jpg'
  },
{
    id: 42,
    name: "Rear Window",
    year: "1954",
    summary: "",
    image: 'rear.jpg'
  },

{
    id: 43,
    name: "King Kong",
    year: "1933",
    summary: "",
    image: 'king.jpg'
  },
{
    id: 44,
    name: "The Birth of a Nation",
    year: "1915",
    summary: "",
    image: 'birth.jpg'
  },
{
    id: 45,
    name: "A Streetcar Named Desire",
    year: "1951",
    summary: "",
    image: '.jpg'
  },
{
    id: 46,
    name: "A Clockwork Orange",
    year: "1971",
    summary: "",
    image: 'cw_or.jpg'
  },
{
    id: 47,
    name: "Taxi Driver",
    year: "1976",
    summary: "",
    image: 'taxi.jpg'
  },
{
    id: 48,
    name: "Jaws",
    year: "1975",
    summary: "",
    image: 'jaws.jpg'
  },
{
    id: 49,
    name: "Snow White & the Seven Dwarfs",
    year: "1937",
    summary: "",
    image: 'snow.jpg'
  },
{
    id: 50,
    name: "Butch Cassidy & the Sundance Kid",
    year: "1969",
    summary: "",
    image: 'butch.jpg'
  },
{
    id: 51,
    name: "The Philadelphia Story",
    year: "1940",
    summary: "",
    image: 'phil.jpg'
  },
{
    id: 52,
    name: "From Here to Eternity",
    year: "1953",
    summary: "",
    image: 'from.jpg'
  },
{
    id: 53,
    name: "Amadeus",
    year: "1984",
    summary: "",
    image: 'amad.jpg'
  },
{
    id: 54,
    name: "All Quiet on the Western Front",
    year: "1930",
    summary: "",
    image: 'quiet.jpg'
  },
{
    id: 55,
    name: "The Sound of Music",
    year: "1965",
    summary: "",
    image: 'music.jpg'
  },
{
    id: 56,
    name: "M*A*S*H",
    year: "1970",
    summary: "",
    image: 'mash.jpg'
  },
{
    id: 57,
    name: "The Third Man",
    year: "1949",
    summary: "",
    image: 'third.jpg'
  },
{
    id: 58,
    name: "Fantasia",
    year: "1940",
    summary: "",
    image: 'fan.jpg'
  },
{
    id: 59,
    name: "Rebel Without a Cause",
    year: "1955",
    summary: "",
    image: 'rebel.jpg'
  },
{
    id: 60,
    name: "Raiders of the Lost Ark",
    year: "1981",
    summary: "",
    image: 'lost.jpg'
  },
{
    id: 61,
    name: "Vertigo",
    year: "1958",
    summary: "",
    image: 'vert.jpg'
  },
{
    id: 62,
    name: "Tootsie",
    year: "1982",
    summary: "",
    image: 'too.jpg'
  },
{
    id: 63,
    name: "Stagecoach",
    year: "1939",
    summary: "",
    image: 'stag.jpg'
  },
{
    id: 64,
    name: "Close Encounters of the Third Kind",
    year: "1977",
    summary: "",
    image: 'kind.jpg'
  },
{
    id: 65,
    name: "The Silence of the Lambs",
    year: "1991",
    summary: "",
    image: 'lamb.jpg'
  },
{
    id: 66,
    name: "Network",
    year: "1976",
    summary: "",
    image: 'net.jpg'
  },
{
    id: 67,
    name: "The Manchurian Candidate",
    year: "1962",
    summary: "",
    image: 'man.jpg'
  },
{
    id: 68,
    name: "An American in Paris",
    year: "1951",
    summary: "",
    image: 'paris.jpg'
  },
{
    id: 69,
    name: "Shane",
    year: "1953",
    summary: "",
    image: 'shane.jpg'
  },
{
    id: 70,
    name: "The French Connection",
    year: "1971",
    summary: "",
    image: 'fren.jpg'
  },
{
    id: 71,
    name: "Forrest Gump",
    year: "1994",
    summary: "",
    image: 'gump.jpg'
  },
{
    id: 72,
    name: "Ben-Hur",
    year: "1959",
    summary: "",
    image: 'ben.jpg'
  },
{
    id: 73,
    name: "Wuthering Heights",
    year: "1939",
    summary: "",
    image: 'wuth.jpg'
  },
{
    id: 74,
    name: "The Gold Rush",
    year: "1925",
    summary: "",
    image: 'gold.jpg'
  },
{
    id: 75,
    name: "Dances with Wolves",
    year: "1990",
    summary: "",
    image: 'wolf.jpg'
  },
{
    id: 76,
    name: "City Lights",
    year: "1931",
    summary: "",
    image: 'city.jpg'
  },
{
    id: 77,
    name: "American Graffiti",
    year: "1973",
    summary: "",
    image: 'amer.jpg'
  },
{
    id: 78,
    name: "Rocky",
    year: "1976",
    summary: "",
    image: 'rocky.jpg'
  },
{
    id: 79,
    name: "The Deer Hunter",
    year: "1978",
    summary: "",
    image: 'deer.jpg'
  },
{
    id: 80,
    name: "The Wild Bunch",
    year: "1969",
    summary: "",
    image: 'wild.jpg'
  },
{
    id: 81,
    name: "Modern Times",
    year: "1936",
    summary: "",
    image: 'time.jpg'
  },
{
    id: 82,
    name: "Giant",
    year: "1956",
    summary: "",
    image: 'giant.jpg'
  },
{
    id: 83,
    name: "Platoon",
    year: "1986",
    summary: "",
    image: 'plat.jpg'
  },
{
    id: 84,
    name: "Fargo",
    year: "1996",
    summary: "",
    image: 'fargo.jpg'
  },
{
    id: 85,
    name: "Duck Soup",
    year: "1933",
    summary: "",
    image: 'duck.jpg'
  },
{
    id: 86,
    name: "Mutiny on the Bounty",
    year: "1935",
    summary: "",
    image: 'mut.jpg'
  },
{
    id: 87,
    name: "Frankenstein",
    year: "1931",
    summary: "",
    image: 'frank.jpg'
  },
{
    id: 88,
    name: "Easy Rider",
    year: "1969",
    summary: "",
    image: 'easy.jpg'
  },
{
    id: 89,
    name: "Patton",
    year: "1970",
    summary: "",
    image: 'pat.jpg'
  },
{
    id: 90,
    name: "The Jazz Singer",
    year: "1927",
    summary: "",
    image: 'jazz.jpg'
  },
{
    id: 91,
    name: "My Fair Lady",
    year: "1964",
    summary: "",
    image: 'fair.jpg'
  },
{
    id: 92,
    name: "A Place in the Sun",
    year: "1951",
    summary: "",
    image: 'sun.jpg'
  },
{
    id: 93,
    name: "The Apartment",
    year: "1960",
    summary: "",
    image: 'apar.jpg'
  },
{
    id: 94,
    name: "Goodfellas",
    year: "1990",
    summary: "",
    image: 'good.jpg'
  },
{
    id: 95,
    name: "Pulp Fiction",
    year: "1994",
    summary: "",
    image: 'pulp.jpg'
  },
{
    id: 96,
    name: "The Searchers",
    year: "1956",
    summary: "",
    image: 'sea.jpg'
  },
{
    id: 97,
    name: "Bringing Up Baby",
    year: "1938",
    summary: "",
    image: 'baby.jpg'
  },
{
    id: 98,
    name: "Unforgiven",
    year: "1992",
    summary: "",
    image: 'unfo.jpg'
  },
{
    id: 99,
    name: "Guess Who’s Coming To Dinner",
    year: "1967",
    summary: "",
    image: 'dindin.jpg'
  },
{
    id: 100,
    name: "Yankee Doodle Dandy",
    year: "1942",
    summary: "",
    image: 'yankA.jpg'
  }
]

export default mock;
