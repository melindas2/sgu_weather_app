import { useCallback, useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import axios from "axios";

const fetchCityWeather = (city) => {
  const API_KEY = "596d72d145a425eab98ef6c47fea88b7";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return axios.get(URL);
};

const useGetWeather = () => {
  const { state, updateState } = useContext(GlobalContext);
  const { weather: { data, isLoading = false } = {} } = state;

  const getWeather = useCallback(
    (city) => {
      updateState({
        isLoading: true,
      });

      return fetchCityWeather(city)
        .then((res) => {
          const { data } = res;

          updateState({
            weather: {
              data,
              isLoading: false,
            },
          });
        })
        .catch((error) => {
          updateState({
            weather: {
              error,
              isLoading: false,
            },
          });
        });
    },
    [updateState]
  );

  return {
    data,
    getWeather,
    isLoading,
  };
};

export default useGetWeather;