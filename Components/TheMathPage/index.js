import React from 'react';

const TheMathPage = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-medium">The Math</h2>
            <hr />

            <div className="my-6">
                <h2 className="text-2xl font-medium mb-4">Total Cost</h2>
                <p>Total Cost is the price Home Partners pays for the home, closing costs, make ready and repairs/maintenance costs. Total Cost is used to determine the resident's Right to Purchase prices. A sample is highlighted below:</p>
            </div>

            <table className="w-full text-left">
                <tr>
                    <td className="border-b border-r border-primary bg-green-50 px-4 py-2">Purchase Price</td>
                    <td className="border-b  border-primary  px-4 py-2">$200,000</td>
                </tr>
                <tr>
                    <td className="border-b border-r border-primary bg-green-50 px-4 py-2">Closing Costs *</td>
                    <td className="border-b  border-primary  px-4 py-2">$3,000</td>
                </tr>
                <tr>
                    <td className="border-b border-r border-primary bg-green-50 px-4 py-2">Make Ready and Repairs/Maintenance Costs</td>
                    <td className="border-b  border-primary  px-4 py-2">$7,000</td>
                </tr>
                <tr>
                    <td className="border-b border-r border-primary bg-green-50 px-4 py-2">Total Cost</td>
                    <td className="border-b  border-primary  px-4 py-2">$210,000</td>
                </tr>
                <tr>
                    <td className="border-b border-r border-primary bg-green-50 px-4 py-2">Hello</td>
                    <td className="border-b  border-primary  px-4 py-2">55</td>
                </tr>
            </table>

            <p className="text-red-500 my-5 text-md">* Includes costs such as transfer taxes, attorneys' fees, title insurance, other acquisition costs, etc.</p>

            <div className="my-12">
                <h2 className="text-2xl font-medium mb-4">Monthly Rent Increases</h2>
                <p className="mb-3">Each year, a resident's Monthly Rent increases by no more than 3.75% over the previous year’s Monthly Rent.</p>
                <p className="mb-3">For example, if the Monthly Rent for Year 1 is $1,400 per month, the increase for the next year is $50/month (i.e., $1,400 x 1.0375)*.</p>
            </div>

            <h2 className="text-2xl font-medium mb-4">Monthly Rent</h2>

            <table className="w-full text-left">
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 1</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$1,400</td>
                </tr>
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 2</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$1,450</td>
                </tr>
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 3</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$1,500</td>
                </tr>
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 4</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$1,560 (Does not apply in Canada)</td>
                </tr>
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 5</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$1,620 (Does not apply in Canada )</td>
                </tr>
            </table>

            <div className="my-12">
                <h2 className="text-2xl font-medium mb-4">Right to Purchase Price Increases</h2>
                <p className="mb-3">Each year, the Right to Purchase Price increases by 3.5%-5% (depending on the region).</p>
                <p className="mb-3">In the example, if the Total Cost of the home is $210,000 and if the Right to Purchase increases by 5% (i.e., Prior Year Purchase Right Price x 1.05)* then the Purchase Right Price for Years 1-5 is as follows:</p>
            </div>

            <table className="w-full text-left">
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 1</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$220,500</td>
                </tr>
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 2</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$231,500</td>
                </tr>
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 3</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$243,100</td>
                </tr>
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 4</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$255,300 (Does not apply in Canada)</td>
                </tr>
                <tr>
                    <td className="border-b  border-r border-primary  px-4 py-2">Year 5</td>
                    <td className="border-b border-primary bg-green-50 px-4 py-2 ">$268,000 (Does not apply in Canada)</td>
                </tr>
            </table>

            <p className="mt-8">There are additional costs that the resident will incur if they exercise the Right to Purchase such as closing costs to purchase the home, including transfer taxes, attorneys' fees, title insurance, and the cost of a mortgage loan. As a result, actual total costs to exercise the Right to Purchase will vary.</p>
            <p className="text-red-500 my-5 text-md">* Rent will round to the nearest $10. Right to Purchase Price will round to the nearest $100.</p>
        </div>
    );
};

export default TheMathPage;