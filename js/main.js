//Esta primer Pre Entrega va a ser acorde con lo visto en clase, mi idea principal del Proyecto final no tiene nada que ver con esto.
//Igual si la siguiente clase me motiva a mejorar este, lo evaluaré.

const carMaxSpeed = 135;
const truckMaxSpeed = 110;
const motorbikeMaxSpeed = 135;

const carMinSpeed = 80;
const truckMinSpeed = 60;
const motorbikeMinSpeed = 80;

let distance = 415;

let estimatedTime = 5;

function carSpeed(){
    return Math.ceil(Math.random()*(carMaxSpeed - carMinSpeed) + carMinSpeed);
}

console.log("Velocidad del auto: " + carSpeed())

function truckSpeed(){
    return Math.ceil(Math.random()*(truckMaxSpeed - truckMinSpeed) + truckMinSpeed);
}

console.log("Velocidad del camión: " + truckSpeed());

function motorbikeSpeed(){
    return Math.ceil(Math.random()*(motorbikeMaxSpeed - motorbikeMinSpeed) + motorbikeMinSpeed);
}

console.log("Velocidad de la moto: " + motorbikeSpeed());



let carArrivedTime = Math.ceil(distance / carSpeed()); 

let restCarTime = Math.ceil( estimatedTime / carArrivedTime);

if(carArrivedTime <= estimatedTime){
    console.log("Llegaste a Mardel en: " + carArrivedTime + " horas");
    
}else{
    console.log("Te falta: " + restCarTime + " hora para llegar a Mardel" );
}

let truckArrivedTime = Math.ceil(distance / truckSpeed());

let restTruckTime = Math.ceil(estimatedTime/ truckArrivedTime);

if (truckArrivedTime <= estimatedTime){
    console.log("Llegaste a Mardel en: " + truckArrivedTime + " horas");
}else{
    console.log("Te falta: " + restTruckTime + " hora para llegar a Mardel");
}

let motoArrivedTime = Math.ceil(distance/ motorbikeSpeed);

let restMotoTime = Math.ceil(estimatedTime/ motoArrivedTime);

if (motoArrivedTime <= estimatedTime){
    console.log("Llegaste a Mardel en: " + motoArrivedTime + " horas");
}else{
    console.log("Te falta: " + restMotoTime + " hora para llegar a Mardel");
}

let reachedDestination = false;
let fastestVehicle = "";
let fastestArrivalTime = Infinity;

while (!reachedDestination) {
  let carSpeed = Math.ceil(Math.random() * (carMaxSpeed - carMinSpeed) + carMinSpeed);
  let truckSpeed = Math.ceil(Math.random() * (truckMaxSpeed - truckMinSpeed) + truckMinSpeed);
  let motorbikeSpeed = Math.ceil(Math.random() * (motorbikeMaxSpeed - motorbikeMinSpeed) + motorbikeMinSpeed);

  let carArrivedTime = Math.ceil(distance / carSpeed);
  let truckArrivedTime = Math.ceil(distance / truckSpeed);
  let motoArrivedTime = Math.ceil(distance / motorbikeSpeed);

  if (carArrivedTime <= estimatedTime && carArrivedTime < fastestArrivalTime) {
    fastestVehicle = "Auto";
    fastestArrivalTime = carArrivedTime;
  }
  if (truckArrivedTime <= estimatedTime && truckArrivedTime < fastestArrivalTime) {
    fastestVehicle = "Camión";
    fastestArrivalTime = truckArrivedTime;
  }
  if (motoArrivedTime <= estimatedTime && motoArrivedTime < fastestArrivalTime) {
    fastestVehicle = "Moto";
    fastestArrivalTime = motoArrivedTime;
  }

  if (carArrivedTime <= estimatedTime || truckArrivedTime <= estimatedTime || motoArrivedTime <= estimatedTime) {
    reachedDestination = true;
  }
}

console.log("El vehículo más rápido para llegar a Mardel en " + estimatedTime + " horas es: " + fastestVehicle);
console.log("Tiempo estimado de llegada: " + fastestArrivalTime + " horas");

