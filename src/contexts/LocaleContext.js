import React, { createContext, useContext, useState } from 'react'
import Translation from '../locales/translation.json'

const LocaleContext = createContext(null)

export function useLocale() {
    return useContext(LocaleContext)
}

export function LocaleProvider({children}) {
    const [locale, setLocale] = useState('uz')

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