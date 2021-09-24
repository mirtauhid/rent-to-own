import HomeLayout from "../../Layouts/HomeLayout";

const AboutUs = () => {
    return (
        <HomeLayout>
            <div className="container mx-auto px-4 py-12">
                <div className="my-6">
                    <h2 className="text-2xl font-medium mb-4">About us</h2>
                    <hr />
                    <p className="mt-8">Home Partners of America is committed to making homeownership a reality for more people. The program provides a clear path to homeownership. Our process is easy, transparent, and built on a foundation of choice and flexibility. Home Partners is helping more people get into great homes, in neighborhoods they love, with the opportunity to build a more secure financial future.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-medium mb-4">The Challenge</h2>
                    <p>Many people want the benefits of living in a single family home. However, whether they're a first-time homebuyer who's cautious about making such a large financial investment, someone who has recently relocated and is unsure of which neighborhood to live in, or someone who is creditworthy but cannot currently obtain a mortgage, they hope to one day buy a home but aren't ready now.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-medium mb-4">Home Partners Solution</h2>
                    <p>Home Partners provides the opportunity for people to move into a great home and community today that otherwise may not be available in the rental market.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-medium mb-4">How It Works</h2>
                    <p className="mb-4">Qualified prospective residents work with licensed real estate agents of their choosing to select the right home for them. They can choose from a wide variety of properties in communities that Home Partners serves that fit their budget and meet Home Partners’ investment criteria.</p>

                    <p>Home Partners works to get potential homeowners on A New Path to Homeownership®– by purchasing the home of their choice and delivering an attractive lease structure with the right to purchase the home in the future.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-medium mb-4">Why It Works</h2>
                    <p>Home Partners’ approach provides meaningful benefits for prospective homeowners, the communities it serves, and the real estate community.</p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-medium mb-4">Media Contacts</h2>
                    <p className="mb-6">Please contact us by using the "Contact Us" feature or by postal mail at:</p>
                    <p className="mb-1">Rent-to-own-Realty</p>
                    <p className="mb-1">120 S. Riverside Plaza, Suite 2000</p>
                    <p className="mb-1">Chicago, IL 60606</p>
                    <p className="mb-1">(877) 234-5155</p>
                </div>
            </div>
        </HomeLayout>
    );
};

export default AboutUs;