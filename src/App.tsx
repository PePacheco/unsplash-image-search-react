import { useCallback, useEffect, useState } from 'react'

import { Nav } from './components/Nav/Nav'
import { ImageList } from './components/ImagesList/ImageList'
import { Image } from './components/ImagesList/ImageList'

function App() {
    const [query, setQuery] = useState('dog')
    const [data, setData] = useState<Image[]>([])

    const handleRequest = useCallback(async () => {
        if (query) {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${query}`, {
                method: 'GET',
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}}`
                },
            })
            return response.json()
        }
    }, [query])

    useEffect(() => {
        handleRequest().then((data) => {
            setData(data.results.map((result: any) => ({id: result.id, url:result.urls.regular}) as Image))
        })
    }, [handleRequest])

    return (
        <>
            <Nav onSearch={setQuery} />
            <ImageList images={data} />
        </>
    )
}

export default App
