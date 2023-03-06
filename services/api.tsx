import axios from "axios";

type Param = {
  city: string;
  code: string;
  country: string;
  APIKey: string;
  limit: Number;
  lat: Float64Array;
  lon: Float64Array;
};

const endpoint: string = "http://api.openweathermap.org/geo/1.0/direct?";
const endpoint2: string = " https://api.openweathermap.org/data/2.5/weather?";

//q={city name},{state code},{country code}&limit={limit}&appid={API key}

export async function getCityGeoCodes(url: string) {
  const res = await axios({
    method: "get",
    url: url,
  });
  return res.data;
}

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

export async function get(lat: Param, lon: Param, APIKey: string | undefined) {
  const res = await axios({
    method: "get",
    url: endpoint2 + `lat=${lat}&lon=${lon}&appid=${APIKey}`,
  });
  return res.data;
}
