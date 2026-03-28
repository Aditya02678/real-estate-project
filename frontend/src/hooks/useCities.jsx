import { City } from 'country-state-city'

const formattedCities = City.getCitiesOfCountry("IN")  // ✅ only India cities
    .filter((city) => city.name)
    .map((city) => ({
        value: city.name,
        label: city.name,
        countryCode: city.countryCode,
        latitude: city.latitude,
        longitude: city.longitude,
    }))
      .filter((city, index, self) => 
        index === self.findIndex((c) => c.value === city.value)  // ✅ remove duplicates
    )

const useCities = () => {
    const getAll = () => formattedCities

    return { getAll }
}

export default useCities