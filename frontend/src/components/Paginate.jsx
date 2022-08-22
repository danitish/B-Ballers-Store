import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({
  pages,
  page,
  isAdmin = false,
  keyword = "",
  isOrder = false,
}) => {
  return (
    pages > 1 && (
      <Pagination className="d-flex justify-content-center">
        {[...Array(pages).keys()].map((pageNum) => (
          <LinkContainer
            className="my-4"
            style={{ fontSize: 15 }}
            key={pageNum + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${pageNum + 1}`
                  : `/page/${pageNum + 1}`
                : !isOrder
                ? `/admin/productlist/${pageNum + 1}`
                : `/admin/orderlist/${pageNum + 1}`
            }
          >
            <Pagination.Item active={pageNum + 1 === page}>
              {pageNum + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
