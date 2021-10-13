import Link from 'next/link';
import React from 'react';
import ListItem from '../ListItem';

const SubPricing = () => {
    return (
      <div className="container m-auto">
        <div className="md:w-3/4 mx-auto my-8">
          <div className="mx-6 mb-10">
            <h2 className="text-primary text-center text-3xl xl:text-4xl font-medium my-6">
              Select the plan that works for you
            </h2>
            <p>
              Whether you’re looking for more money in the bank, more
              transparency over the process or simply more options than
              traditional real estate has to offer - we’re committed to helping
              you sell the way that suits you best.
            </p>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 m-auto">
              <div className="shadow border border-gray-100 px-5 py-10 m-4 rounded-lg">
                <h3 className="text-xl text-center font-bold">
                  List a Property to Rent-to-Own
                </h3>
                <p className="mt-4">
                  Utilize our proven system and tools to take advantage of the
                  most lucrative way to sell your home
                </p>
                <h2 className="text-4xl font-bold text-center my-6">$499</h2>
                <p className="mb-4">
                  This is the perfect option for a true do-it-yourself seller
                  who wants an award-winning real estate platform that makes it
                  easier to reach more buyers.
                </p>

                <h4 className="text-lg font-bold">What's Included:</h4>
                <ul>
                  <ListItem>
                    Listing on{" "}
                    <Link href="/">
                      <a className="text-primary font-medium">
                        RentToOwnRealty.ca
                      </a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    Guaranteed to receive a qualified offer for 5% more than the
                    fair market value of your home today or your money back!
                  </ListItem>
                  <ListItem>
                    Continue to pay down your mortgage principal while taking
                    advantage of today's low interest rates!
                  </ListItem>
                  <ListItem>
                    No hands-on property management required! Simply deposit
                    your pre-dated rent cheque each month!
                  </ListItem>
                </ul>

                <div className="text-center">
                  <Link href="/listProperty">
                    <a className="inline-block py-3 px-8 my-8 border-2 border-primary bg-primary hover:bg-white text-white hover:text-primary font-bold rounded-lg">
                      GET STARTED
                    </a>
                  </Link>
                  <p className="w-full font-medium">
                    Pay when you're ready to list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SubPricing;