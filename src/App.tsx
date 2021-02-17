import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux";

import Search from "./components/Search";
import Weather from "./components/Weather";
import Alert from "./components/Alert";
import { setAlert } from "./redux/actions/alertAction";
import { setError } from "./redux/actions/weatherAction";

const App: FC = () => {
  const dispacth = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const error = useSelector((state: RootState) => state.weather.error);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const alertMSG = useSelector((state: RootState) => state.alert.message);
console.log(weatherData);

console.log(process.env);


  return (

    <div>
      <Search title="Enter city name  and press search button" />
      {loading ? (
        <h2 className="is-size-3 py-2">Loading...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}

      {alertMSG && (
        <Alert message={alertMSG} onClose={() => dispacth(setAlert(""))} />
      )}

      {error && <Alert message={error} onClose={() => dispacth(setError())} />}
    </div>
  );
};

export default App;
