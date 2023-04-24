const { readData, writeData } = require("../files"); //readData, writeData
const DATA_SOURCE = `${__dirname}/../../data`; //data.json

//add car
const addCar = async (car) => {
  try {
    const data = await readData(DATA_SOURCE);
    data.push(car);
    await writeData(data, DATA_SOURCE);
  } catch (err) {
    throw err;
  }
};


//remove car
const removeCar = async (index) => {
  try {
    const data = await readData(DATA_SOURCE);
    const out = data.filter((_, carIndex) => carIndex !== index);
    await writeData(out, DATA_SOURCE);
  } catch (err) {
    throw err;
  }
};

//update car
const updateCar = async (index, car) => {
  try {
    const data = await readData(DATA_SOURCE);
    const out = data.map((c, i) => {
      if (index === i) c = car;
      return c;
    });
    await writeData(out, DATA_SOURCE);
  } catch (err) {
    throw err;
  }
};

//get all cars
const getAllCars = async () => {
  try {
    const data = await readData(DATA_SOURCE);
    return data;
  } catch (err) {
    throw err;
  }
};

//get car by index
const getCarByIndex = async (index) => {
  try {
    const data = await readData(DATA_SOURCE);
    if (index > data.length - 1) console.log("Index does not exist in data");
    return data[index];
  } catch (err) {
    throw err;
  }
};

// dodadi promena na object
const updatePartial = async (index, car) => {
  try {
    const data = await readData(DATA_SOURCE);
    const updatedCar = { ...data[index], ...car };
    const out = data.map((c, i) => {
      if (index === i) c = updatedCar;
      return c;
    });
    await writeData(out, DATA_SOURCE);
  } catch (err) {
    throw err;
  }
};


module.exports = {
  addCar,
  removeCar,
  updateCar,
  getAllCars,
  getCarByIndex,
  updatePartial
};