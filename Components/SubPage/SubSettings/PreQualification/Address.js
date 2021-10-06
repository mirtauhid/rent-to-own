import InputField from './InputField';

const Address = () => {
    return (
      <div className="mt-5 grid md:grid-cols-2 gap-4 rounded-lg">

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
      </div>
    );
}

export default Address
