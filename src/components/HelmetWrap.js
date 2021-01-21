import React from 'react'
import {Helmet} from "react-helmet";
import { useLocale } from '../contexts/LocaleContext'

const HelmetWrap = () => {
    const { locale } = useLocale()
    return (
        <Helmet htmlAttributes={{ lang : locale }}>
            <title>
                { locale === 'uz' ? "«Nihol» salomatlik sihatgohi" : "Оздоровительный санаторий «Нихол»" }
            </title>
        </Helmet>
    )
}

export default HelmetWrap
