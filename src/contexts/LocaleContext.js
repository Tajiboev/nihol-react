import React, { createContext, useContext, useState, useEffect } from 'react'
import Translation from '../locales/translation.json'

const LocaleContext = createContext(null)

export function useLocale() {
    return useContext(LocaleContext)
}

export function LocaleProvider({children}) {
    const [locale, setLocale] = useState('uz')

    useEffect(() => {
        if (navigator.languages.includes('ru')){
            setLocale('ru')
        }
    }, [])

    const value = {
        locale,
        setLocale,
        Translation
    }

    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    )
}