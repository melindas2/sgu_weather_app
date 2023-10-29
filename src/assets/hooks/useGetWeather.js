import { useCallback, useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const fetchCityWeather = (city) => {
  const API_KEY = "596d72d145a425eab98ef6c47fea88b7";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
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
        .then((result) => {
          const { result } = res;

          updateState({
            weather: {
              data: result,
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