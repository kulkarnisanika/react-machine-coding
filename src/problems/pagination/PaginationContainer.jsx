import { useEffect, useState } from "react";
import "./pagination.css";
import Card from "./Card";

const PaginationContainer = () => {


    /**
     * Total time invested - 50 min
     * find how many cards per page to be dipalyed. currently CARDS_PER_PAGE = 6
     * Find Total pages -> productResponse.length/CARDS_PER_PAGE
     * Create state for currentPage and set it to 0 or 1
     * Create offeset and limit 
     *      offest -> start -> CURRENT_PAGE * CARDS_PER_PAGE
     *      end  -> start + CARDS_PER_PAGE
     * Use Array.slice to abstract content between start and end.
     */

    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProduts = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://dummyjson.com/products?limit=100');
            const products = await response.json();
            console.log("products", products);
            setProductList(products?.products);
        }
        catch(e) {
            console.log("error", e?.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProduts();
    }, []);

    const handlePagination = (page) => {
        setCurrentPage(page);
    }

    const CARDS_PER_PAGE = 6;
    const TOTAL_PAGES = Math.ceil(productList.length / CARDS_PER_PAGE);
    const start = CARDS_PER_PAGE * currentPage;
    const end = start + CARDS_PER_PAGE;


    return (
        <div className="main-container">
            {
                isLoading ? (<h1>Loading...</h1>) :
                    (<>
                        <div className="card-container">
                            {
                                productList?.slice(start, end)?.map((product) => {
                                    const { title, thumbnail, id } = product
                                    return (
                                        <Card key={id} title={title} imgSrc={thumbnail} />
                                    )
                                })
                            }
                        </div>
                        <div className="pagination-container">
                            <button disabled={currentPage === 0} onClick={() => setCurrentPage((prev) => prev - 1)}>⬅️</button>
                            {
                                [...Array(TOTAL_PAGES).keys()]?.map((page) => {
                                    return <div
                                        key={page}
                                        className={`pagination ${currentPage === page ? "current-page" : ""}`}
                                        onClick={() => handlePagination(page)}>
                                        {page}
                                    </div>
                                })

                            }
                            <button disabled={currentPage === TOTAL_PAGES - 1} onClick={() => setCurrentPage((prev) => prev + 1)}>➡️</button>
                        </div>
                    </>)
            }
        </div>
    )
}

export default PaginationContainer