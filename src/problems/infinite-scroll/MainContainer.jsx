import { useState, useEffect, useRef } from "react"
import CardList from "./CardList";
import axios from "axios";
const MainContainer = () => {


    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);
    const throttleRef = useRef(null);
    const fetchProducts = async () => {
        try {
            const productData = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=12`);
            setProducts([...products, ...productData?.data]);
        }
        catch (e) {
            console.log("something went wrong", e.message)
        }
    }


    useEffect(() => {
        fetchProducts();

    }, [page]);

    const handleThrottle = (cb, delay) => {
        if (throttleRef.current) return;

        throttleRef.current = setTimeout(() => {
            cb();
            throttleRef.current = null;
        }, delay);
    };

    const handleInfiniteScroll = () => {
        const threshold = 700;
        const { clientHeight, scrollTop, scrollHeight } = window.document.documentElement;
        if (scrollHeight - (clientHeight + scrollTop) < threshold) {

            handleThrottle(() => setPage((prev) => prev + 1), 1000);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return (() => window.removeEventListener("scroll", handleInfiniteScroll))
    }, [])




    return (
        <div className="main-container">
            <CardList productList={products} />
        </div>

    )
}

export default MainContainer;