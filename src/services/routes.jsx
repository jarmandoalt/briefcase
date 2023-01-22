import Axios from "axios";

const baseUrl = "https://server-who-is-this-pokmeon.onrender.com/v1";
//const baseUrl = "http://localhost:5052/v1";

export async function getNumberUser() {
  try {
    const response = await Axios({
      url: `${baseUrl}/newUser`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}