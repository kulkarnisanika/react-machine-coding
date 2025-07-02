import React, { useEffect, useState } from 'react'
import './autocomplete.css'

const AutoComplete = () => {

    /**
     * Use https://dummyjson.com/recipes/search?q=essence for fetch
     * Feature implemented -
     * 1. Debouncing
     * 2. Caching - Using dynamic object.
     * 3. OnFocus and onBlur (Hide/show suggestions) - onBlur and onFocus events
     * 4. Onkeyup and down functionality
     *      1. created one state to track selected element
     *      2. Added event on input - 'onKeyDown'
     *      3. Listened it -- if KeyUp => tabIndex - 1
     *                        if KeyDown => tabIndex + 1
     *                        if Enter => set it as serachInputText
     *      4. In p tag , which is responsible to show each suggestion,    
     *          added logic like - if(tabIndex === currentIndex) => highlight that row with dynamic className
     */

    const [searchValue, setSearchValue] = useState('');
    const [fetchResult, setFetchResult] = useState([]);
    const [cacheResult, setCacheResult] = useState({});
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [tabIndex, setTabIndex] = useState(-1);

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchValue}`);
        const data = await response.json();
        setFetchResult(data?.recipes);
        setCacheResult(prev => ({
            ...prev,
            [searchValue]: data?.recipes
        }))
    }

    useEffect(() => {
        let timer;
        timer = setTimeout(()=>{
            if(!cacheResult[searchValue]){
                fetchData();
            }
            else{
                setFetchResult(cacheResult[searchValue]);
            }
        }, 900);

        return(()=>clearTimeout(timer) )

    }, [searchValue]);

    const handleKeyEvent = (e) => {
        if(e?.key === "ArrowDown"){
            setTabIndex((prev) => prev + 1);
        }
        else if(e?.key === "ArrowUp"){
            setTabIndex((prev) => prev - 1);
        }
        else if(e.key === "Enter"){
            setSearchValue(fetchResult[tabIndex]?.name);
            setShowSuggestions(false);
        }
        
    }
    return (
        <div className='main-container'>
            <div>
                <input onBlur={() => setShowSuggestions(false)}
                        onFocus={() => setShowSuggestions(true)} 
                        className="input-field" 
                        type="text" value={searchValue} 
                        onChange={(e) => setSearchValue(e?.target?.value)}
                        onKeyDown={handleKeyEvent}
                        placeholder='Enter recipe name...'>
                </input>
            </div>
            {
                (showSuggestions && fetchResult.length > 0) &&  
                (
                    <div className="text-suggestion" >
                       {
                        fetchResult?.map((recipe, index) => {
                            return(
                            <p className={index === tabIndex ? "highlight" : ""}
                                key={recipe.id}>
                                    {recipe.name}
                            </p>
                            )
                        })
                       }
                    </div>
                )
            }
        </div>
    )
}

export default AutoComplete