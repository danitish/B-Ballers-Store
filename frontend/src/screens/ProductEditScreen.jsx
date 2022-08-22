import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useFormik } from "formik";
import Joi from "joi";
import { useEffect } from "react";
import validateFormikWithJoi from "../utils/validateFormikWithJoi";
import {
  listProductDetails,
  updateProduct,
} from "../store/actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../store/constants/productConstants";
import httpService from "../services/httpService";
import { useState } from "react";
import { teams } from "../utils/teams";
import Meta from "../components/Meta";

const ProductEditScreen = () => {
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.productUpdate);

  useEffect(() => {
    if (successUpdate) {
      navigate("/admin/productlist");
      dispatch({ type: PRODUCT_UPDATE_RESET });
      return;
    }
    if (!product.name || product._id !== productId) {
      dispatch(listProductDetails(productId));
      return;
    }
    form.setValues({
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
      category: product.category,
      description: product.description,
      countInStock: product.countInStock,
      team: product.team,
      sizes: product.sizes.join(" "),
    });
  }, [product, productId, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await httpService.post("/uploads", formData, config);
      form.setValues({ ...form.values, image: data });
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      price: 0,
      image: "",
      brand: "",
      category: "",
      description: "",
      countInStock: 0,
      team: "",
      sizes: "",
    },
    validate: validateFormikWithJoi({
      name: Joi.string().required().min(2).max(255).label("Name"),
      price: Joi.number().required().min(1).allow(0).label("Price"),
      image: Joi.string().required().min(5).label("Image"),
      brand: Joi.string().required().min(3).label("Brand"),
      category: Joi.string().required().min(3).label("Category"),
      description: Joi.string().required().min(5).label("Description"),
      countInStock: Joi.number()
        .required()
        .min(1)
        .allow(0)
        .label("Count In Stock"),
      team: Joi.string().required().label("Team"),
      sizes: Joi.string().required().min(1).label("Sizes"),
    }),
    onSubmit(values) {
      values.sizes = [...values.sizes.split(" ").map((size) => size)];
      dispatch(
        updateProduct({
          _id: productId,
          ...values,
        })
      );
    },
  });
  return (
    <>
      <Meta title="B-Ballers - Product Edit" />
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>

      <FormContainer>
        <h1>Edit product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form className="my-4" noValidate onSubmit={form.handleSubmit}>
            <Input
              type="text"
              label="Name"
              error={form.touched.name && form.errors.name}
              {...form.getFieldProps("name")}
            />
            <Input
              type="number"
              label="Price"
              error={form.touched.price && form.errors.price}
              {...form.getFieldProps("price")}
            />
            <Input
              as="select"
              label="Team"
              {...form.getFieldProps("team")}
              error={form.touched.team && form.errors.team}
              options={teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.id}
                </option>
              ))}
            />
            <Input
              type="text"
              label="Sizes"
              placeholder="S | M | L | XL | XXL"
              {...form.getFieldProps("sizes")}
              error={form.touched.sizes && form.errors.sizes}
            />
            <Input
              type="text"
              label="Image"
              error={form.touched.image && form.errors.image}
              {...form.getFieldProps("image")}
              formFile={
                <Form.Control
                  type="file"
                  id="image-file"
                  label="Choose file"
                  onChange={uploadFileHandler}
                  className="my-1"
                ></Form.Control>
              }
              loader={uploading && <Loader />}
            />

            <Input
              type="text"
              label="Brand"
              error={form.touched.brand && form.errors.brand}
              {...form.getFieldProps("brand")}
            />
            <Input
              type="text"
              label="Category"
              error={form.touched.category && form.errors.category}
              {...form.getFieldProps("category")}
            />
            <Input
              type="text"
              label="Description"
              error={form.touched.description && form.errors.description}
              {...form.getFieldProps("description")}
            />
            <Input
              type="number"
              label="Count In Stock"
              error={form.touched.countInStock && form.errors.countInStock}
              {...form.getFieldProps("countInStock")}
            />
            <div className="my-4">
              <Button type="submit" variant="primary" disabled={!form.isValid}>
                Update
              </Button>
            </div>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
