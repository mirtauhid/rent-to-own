import Head from 'next/head';
import Header from "./Header";

const HomeLayout = ({children}) => {
    return (
        <>
            <Head>
                <title>Rent-to-Own Realty - Explore available rent-to-owns in your area</title>
                <meta name="description" content="Why wait? With Rent-to-Own Realty, you get the ability to buy your dream home today." />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" type="image/jpg" href="/images/fav.jpg"/>
                <link rel="shortcut icon" type="image/x-icon" href="/images/fav.jpg" />
                <link rel="apple-touch-icon-precomposed" type="image/png" href="/images/fav.jpg" />

            </Head>
            <Header />
            {
                children
            }
        </>
    )
}

export default HomeLayout
