import "./SearchBarDebounce.css"
import { useEffect, useState } from "react";

const SearchBarDebounce = () => {

    const [searchInput, setSearchInput] = useState('');
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            setIsLoading(true);
            const raw = await fetch(`https://dummyjson.com/users/search?q=${searchInput}`);
            if (!raw.ok) throw new Error("Something went wrong");
            const userData = await raw.json();
            setUserData(userData?.users);
        }
        catch (e) {
            console.error(e.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (!searchInput?.trim()) return;
        let timer = setTimeout(() => {
            fetchUsers()
        }, 1000);

        return () => clearTimeout(timer);

    }, [searchInput]);

    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    return (



        <main className="main-container">
            <header className="search-bar-container">
                <form style={{ width: "40%" }} onSubmit={(e) => e.preventDefault()}>
                    <input className="search-bar" value={searchInput} type="text" onChange={handleInputChange} placeholder="Enter User Name"></input>
                </form>
            </header>
            <section className="result-box">
                {
                    !!isLoading ? (
                        <h1>Fetching User Data....</h1>
                    ) : searchInput.trim() && userData.length === 0 ? (
                        <h1>No data found</h1>
                    ) : (
                        userData.map((user) => {
                            const { id, firstName, lastName, email, phone } = user;
                            return (
                                <article key={id} style={{ display: "flex", flexDirection: "column", fontFamily: "serif" }}>
                                    <div style={{ border: "solid black 1px", padding: "24px" }}>
                                        <h5>{id}</h5>
                                        <h5>{firstName}</h5>
                                        <h5>{lastName}</h5>
                                        <h5>{phone}</h5>
                                        <h5>{email}</h5>
                                    </div>
                                </article>
                            );
                        })
                    )
                }

            </section>
        </main>

    )
}

export default SearchBarDebounce;