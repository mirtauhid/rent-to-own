
import ImageSlider from "../../Components/ImageSlider";
import HomeLayout from "../../Layouts/HomeLayout";
import SignatureCanvas from "react-signature-canvas";



const Test = () => {
    return (
      <HomeLayout>
        <SignatureCanvas
          penColor="green"
          canvasProps={{ width: 500, height: 100, className: "sigCanvas" }}
        />
      </HomeLayout>
    );
}

export default Test
