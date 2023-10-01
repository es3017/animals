const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

function showInfo() {
    const inputElement = document.getElementById("petNum");
    const selectedPetInfo = document.querySelector(".selectedPetInfo");

    const petNumber = parseInt(inputElement.value);

    if (!isNaN(petNumber) && petNumber >= 1 && petNumber <= petsData.length) {
        const selectedPet = petsData[petNumber - 1]; // Adjust for 0-based index
        const petInfo = `${selectedPet.petName} the ${selectedPet.breed} is ${selectedPet.age} years old. This pet weighs ${selectedPet.weightInKilos} kilos and is a ${selectedPet.breed} breed.`;
        selectedPetInfo.textContent = petInfo;
    } else {
        selectedPetInfo.textContent = "Invalid input. Please enter a number between 1 and " + petsData.length;
    }
}
