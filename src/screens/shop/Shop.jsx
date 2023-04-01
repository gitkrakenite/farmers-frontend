import React, { useEffect, useState } from "react";
import "./shop.css";
import {
  AiOutlineHome,
  AiOutlineMinus,
  AiOutlinePhone,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { dummyProducts } from "../../data";
import axios from "../../axios";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from "../../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";

const Shop = () => {
  const [heroImg, setHeroImg] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [allProducts, setAllProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [searchCategory, setSearchCategory] = useState("");

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { product, isSuccess, isLoading } = useSelector(
    (state) => state.products
  );

  const heroImage = [
    "https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2148852/pexels-photo-2148852.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3066025/pexels-photo-3066025.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/14348416/pexels-photo-14348416.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const changeHeroImg = () => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * heroImage.length);

    const item = heroImage[randomIndex];

    // set to state
    setHeroImg(item);
  };

  setTimeout(changeHeroImg, 50000);

  // console.log(heroImg);

  // setInterval(getRandomHeroImg(), 3000);

  const handleNav = () => {
    window.scrollTo(0, 1000);
    // alert("ff");
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get("/product");
      if (data) {
        setAllProducts(data);
        setLoading(false);
      }
      return;
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // search
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = allProducts?.filter(
          (item) =>
            item.productTitle
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            item.productCategory
              .toLowerCase()
              .includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  // create product states
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    if (
      !productTitle ||
      !productDescription ||
      !productPrice ||
      !productImage ||
      !productCategory
    ) {
      toast.error("All Details needed");
      return;
    } else {
      const productData = {
        productTitle,
        productDescription,
        productPrice,
        productImage,
        productCategory,
      };

      dispatch(createProduct(productData));
      setShowCreate(false);
      toast.success(`Created ${productTitle}`);
      fetchProducts();
      // handleCreateProduct(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      let token = user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete("/product/" + productId, config);

      toast.success(`Deleted ${productId}`);
      fetchProducts();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      {/* top strip */}
      <div className="w-full pl-[3em] pr-[3em] pt-[1em]  bg-green-900 text-zinc-100 hidden md:flex justify-between items-center">
        <div className="flex gap-[10px] text-lg items-center">
          <p>
            <AiOutlinePhone />
          </p>
          <p>+ 784 435322</p>
        </div>
        <div>
          <p style={{ fontWeight: 400 }}>
            Get the best deals from Farmers | Enjoy
          </p>
        </div>
        <div>
          <p className="text-zinc-300 text-lg">
            <a
              href="https://covid19.who.int/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
            >
              Covid Updates
            </a>
          </p>
        </div>
      </div>
      {/* search and logo */}
      <div className=" pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] mt-[8px] md:mt-[2em] flex justify-between">
        <div className=" flex-[0.2] hidden md:flex gap-2 ">
          <div>
            <AiOutlineShoppingCart className="text-3xl text-green-700" />
          </div>
          <div onClick={handleNav} className="cursor-pointer">
            <h2>
              Deals<span className="text-green-700">Drive</span>
            </h2>
          </div>
        </div>
        <div className="flex-[0.6] flex justify-center">
          <form className="flex items-center bg-slate-200 w-full flex-1 justify-between rounded-md p-[10px]">
            <div className="w-full flex-1">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full flex-1 bg-transparent  outline-none"
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
            <div>
              <AiOutlineSearch
                className="text-2xl text-zinc-500 cursor-pointer"
                title="search"
              />
            </div>
          </form>
        </div>
        <div className="flex-[0.2] flex justify-end items-center ">
          {showCreate ? (
            <AiOutlineMinus
              title="Hide"
              onClick={() => setShowCreate(false)}
              className="bg-zinc-900 text-zinc-100 p-[10px] text-5xl rounded-lg cursor-pointer"
            />
          ) : (
            <AiOutlinePlus
              title="Create"
              onClick={() => setShowCreate(true)}
              className="bg-zinc-900 text-zinc-100 p-[10px] text-5xl rounded-lg cursor-pointer"
            />
          )}
          <Link to="/landing">
            <div className="ml-[2em]">
              <AiOutlineHome className="text-3xl text-green-700" />
            </div>
          </Link>
        </div>
      </div>

      {/*create product  */}

      {showCreate && (
        <div className="pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] mt-[2em]">
          <h2>Create a product</h2>
          <form
            className="flex  flex-col 2xl:flex-row justify-between mt-3 gap-3"
            onSubmit={handleCreateProduct}
          >
            <input
              type="text"
              placeholder="Enter Title or name"
              className="p-[10px] rounded-md flex-[0.2] outline-none"
              style={{ border: "1px solid green" }}
              required
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              className="p-[10px] rounded-md flex-[0.2] outline-none"
              style={{ border: "1px solid green" }}
              required
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Price per product"
              className="p-[10px] rounded-md flex-[0.2] outline-none"
              style={{ border: "1px solid green" }}
              required
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter product url"
              className="p-[10px] rounded-md flex-[0.2] outline-none"
              style={{ border: "1px solid green" }}
              required
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
            <select
              className="p-[10px] rounded-md flex-[0.2] outline-none"
              style={{ border: "1px solid green" }}
              required
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="">Choose</option>
              <option value="animal">Animal & Products</option>
              <option value="fruits and vegetables">Fruits & Vegetables</option>
              <option value="cereals">Cereals</option>
              <option value="fertilizer">Fertilizer</option>
              <option value="equipment">Farm Equipment (Jembe)</option>
              <option value="seeds">Farm Seeds</option>
            </select>
            <button
              className="p-[10px] rounded-md flex-[0.2] outline-none bg-green-800 text-zinc-100"
              style={{ backgroundColor: "" }}
              onClick={handleCreateProduct}
            >
              Create
            </button>
          </form>
        </div>
      )}

      {/* hero section */}

      {/* categories */}
      <div className="pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] pt-[2em] pb-[2em]">
        <h2 className="mb-3">Explore our categories</h2>

        <div className="flex pb-3 lg:pb-0 lg:justify-evenly gap-[20px] overflow-y-scroll">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => fetchProducts()}
          >
            <span className="bg-green-700 text-white px-5 py-2 rounded-md">
              All
            </span>
          </div>

          <div
            className="cursor-pointer flex items-center gap-1"
            style={{
              border: "1px solid green",
              padding: "2px 10px",
              borderRadius: "10px",
            }}
            onClick={async () => {
              try {
                setLoading(true);
                let categoryToSearch = "animal";
                const productData = { productCategory: categoryToSearch };
                const { data } = await axios.post("/product/cat", productData);
                if (data) {
                  setAllProducts(data);
                  setLoading(false);
                  return;
                }
              } catch (error) {
                setLoading(false);
                console.log(error);
              }
            }}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className=" min-w-[50px] w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
            <div className="">
              <p className="pt-[20px] text-center text-lg">Animal Products</p>
            </div>
          </div>
          <div
            className="relative cursor-pointer flex items-center gap-1"
            style={{
              border: "1px solid green",
              padding: "2px 10px",
              borderRadius: "10px",
            }}
            onClick={async () => {
              try {
                setLoading(true);
                let categoryToSearch = "fruits and vegetables";
                const productData = { productCategory: categoryToSearch };
                const { data } = await axios.post("/product/cat", productData);
                if (data) {
                  setAllProducts(data);
                  setLoading(false);
                  return;
                }
              } catch (error) {
                setLoading(false);
                console.log(error);
              }
            }}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="  min-w-[50px] w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
            <div className="">
              <p className="pt-[20px] text-center text-lg">
                Fruits and Vegetables
              </p>
            </div>
          </div>
          <div
            className="relative cursor-pointer flex items-center gap-1"
            style={{
              border: "1px solid green",
              padding: "2px 10px",
              borderRadius: "10px",
            }}
            onClick={async () => {
              try {
                setLoading(true);
                let categoryToSearch = "cereals";
                const productData = { productCategory: categoryToSearch };
                const { data } = await axios.post("/product/cat", productData);
                if (data) {
                  setAllProducts(data);
                  setLoading(false);
                  return;
                }
              } catch (error) {
                setLoading(false);
                console.log(error);
              }
            }}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className=" min-w-[50px] w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>

            <div className="">
              <p className="pt-[20px] text-center text-lg">Cereals</p>
            </div>
          </div>
          <div
            className="relative cursor-pointer flex items-center gap-1"
            style={{
              border: "1px solid green",
              padding: "2px 10px",
              borderRadius: "10px",
            }}
            onClick={async () => {
              try {
                setLoading(true);
                let categoryToSearch = "fertilizer";
                const productData = { productCategory: categoryToSearch };
                const { data } = await axios.post("/product/cat", productData);
                if (data) {
                  setAllProducts(data);
                  setLoading(false);
                  return;
                }
              } catch (error) {
                setLoading(false);
                console.log(error);
              }
            }}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/3696170/pexels-photo-3696170.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className=" min-w-[50px] w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>

            <div className="">
              <p className="pt-[20px] text-center text-lg">Fertilizer</p>
            </div>
          </div>
          <div
            className="relative cursor-pointer flex items-center gap-1"
            style={{
              border: "1px solid green",
              padding: "2px 10px",
              borderRadius: "10px",
            }}
            onClick={async () => {
              try {
                setLoading(true);
                let categoryToSearch = "equipment";
                const productData = { productCategory: categoryToSearch };
                const { data } = await axios.post("/product/cat", productData);
                if (data) {
                  setAllProducts(data);
                  setLoading(false);
                  return;
                }
              } catch (error) {
                setLoading(false);
                console.log(error);
              }
            }}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className=" min-w-[50px] w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>

            <div className="">
              <p className="pt-[20px] text-center text-lg">Farm Tools</p>
            </div>
          </div>
          <div
            className="relative cursor-pointer flex items-center gap-1"
            style={{
              border: "1px solid green",
              padding: "2px 10px",
              borderRadius: "10px",
            }}
            onClick={async () => {
              try {
                setLoading(true);
                let categoryToSearch = "seeds";
                const productData = { productCategory: categoryToSearch };
                const { data } = await axios.post("/product/cat", productData);
                if (data) {
                  setAllProducts(data);
                  setLoading(false);
                  return;
                }
              } catch (error) {
                setLoading(false);
                console.log(error);
              }
            }}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/768090/pexels-photo-768090.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="  min-w-[50px] w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>

            <div className="a">
              <p className="pt-[20px] text-center text-lg">Seeds</p>
            </div>
          </div>
        </div>
      </div>

      {/* products */}

      <div
        className="pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] pt-[2em] pb-[2em] h-[90vh] overflow-y-scroll hide-scrollbar"
        id="productS"
      >
        {searchText && (
          <h2 className="font-medium text-[#666e75] text-xl mb-3">
            Showing Resuls for{" "}
            <span className="text-[#222328]">{searchText}</span>:
          </h2>
        )}

        {loading ? (
          <div>
            <Spinner message="Fetching Products" />
          </div>
        ) : (
          <>
            <p>All Products</p>

            {searchText ? (
              <div className="productWrapper">
                {searchedResults?.map((item) => (
                  <div key={item._id} className="productItem">
                    <img
                      src={item.productImage}
                      alt=""
                      style={{ borderRadius: "10px" }}
                      className="h-[300px] w-[100%] object-cover"
                    />

                    <div className="flex justify-between items-center text-zinc-900 mt-3 px-3">
                      <p>{item.productTitle}</p>
                      <p>Ksh. {item.productPrice}</p>
                    </div>
                    <p className="text-zinc-500 px-3">
                      {item.productDescription}
                    </p>
                    <div className="flex justify-between items-center ">
                      <p className="text-zinc-500 px-3">
                        <a href={`mailto:${item.useremail}`}>
                          Click to email me
                        </a>
                      </p>
                      <p className="text-zinc-500 px-3">
                        On <span className="text-blue-600">Sema</span> at{" "}
                        <span className="text-blue-600">{item.username}</span>{" "}
                      </p>

                      {user?.email === item.useremail && (
                        <p
                          className="bg-red-500 text-white p-[5px] text-lg cursor-pointer"
                          onClick={() => handleDeleteProduct(item._id)}
                        >
                          <BsTrash />
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="productWrapper">
                {allProducts?.map((item) => (
                  <div key={item._id} className="productItem">
                    <img
                      src={item.productImage}
                      alt=""
                      style={{ borderRadius: "10px" }}
                      className="h-[300px] w-[100%] object-cover"
                    />

                    <div className="flex justify-between items-center text-zinc-900 mt-3 px-3">
                      <p>{item.productTitle}</p>
                      <p>Ksh. {item.productPrice}</p>
                    </div>
                    <p className="text-zinc-500 px-3">
                      {item.productDescription}
                    </p>
                    <div className="flex justify-between items-center ">
                      <p className="text-zinc-500 px-3">
                        <a href={`mailto:${item.useremail}`}>
                          Click to email me
                        </a>
                      </p>
                      <p className="text-zinc-500 px-3">
                        On <span className="text-blue-600">Sema</span> at{" "}
                        <span className="text-blue-600">{item.username}</span>{" "}
                      </p>
                      {user?.email === item.useremail && (
                        <p
                          className="bg-red-500 text-white p-[5px] text-lg cursor-pointer"
                          onClick={() => handleDeleteProduct(item._id)}
                        >
                          <BsTrash />
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* footer */}
      <div className="flex justify-center bg-green-800 text-zinc-100 p-3">
        Product of Mkulima &copy; 2023 All rights Reserved
      </div>
    </div>
  );
};

export default Shop;
