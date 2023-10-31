import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import useGetWeather from './assets/hooks/useGetWeather';

function App() {
    const [cityInput, setCityInput] = useState("");
    const { data: weatherData, getWeather} = useGetWeather();

    // listens on changes in city and then performs the function as intended
    // this hook depends on the deps variable to rin the func
    useEffect(()=>{
        console.log(cityInput);
    }, [cityInput]);
    
    // this hook runs on a n empty arrayaed dep
    // this hook will only run once the page is loaded
    useEffect(()=>{
        console.log("This page is loaded");
    }, []);

    // this hook will only run once the page is updated
    useEffect(()=>{
        console.log("Everything else is updated");
    });

    const onSubmitButtonClicked = () =>{
        getWeather(cityInput);
    };

    useEffect(()=>{
        console.log(weatherData);
    },[weatherData]); 

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
                    name="cityName" 
                    value={cityInput}
                    onChange={(event)=>{
                        setCityInput(event.target.value);
                    }}
                    />
                    <button onClick={onSubmitButtonClicked}
                     id="submitbutton" type='submit' class="tombol btn btn-primary btn-sm" value="Search" onclick="submitAction()">Search</button>
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
        <div id="weatherInfoComponent" style={{display: "flex"}}>
        <table class="centerContainer2 table">
            <tr>
                <th>Weather</th> 
                <td id = "weatherField" class="td1"></td>
            </tr>
            <tr>
                <th>Temperature</th> 
                <td id = "temperatureField" class="td1">{weatherData?.main?.temp ?? "-"}</td>
            </tr>
            <tr>
                <th>Feels like</th>
                <td id="feelsLikeField" class="td1">{weatherData?.main?.temp ?? "-"}</td>
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
