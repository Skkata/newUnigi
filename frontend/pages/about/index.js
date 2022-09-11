import Head from "next/head";
import { useSelector } from "react-redux";

export default function About() {
    const text = useSelector(state => state.language.text);
    
    return (
        <>
            <Head>
                <title>{text.head.title.about}</title>
            </Head>
            <div>
                About
            </div>
        </>
    )
}