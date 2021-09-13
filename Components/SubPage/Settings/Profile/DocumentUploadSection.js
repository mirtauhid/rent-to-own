import React,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux";

const DocumentUploadSection = () => {

    const settingsForm = useSelector((state) => state.settingsForm);

    console.log(settingsForm);

    const [selectDl, setSelectDl] = useState(null);
    const [fileName,setFileName] = useState(null);

     const convertBase64 = (file) => {
       return new Promise((resolve, reject) => {
         if(file){
             const fileReader = new FileReader();
         fileReader?.readAsDataURL(file);

         fileReader.onload = () => {
           resolve(fileReader.result);
         };

         fileReader.onerror = () => {
           reject(error);
         };
        }
       });
     };

     const onSelectDl = async (e) => {
         console.log(e.target.files[0].name);
       const base64 = await convertBase64(e.target.files[0]);
       if (base64 instanceof Error) {
         
         return;
       }
       setSelectDl(base64);
       setFileName(e.target.files[0].name);
     };
    return (
      <section className="border-2 mt-10 mb-10 px-5 py-8">
        <p className="text-lg font-bold">For Rent-to-Own Applicants:</p>
        <p className="text-gray-400 mt-2">Upload the following documents</p>

        <p className="mt-7 mb-3 text-base font-bold">
          Recent Letter of Employment {" "}<span className="text-red-500">*</span>
        </p>
        <div className="md:flex ">
          <div
            className="w-3/5 border-r-0 border-2 h-10 px-4 rounded-l-md rounded-r-none"
            style={{ paddingTop: "5px" }}
          >
            <p>{selectDl ? fileName : "Upload letter of employment"}</p>
          </div>
          <div className="w-2/5">
            <input
              accept="image/*"
              id="dl-image-upload"
              type="file"
              onChange={onSelectDl}
              hidden
            />
            <label
              htmlFor="dl-image-upload"
              className="bg-primary text-center text-white font-bold rounded-r-md rounded-l-none inline-block h-10 w-full pt-2"
            >
              Choose file
            </label>
          </div>
        </div>

        <p className="mt-7 mb-3 text-base font-bold">
          Proof of down payment (minimum of 3% of home price you wish to
          purchase){" "}<span className="text-red-500">*</span>
        </p>
        <div className="md:flex ">
          <div
            className="w-3/5 border-r-0 border-2 h-10 px-4 rounded-l-md rounded-r-none"
            style={{ paddingTop: "5px" }}
          >
            <p>{selectDl ? fileName : "Upload letter of employment"}</p>
          </div>
          <div className="w-2/5">
            <input
              accept="image/*"
              id="dl-image-upload"
              type="file"
              onChange={onSelectDl}
              hidden
            />
            <label
              htmlFor="dl-image-upload"
              className="bg-primary text-center text-white font-bold rounded-r-md rounded-l-none inline-block h-10 w-full pt-2"
            >
              Choose file
            </label>
          </div>
        </div>

        <p className="mt-7 mb-3 text-base font-bold">
          Two most recent Notice of Assessments per CRA{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="md:flex ">
          <div
            className="w-3/5 border-r-0 border-2 h-10 px-4 rounded-l-md rounded-r-none"
            style={{ paddingTop: "5px" }}
          >
            <p>{selectDl ? fileName : "Upload letter of employment"}</p>
          </div>
          <div className="w-2/5">
            <input
              accept="image/*"
              id="dl-image-upload"
              type="file"
              onChange={onSelectDl}
              hidden
            />
            <label
              htmlFor="dl-image-upload"
              className="bg-primary text-center text-white font-bold rounded-r-md rounded-l-none inline-block h-10 w-full pt-2"
            >
              Choose file
            </label>
          </div>
        </div>
      </section>
    );
}

export default DocumentUploadSection
