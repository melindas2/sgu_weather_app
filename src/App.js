import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";

function App() {
    const [cityInput, setCityInput] = useState("");
    useEffect(()=>{
        console.log(cityInput);
    }, [cityInput]);
  return (
    <div class="container">
        <h1>Weather App</h1>
        <table class="centerContainer1">
            <tr>
                <td>
                <label id="cityLabel" for="cityNameTextField" style={{color: "black"}}>Enter a city:</label>
                </td>
            </tr>
            <tr>
                <td>
                    <input id="cityNameTextField"
                    type="text" 
                    class="form-control" 
                    name="cityName" onChange={(event)=>{
                        console.log(event.target.value);
                    }}
                    />
                    <button onClick={()=>{
                        alert("This function is not available yet")
                    }} id="submitbutton" class="tombol btn btn-primary btn-sm" value="Search" onclick="submitAction()">Search</button>
                </td>
            </tr>
        </table>
        <div class="spacer"></div>
        <div
                id="errorMessageComponent"
                style={{display: 'none', color: "#fc574e"}}
        ></div>
        <div>
        <div id="loader" style={{display: 'none'}} class="spinner spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        </div>
        <div id="weatherInfoComponent" style={{display: "none"}}>
        <table class="centerContainer2 table">
            <tr>
                <th>Weather</th> 
                <td id = "weatherField" class="td1">0</td>
            </tr>
            <tr>
                <th>Temperature</th> 
                <td id = "temperatureField" class="td1">0</td>
            </tr>
            <tr>
                <th>Feels like</th>
                <td id="feelsLikeField" class="td1">0</td>
            </tr>
            <tr>
                <th>Humidity</th>
                <td id="humidityField" class="td1">0</td>
            </tr>
            <tr>
                <th>Atmospheric Pressure</th>
                <td id="pressureField" class="td1">0</td>
            </tr>
        </table>
        </div>
    </div>
  );
}

export default App;
