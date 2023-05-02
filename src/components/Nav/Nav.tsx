import './Nav.css'
import { useDebounce } from '../../hooks/useDebouce'
import { useEffect, useState } from 'react'

type NavProps = {
    onSearch: (search: string) => void
}

export const Nav = ({ onSearch } : NavProps) => {
    const [searchTerm, ] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(() => {
        if (debouncedSearchTerm) {
            onSearch(debouncedSearchTerm)
        }
    }, [debouncedSearchTerm, onSearch])

    return (
        <nav className='nav'>
            <input type="text" className='search-input' onChange={(e) => onSearch(e.target.value)} placeholder='search' />
        </nav>
    )
}