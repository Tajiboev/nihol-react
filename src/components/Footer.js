import React from 'react'
import Container from './Container';

import '../sass/footer.sass'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-wrap">
                    <div className="copyright">
                        "Nihol" salomatli sihatgohi &copy; {new Date().getFullYear()}
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
