let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const carProperty in statistics) {
    if (carProperty.charAt(0) === 'r' || statistics[carProperty] % 2 === 1) {
        console.log(statistics[carProperty]);
    }
}