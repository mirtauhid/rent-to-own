import Link from 'next/link'

const Header = () => {
    return (
        <header className={'shadow-md'}>
            <div className="container mx-auto py-7">
                <div className="grid grid-cols-1 smd:grid-cols-2">
                    <div>
                        <div className={'h-10 flex justify-center smd:justify-start mb-5 smd:mb-0'}>
                            <Link href={'/'}>
                                <a className={'h-full cursor-pointer'}>
                                    <img src="/images/logo.png" alt="logo" className={'h-full'}/>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={'flex justify-center items-center smd:justify-end'}>
                        <ul className="flex items-center">
                            <li className={'mx-3 font-mons font-semibold text-xs xs:text-sm cursor-pointer px-1'}>List your property</li>
                            <li className={'mx-3 mx-3 font-mons font-semibold text-xs xs:text-sm cursor-pointer px-1'}>Sign up</li>
                            <li className={'mx-3 text-xs xs:text-sm px-4 cursor-pointer py-1 border-gray-400 border rounded hover:bg-primary hover:text-white transition-all duration-300 font-semibold'}>Login</li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
