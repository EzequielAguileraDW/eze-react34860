import { useEffect } from 'react'

export const useTitle = (title, dependecies) => {
    if(!Array.isArray(dependecies)) {
        console.error('No se paso un array como dependecias al useTitle')
        dependecies = []
    }
    
    useEffect(() => {
        document.title = title 
    }, dependecies) //eslint-disable-line
}