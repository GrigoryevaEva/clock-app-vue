import { api } from "../baseApi";
import { IDate } from "./types";

const url = 'http://ipwho.is/'

export const getDate = async (): Promise<IDate>  => {
  const data = await api.get(url)
  return {
    countryCode: data.country_code,
    city: data.city,
    timezone: data.timezone.id,
    abbrTZ: data.timezone.abbr,
  }
}