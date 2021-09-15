import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaInstagram } from 'react-icons/fa'

const Footer = () => (
    <footer className={'py-7 border-t'}>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-4 sm:col-span-6 pr-16 sm:pr-4 md:col-span-6 md:pr-24 lg:pr-32 xl:pr-44">
                    <div className="smd:px-2 h-8">
                        <Link href={'/'}>
                            <a className={'h-full'}>
                                <img src="/images/logo.png" className={'h-full'} alt="logo.png"/>
                            </a>
                        </Link>
                    </div>
                    <p className="py-2 text-sm text-mons text-gray-500 font-normal">
                        Rent-to-own realty is <span className={'text-primary px-1'}> Canada’s Only</span>  Rent-to-Own Marketplace
                    </p>
                    <div className="flex justify-start py-1">
                        <div className="h-6 mr-2 w-6 rounded-full overflow-hidden cursor-pointer flex justify-center items-center bg-primary">
                            <FaFacebookF fill={'white'} size={14} className={'inline'} />
                        </div>

                        <div className="h-6 mr-2 w-6 rounded-full overflow-hidden cursor-pointer flex justify-center items-center bg-primary">
                            <FaTwitter fill={'white'} size={14} className={'inline'} />
                        </div>

                        <div className="h-6 mr-2 w-6 rounded-full overflow-hidden cursor-pointer flex justify-center items-center bg-primary">
                            <FaInstagram fill={'white'} size={14} className={'inline'} />
                        </div>

                        <div className="h-6 mr-2 w-6 rounded-full overflow-hidden cursor-pointer flex justify-center items-center bg-primary">
                            <FaTelegramPlane fill={'white'} size={14} className={'inline'} />
                        </div>
                    </div>
                </div>

                <div className="col-span-6 mt-6 sm:col-span-6 sm:mt-0 lg:col-span-2 lg:mt-0">
                    <h2 className="font-mons text-gray-600 font-bold text-sm md:text-normal">
                        Rent-to-Own
                    </h2>
                    <div className="w-16 pt-1 bg-primary my-2"></div>
                    <p className={'text-xs lg:text-sm py-2 text-gray-400 font-mons'}>
                        About
                    </p>

                    <p className={'text-xs lg:text-sm py-2 text-gray-400 font-mons'}>
                        Contact us
                    </p>
                </div>

                <div className="col-span-6 mt-6 sm:col-span-4 sm:mt-8 lg:col-span-2 lg:mt-0">
                    <h2 className="font-mons text-gray-600 font-bold text-sm md:text-normal">
                        Policies
                    </h2>
                    <div className="w-16 pt-1 bg-primary my-2"></div>
                    <p className={'text-xs lg:text-sm py-2 text-gray-400 font-mons'}>
                        Terms of use
                    </p>

                    <p className={'text-xs lg:text-sm py-2 text-gray-400 font-mons'}>
                        Privacy Policy
                    </p>

                    <p className={'text-xs lg:text-sm py-2 text-gray-400 font-mons'}>
                        Cookie Policy
                    </p>
                </div>



                <div className="col-span-6 mt-6 sm:col-span-4 sm:mt-8 lg:col-span-2 lg:mt-0">
                    <h2 className="font-mons text-gray-600 font-bold text-sm md:text-normal">
                        Information
                    </h2>
                    <div className="w-16 pt-1 bg-primary my-2"></div>
                    <p className={'text-xs lg:text-sm py-2 text-gray-400 font-mons'}>
                        List Home
                    </p>

                    <p className={'text-xs lg:text-sm py-2 text-gray-400 font-mons'}>
                        Search Homes
                    </p>
                </div>

                <div className="col-span-6 mt-6 sm:col-span-4 sm:mt-8 lg:col-span-2 lg:mt-0">
                    <h2 className="font-mons text-gray-600 font-bold text-sm md:text-normal">
                        Get In Touch
                    </h2>
                    <div className="w-16 pt-1 bg-primary my-2"></div>
                    <p className={'text-xs lg:text-sm py-2 text-gray-400 font-mons'}>
                        1 844-333-7017
                    </p>

                    <p className={'text-xs lg:text-sm py-2 text-gray-400 font-mons'}>
                        Let's Talk
                    </p>
                </div>
            </div>
        </div>

        <div className="container mx-auto">
            <div className="py-7 my-7 border-t text-center font-mons text-xs text-gray-400 px-3">
                <span>
                    &copy; All right reserved to Rent-to-Own, 2021. Developed by <a className={'text-primary'} target={'_blank'} href="https://algosolver.com">AlgoSolver LLC.</a>
                </span>
            </div>

        </div>
    </footer>

)


export default Footer