import Navbar from './Navbar'
import Head from 'next/head'

const Layout = props => (

    <div>
        <Head>
            <title>Next.js Site</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css"></link>
        </Head>
        <Navbar />
        {props.children}
    </div>

)

export default Layout;