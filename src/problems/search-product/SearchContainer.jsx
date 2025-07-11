import React, { useEffect, useState } from 'react'

export const SearchContainer = () => {

    const [productList, setProductList] = useState([]);
    const [searchResult, setSearchResult] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) throw new Error("Something went wrong")
            const result = await response.json();
            setProductList(result?.products);
            setSearchResult(result?.products);
        }
        catch (e) {
            console.error(e);
        }
        finally {
            setIsLoading(false)
        }
    }

    const handleSearch = () => {
        const searchedData = productList?.filter((product) => {
            if (product?.title?.toLowerCase().includes(searchInput.toLocaleLowerCase())) {
                return product;
            }

        })
        setSearchResult(searchedData);
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div style={{ margin: "10px", gap: "12px", display: "flex" }}>
                <input type='text'
                    value={searchInput}
                    placeholder='Enter search input'
                    onChange={(e) => setSearchInput(e?.target?.value)}
                    style={{ width: "400px", height: "20px", padding: "12px", borderRadius: "4px" }}>
                </input>
                <button
                    onClick={handleSearch}
                    style={{ padding: "12px", borderRadius: "4px", width: "80px", textAlign: "center" }}>
                    Search
                </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", margin: "10px", padding: "12px", border: "solid gray 2px", width: "auto" }}>
                {
                    isLoading ? <h1>Loading...</h1> :
                        (searchResult.length > 0) ?
                            searchResult?.map((product) => {
                                return (
                                    <div style={{ padding: "10px" }} key={product?.id}>
                                        {product?.title}
                                    </div>
                                )
                            }) :
                            <h1>No items found</h1>
                }
            </div>
        </div>
    )
}
