import { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { ordersList } from "../store/actions/orderActions";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";

const OrderListScreen = () => {
  const { pageNumber = 1 } = useParams();
  const dispatch = useDispatch();
  const { loading, error, orders, page, pages } = useSelector(
    (state) => state.orderList
  );

  useEffect(() => {
    dispatch(ordersList(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Meta title="B-Ballers - Order List" />
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    <span style={{ marginLeft: 10 }}>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </span>
                  </td>
                  <td>
                    <span style={{ marginLeft: 10 }}>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </span>
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant="light" className="btn-sm">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate page={page} pages={pages} isAdmin isOrder />
        </>
      )}
    </>
  );
};

export default OrderListScreen;
