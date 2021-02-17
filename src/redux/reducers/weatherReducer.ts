import { SET_LOADING } from "../types";
import { SET_ERROR } from "../types";
import { GET_WEATHER } from "../types";
import { WeatherState, WheatherAction } from "../types";

const initialState: WeatherState = {
  data: null,
  loading: true,
  error: ""
};

export default (state = initialState, action: WheatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: ""
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
