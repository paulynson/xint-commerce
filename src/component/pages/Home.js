import { useState, useEffect } from "react";
import axios from "axios";
import "./products/products.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "./../reduxfiles/actions";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const dispatch = useDispatch();

  // addProduct function that dispatch the product to the cart
  const addProduct = (product) => {
    Swal.fire({
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
      timer: 1000,
    });
    dispatch(addCart(product));
  };

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url = "https://fakestoreapi.com/products?limit=8";
      const res = await axios(url);
      setProducts(res.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="">
        <div className="relative flex justify-center items-center text-center ">
          <img
            src="/images/e4.jpg"
            alt="pix"
            className="lg:h-[500px]  object-cover h-[300px] w-full"
          />
          <p className="absolute text-white font-bold lg:text-6xl text-4xl max-w-7xl shadow-black drop-shadow-xl px-6">
            Create Your Individuality
          </p>
        </div>
      </div>
      <div className="p-10">
        {" "}
        <h3 className="font-bold py-3 text-3xl">New Products</h3>
        <hr />
      </div>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <>
        {loading && (
          <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 gap-x-5">
            <Skeleton
              height={400}
              baseColor="white"
              className="shadow-lg animate-pulse"
            />
            <Skeleton
              height={400}
              baseColor="white"
              className="shadow-lg animate-pulse"
            />
            <Skeleton
              height={400}
              baseColor="white"
              className="shadow-lg animate-pulse"
            />
            <Skeleton
              height={400}
              baseColor="white"
              className="shadow-lg animate-pulse"
            />
          </div>
        )}
      </>
      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 gap-x-5 ">
        {products &&
          products
            ?.slice(0)
            .reverse()
            .map((item) => (
              <div
                key={item.id}
                className="text-center justify-center box-h p-3 shadow-md relative bg-white rounded-sm"
              >
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.title} className="img-box" />
                  <div className="py-6">
                    <p className="my-2 text-xs">{item.title.slice(0, 24)}</p>
                    <p className="text-purple-700 font-bold text-2xl">
                      ₦{item.price}
                    </p>
                  </div>
                </Link>
                <button
                  className="w-full bg-green-400 hover:bg-green-600 px-4 py-2 text-white absolute bottom-0 left-0 shadow-lg"
                  onClick={() => addProduct(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
      </section>
      {/* </Suspense> */}
      <section>
        <div className="mt-6">
          <div className="relative flex justify-center items-center text-center">
            <img
              src="/images/e2.jpg"
              alt="pix"
              className="lg:h-[800px] object-cover w-full"
            />
            <p className="absolute text-yellow-400 font-bold text-6xl drop-shadow-lg shadow-black max-w-7xl">
              Building your Desired Store
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="p-10">
          {" "}
          <h3 className="font-bold py-3 text-3xl">Special Products</h3>
          <hr />
        </div>
        {/* <Suspense fallback={<p>Loading...</p>}> */}
        <>
          {loading && (
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 gap-x-5">
              <Skeleton height={400} baseColor="white" className="shadow-lg" />
              <Skeleton height={400} baseColor="white" className="shadow-lg" />
              <Skeleton height={400} baseColor="white" className="shadow-lg" />
              <Skeleton height={400} baseColor="white" className="shadow-lg" />
            </div>
          )}
        </>
        <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 gap-x-5 ">
          {products &&
            products?.map((item) => (
              <div
                key={item.id}
                className="text-center justify-center box-h p-3 shadow-md relative bg-white"
              >
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.title} className="img-box" />
                  <div className="py-6">
                    <p className="my-2 text-xs">{item.title.slice(0, 24)}</p>
                    <p className="text-purple-700 font-bold text-lg">
                      ₦{item.price}
                    </p>
                  </div>
                </Link>
                <button
                  className="w-full bg-green-400 hover:bg-green-600 px-4 py-2 text-white absolute bottom-0 left-0 shadow-lg"
                  onClick={() => addProduct(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </section>
        {/* </Suspense> */}
      </section>
      <section>
        <div className="p-10">
          {" "}
          <h3 className="font-bold py-3 text-3xl">Our Latest Blogs</h3>
          <hr />
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-8 gap-x-3 my-6 p-10">
          <img
            src="/images/e1.jpg"
            alt="pix"
            className="lg:h-64 h-52 w-full border-yellow-400 border hover:cursor-pointer"
          />
          <img
            src="/images/e2.jpg"
            alt="pix"
            className="lg:h-64 h-52 w-full border-yellow-400 border hover:cursor-pointer"
          />
          <img
            src="/images/e3.jpg"
            alt="pix"
            className="lg:h-64 h-52 w-full border-yellow-400 border hover:cursor-pointer"
          />
          <img
            src="/images/e4.jpg"
            alt="pix"
            className="lg:h-64 h-52 w-full border-yellow-400 border hover:cursor-pointer"
          />
        </div>
      </section>
      {/* News Letter Section */}
      <section className="p-10">
        <div className="flex justify-center">
          <div className="">
            {" "}
            <h3 className="font-bold py-3 text-3xl">
              Subscribe to our Newsletter
            </h3>
            <hr />
          </div>
        </div>
        <div className="my-3">
          <form className="flex flex-col lg:flex lg:flex-row justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="px-6 py-3"
            />
            <input
              type="submit"
              value="Subscribe"
              className="uppercase px-6 py-3 bg-green-600 text-white font-bold cursor-pointer hover:bg-green-800"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
