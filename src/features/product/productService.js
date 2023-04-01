import axios from "../../axios";

// get all products
const getAllProducts = async () => {
  const response = await axios.get(`/product`);
  return response.data;
};

// create product
const createProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/product/", productData, config);
  return response.data;
};

// delete my report
const deleteProduct = async (productId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete("/product" + productId, config);
  return response.data;
};

const productService = {
  createProduct,
  deleteProduct,
  getAllProducts,
};

export default productService;
