import BaseUrl from "@/Config";
const fetchApi = async () => {
  try {
    const response = await fetch(BaseUrl);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

const productDetailsApi = async (url) => {
  try {
    const response = await fetch(`${BaseUrl}${url}`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};
export default { fetchApi, productDetailsApi };
