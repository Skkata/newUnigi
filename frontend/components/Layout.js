import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return(
        <>
            <Head>
                {/* <link rel='preload' as='font' href='/assets/fonts/Gilroy-Light.otf'></link> */}
            </Head>
            <Header />
            <>{ children }</>
            <Footer />
        </>
    )
}