import axios from "axios";

const BaseURL = "http://localhost:8000/api/v1";
export const RegistrationRequest = async (
  fullName,
  email,
  phoneNumber,
  password
) => {
  try {
    let reqBody = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    let URL = BaseURL + "/registration";
    let result = await axios.post(URL, reqBody);
    if (result.status === 201) {
      console.log("success");
      return result.data;
    }
  } catch (err) {
    console.error("Registration error:", err);
  }
};
