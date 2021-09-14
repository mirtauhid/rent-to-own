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
  //   console.log(base64);

  //   if (base64 instanceof Error) {
  //     return;
  //   }
  //   return base64;

  // };
  return (
    <section className="border-2 mt-10 mb-10 px-5 py-8">
      <p className="text-lg font-bold">For Rent-to-Own Applicants:</p>
      <p className="text-gray-400 mt-2">Upload the following documents</p>

      <FileInputField label="Recent letter of employment" fieldName="LOE" />
      <FileInputField
        label="Proof of down payment (minimum of 3% of home price you wish to purchase)"
        fieldName="downPayment"
      />
      <FileInputField
        label="Two most recent Notice of Assessments per CRA"
        fieldName="CRA"
      />
    </section>
  );
};

export default DocumentUploadSection;
