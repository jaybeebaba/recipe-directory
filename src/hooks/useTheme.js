import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const useTheme = () =>{
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error("useTheme can only be used in a context provider")
    }
    return context
}

export default useTheme