
import ImageSlider from "../../Components/ImageSlider";
import HomeLayout from "../../Layouts/HomeLayout";

const data = [
  {
    img: "/images/Homepage/ExploreNeighborhoodSlidePhotos/Background.webp",
  },
  {
    img: "/images/Homepage/ExploreNeighborhoodSlidePhotos/NoPath.png",
  },
  {
    img: "/images/Homepage/ExploreNeighborhoodSlidePhotos/NoPath - Copy (50).png",
  },
  {
    img: "/images/Homepage/ExploreNeighborhoodSlidePhotos/NoPath - Copy (53).png",
  },
]; 

const Test = () => {
    return (
        <HomeLayout>
            {/* <MakeAnOffer isOpen={true}/> */}
            <ImageSlider data={data} height="h-96" width="w-full"/>
        </HomeLayout>
    )
}

export default Test
