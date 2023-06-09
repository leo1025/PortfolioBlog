import 'bootstrap/dist/css/bootstrap.css'

import NavBar from '../components/navbar'

export default function RootLayout({ children, })
{
    return (
        <html>
            <body>
                <header>
                    <NavBar />
                </header>

                {children}

                <footer>
                    Copyright 2023
                </footer>
            </body>
        </html>
    );
}