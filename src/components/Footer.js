import React from 'react'
import { useLocale } from '../contexts/LocaleContext'
import Container from './Container';

import '../sass/footer.sass'

const Footer = () => {
    const { locale } = useLocale()
    return (
        <footer className="footer">
            <Container>
                <div className="footer-wrap">
                    <div className="copyright">
                        { locale === "uz" &&  "«Nihol» salomatlik sihatgohi "}
                        { locale === "ru" &&  "Оздоровительный санаторий «Нихол» "}
                        &copy;
                        {' ' + new Date().getFullYear()}
                    </div>
                    <div className="developer">
                        This website was developed by <a href="mailto:mukhammadjon.tajiboev@gmail.com">Mukhammadjon Tajiboev</a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
