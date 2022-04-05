import { AUTH } from "../consants/actionTypes.js";
import * as api from "../api/index";
import { useNavigate } from "react-router-dom";

export const signin = (formData, history) => async (dispatch) => {
  const navigate = useNavigate();

  try {
    // login the user and nav to home page
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  const navigate = useNavigate();

  try {
    // login the user and nav to home page
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
