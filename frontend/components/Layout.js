import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import FormContacts from './FormContacts';
import PrivacyPolicy from './PrivacyPolicy';

export default function Layout({ children }) {
    const lang = useSelector(state => state.language.value);
    const text = useSelector(state => state.language.text);
    document.documentElement.lang = lang;
    return(
        <>
            <Head>
                <meta property='og:site_name' content={text.head.meta.og.site_name} />
                <meta property='og:description' content={text.head.meta.og.description}/>
                <meta property='og:url' content='http://unigi.ru'/>
                <meta name='description' content={text.head.meta.description}/>
            </Head>
            <Header />
            <FormContacts />
            {/* <PrivacyPolicy /> */}
            <>{ children }</>
            <Footer />
        </>
    )
}