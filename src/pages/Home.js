import Introduction from "../components/Introduction";
import image2 from "../images/image2.svg"
import Empower from "../components/Empower";
import image3 from "../images/image3.svg"
import Testimonials from "../components/Testimonials";
import JoinNow from "../components/JoinNow";
import SignUp from "../components/SignUp";
import ContactUs from "../components/ContactUs";



function Home(){
    return(
        <div>
            <div className="w-10/12 mx-auto">
                <div>
                    <Introduction></Introduction>
                </div>
                <div>
                    <div className="flex pt-32 justify-between">
                        <div className="w-[50%] font-bold text-5xl">
                            Empowering Youth for a Brighter Future: <span className="text-[#106690]">UNYN's Impact on Youth Individuals</span>
                        </div>
                        <div className="w-[45%] font-normal text-sm text-[#888E95] pl-24 pr-10">
                            United Youth Network (UNYN) is dedicated to empowering young
                            individuals by providing them with opportunities for growth and development. Through our international student society, we aim 
                            to nurture their talents and unlock their full potential. By investing in the youth today,
                            we believe that we can create a brighter and more promising future for tomorrow.
                        </div>
                    </div>
                    <div className="pt-20">
                        <img src={image2} className="mx-auto w-full"/>
                    </div>
                </div>
                <div>
                    <Empower></Empower>
                </div>
                <div className="flex justify-between pt-28">
                    {/* Left Section */}
                    <div className="w-[47%] flex flex-col justify-center gap-5">
                        <h1 className="font-bold text-5xl">Unlock Your Potential and Make a Lasting Impact with UNYN</h1>
                        <p className="text-sm font-normal text-[#888E95]">
                            Joining UNYN offers a unique opportunity for personal growth, professional development, and making a positive difference in the world. Our dynamic and impactful international student society is dedicated to nurturing the talents and potential of young individuals across colleges and universities worldwide. Through our diverse range of programs, events, and initiatives, we empower the youth today to create a brighter and more promising future for tomorrow.
                        </p>
                    </div>


                    {/* Right Section */}
                    <div className="w-[45%]">
                        <img src={image3} />
                    </div>
                </div>
                <div className="pt-28">
                    <Testimonials></Testimonials>
                </div>
            </div>
            <div className="pt-28">
                <JoinNow></JoinNow>
            </div>
            <div className="w-10/12 mx-auto">
                <SignUp></SignUp>
                <ContactUs></ContactUs>
            </div>
        </div>
    );


}

export default Home;