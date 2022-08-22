import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_MY_LIST_FAIL,
  ORDER_MY_LIST_REQUEST,
  ORDER_MY_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
} from "../constants/orderConstants";
import { httpService } from "../../services/httpService";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });

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

    const { data } = await httpService.post("/orders", order, config);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

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

    const { data } = await httpService.get(`/orders/${id}`, config);

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_PAY_REQUEST });

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

      const { data } = await httpService.put(
        `/orders/${orderId}/pay`,
        paymentResult,
        config
      );

      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_PAY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELIVER_REQUEST });

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

    await httpService.put(`/orders/${order._id}/deliver`, {}, config);

    dispatch({
      type: ORDER_DELIVER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_MY_LIST_REQUEST });

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

    const { data } = await httpService.get("/orders/myorders", config);

    dispatch({
      type: ORDER_MY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_MY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ordersList =
  (pageNumber = "") =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_LIST_REQUEST });

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

      const { data } = await httpService.get(
        `/orders?pageNumber=${pageNumber}`,
        config
      );

      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
