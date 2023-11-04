
import image1 from "../images/Image1.png"
import Slider from "./Slider";
import JoinButton from "./JoinButton";
import LearnMore from "./LearnMore";



function Introduction(){

    return(
        <div className="flex justify-between">
            {/* Left Section */}
            <div className="w-[45%] flex flex-col justify-center gap-5">
                <h1 className="text-6xl font-bold">
                    Empowering Youth for a Brighter Future
                </h1>
                <p className="text-[#888E95] text-sm">
                    United Youth Network (UNYN) is a dynamic and impactful
                    international student society committed to nurturing the
                     talents and potential of young individuals across colleges 
                     and universities of different countries. Join us today to 
                     be a part of our mission to create a brighter and more promising future.
                </p>
                <div className="flex items-center gap-6 pt-6">
                    <JoinButton></JoinButton>
                    <LearnMore></LearnMore>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-[45%]">
                <div>
                    <img src={image1}/>
                </div>
                <div>
                    <Slider></Slider>
                </div>
            </div>
        </div>
    );


}

export default Introduction;