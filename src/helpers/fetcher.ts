import axios, { AxiosRequestConfig } from "axios";

export const fetcher = async <T>(url: string) => {
  const offset = (new Date().getTimezoneOffset() * -1) / 60;
  const config: AxiosRequestConfig = {
    headers: {
      "X-Timezone-Offset": offset,
    },
  };
  const response = await axios.get<T>(url, config);
  return response.data;
};
