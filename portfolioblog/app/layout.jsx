import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import NavBar from '../components/navbar'

export default function RootLayout({ children, })
{
    return (
        <html>
            <body>
                <header>
                    <NavBar />
                </header>

                <div className='w-75 mx-auto'>
                    {children}

                    <footer>
                        Copyright 2023
                    </footer>
                </div>
            </body>
        </html>
    );
}