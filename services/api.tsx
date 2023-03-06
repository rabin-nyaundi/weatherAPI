import axios from "axios";

const dataEndpoint: string = `${process.env.APP_URL}/data/2.5/weather?`;


export async function getWeatherData(
  city: string,
  units: string,
  APIKey: string | undefined
) {
  const res = await axios({
    method: "get",
    url: dataEndpoint + `q=${city}&appid=${APIKey}&units=${units}`,
  });
  return res.data;
}
