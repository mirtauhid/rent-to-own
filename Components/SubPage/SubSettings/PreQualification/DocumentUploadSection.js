import FileInputField from "./FileInputField";

const DocumentUploadSection = () => {
  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     if (file) {
  //       const fileReader = new FileReader();
  //       fileReader?.readAsDataURL(file);

  //       fileReader.onload = () => {
  //         resolve(fileReader.result);
  //       };

  //       fileReader.onerror = () => {
  //         reject(error);
  //       };
  //     }
  //   });
  // };

  // const onSelectFile = async (e) => {

  //   setFileName(e.target.files[0]?.name);

  //   const base64 = await convertBase64(e.target.files[0]);

  //   if (base64 instanceof Error) {
  //     return;
  //   }
  //   return base64;

  // };
  return (
    <section className="mb-10 rounded-lg">
      <p className="text-gray-600 mt-5 text-lg font-bold">
        Upload the following documents :
      </p>
      <p className="text-yellow-500 mt-5 text-lg font-bold">
        ** Only PDF and Images are allowed as documents. 
      </p>

      <FileInputField label="Recent letter of employment" fieldName="LOE" />
      <FileInputField
        label="Proof of down payment (minimum of 3% of home price you wish to purchase)"
        fieldName="downpaymentDoc"
      />
      <FileInputField
        label="Two most recent Notice of Assessments per CRA"
        fieldName="CRA"
      />
    </section>
  );
};

export default DocumentUploadSection;
