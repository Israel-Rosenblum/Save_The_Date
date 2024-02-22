import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import DataContext from './context/DataContext'
import { useState } from 'react'
export default function Layout() {
    //התאריכים שבחר המשתמש
    const [selectedDates, setSelectedDates] = useState([])
    //מערך של תוצאות האולמות
    const [searchResults, setSearchResults] = useState([])
    //מערך של סינון האולמות
    const [filterResults, setFilterResults] = useState([])
    console.log("🚀 ~ Layout ~ filterResults", filterResults)
    //מעדכן את מערך סינון האולמות למערך תוצאות האולמות
    useEffect(() => {
        setFilterResults(searchResults)
    }, [searchResults])

    return (
        <div>
            <Header />
            <DataContext.Provider value={{
                selectedDates, setSelectedDates,
                searchResults, setSearchResults,
                filterResults, setFilterResults
            }}>
                <Content />
            </DataContext.Provider>
            <Footer />
        </div>
    )
}
