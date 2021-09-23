import InputField from './InputField';

const Address = () => {
    return (
      <div className="border-2 mt-10 grid md:grid-cols-2 gap-4 px-5 py-5 rounded-lg">
        <p className="text-lg font-bold mb-2">Address</p>

        <div className="md:col-span-2">
          <InputField fieldName="address" placeholder="Address" />
        </div>
        <div className="md:col-span-2">
          <InputField fieldName="suite" placeholder="Apt or suite" />
        </div>
        <div className="col-span-1">
          <InputField fieldName="city" placeholder="City" />
        </div>
        <div className="col-span-1">
          <InputField fieldName="province" placeholder="Province" />
        </div>
        <div className="col-span-1">
          <InputField fieldName="country" placeholder="Country/region" />
        </div>
        <div className="col-span-1">
          <InputField fieldName="postalCode" placeholder="Postal code" />
        </div>

        <button className="bg-primary text-white font-bold p-2 rounded-md md:w-1/2" type="submit">
          Submit
        </button>
      </div>
    );
}

export default Address
