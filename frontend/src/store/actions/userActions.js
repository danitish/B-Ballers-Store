import { httpService } from "../../services/httpService";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_PASSWORD_RESET_EMAIL_FAIL,
  USER_PASSWORD_RESET_EMAIL_REQUEST,
  USER_PASSWORD_RESET_EMAIL_SUCCESS,
  USER_PASSWORD_RESET_FAIL,
  USER_PASSWORD_RESET_REQUEST,
  USER_PASSWORD_RESET_SUCCESS,
} from "../constants/userConstants";
import { ORDER_MY_LIST_RESET } from "../constants/orderConstants";

const LS_KEYNAME = "userInfo";

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const { data } = await httpService.post("/api/users", {
        name,
        email,
        password,
      });

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const { data } = await httpService.post("/api/users/login", {
        email,
        password,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem(LS_KEYNAME, JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_MY_LIST_RESET });

  localStorage.removeItem(LS_KEYNAME);
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await httpService.get(`/api/users/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await httpService.put("/api/users/profile", user, config);

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem(LS_KEYNAME, JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const usersList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await httpService.get("/api/users", config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    await httpService.delete(`/api/users/${id}`, config);

    dispatch({
      type: USER_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await httpService.put(`/api/users/${user._id}`, user, config);

    dispatch({
      type: USER_UPDATE_SUCCESS,
    });

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetPasswordEmail = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_PASSWORD_RESET_EMAIL_REQUEST });

    await httpService.post("/api/password-reset", email);

    dispatch({
      type: USER_PASSWORD_RESET_EMAIL_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_PASSWORD_RESET_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetPassword = (password, userId, token) => async (dispatch) => {
  try {
    dispatch({ type: USER_PASSWORD_RESET_REQUEST });

    await httpService.post(`/api/password-reset/${userId}/${token}`, password);

    dispatch({
      type: USER_PASSWORD_RESET_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_PASSWORD_RESET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
