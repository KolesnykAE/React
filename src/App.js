import './App.css';
import Car from "./Components/cars/Car";
import {useState} from "react";
import Counter from "./Components/Counter/counter";

let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400, use: true},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250,use: false},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300, use: true},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140, use: false},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200, use: true},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165, use: true},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120, use: true},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120, use: true},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350, use: false},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180, use: false},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180, use: false},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400, use: true},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230, use: true}
];

function App() {
    let [carInfo, setCars] = useState(cars);

    const deleteCar = () => {
        cars.pop();
        setCars([...carInfo]);
        console.log(cars)
    };


    return (
        <div>
            <div>
                {
                    cars.map((value, index) =>
                        <Car key={index}
                            // producer={value.producer}
                            // model={value.model}
                            // year={value.year}
                            // color={value.color}
                            // type={value.type}
                            // engine={value.engine}
                            // volume={value.volume}
                            // power={value.power}
                            // use={value.use}

                            // если пропсы используем под именами в объекте, то можно просто деструктирузировать value

                             {...value}
                        />
                    )
                }
                <button onClick={deleteCar}>delete car</button>
            </div>
            <h1></h1>
            <div>
                <Counter/>
            </div>

        </div>
    );
}

export default App;