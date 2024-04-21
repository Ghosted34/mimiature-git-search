import { AxiosError } from "axios";
const delay = (ms) => new Promise((res) => setTimeout(res(), ms));
const retry = async (
  callback,
  maxRetries,
  delayFn = (attempt) => 1000 * attempt
) => {
  let attempts = 0;

  while (attempts <= maxRetries) {
    try {
      return await callback();
    } catch (error) {
      console.error(
        `Attempt ${attempts + 1}: Error during retry`,
        error.message,
        error.name
      );
      if (error instanceof AxiosError && error.response) {
        console.error("API Error:", error.response.data);
      } else {
        console.error("Error:", error);
      }
      attempts++;
      if (attempts >= maxRetries) {
        throw error.response.data;
      }
      await delay(delayFn(attempts));
    }
  }
};

export default retry;
