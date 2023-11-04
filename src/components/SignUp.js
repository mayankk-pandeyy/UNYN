import image4 from "../images/image4.svg"


function SignUp(){
    
    return(
        <div className="flex justify-between pt-28 items-center">
            {/* Left Section */}
            <div className="w-[45%] flex flex-col justify-center gap-5">
                <h1 className="font-bold text-5xl">Stay Updated with UNYN Newsletter</h1>
                <p>Gets the latest updates, news and exciting opportunities for UNYN.</p>
                <div className="flex flex-col gap-2">
                    <form className="flex gap-4 w-full">
                        <input type="email" placeholder="Enter your email" className="border w-[340px] border-[#1AA7EC] rounded-3xl pt-2 pb-2 pr-20 pl-4"/>
                        <button className="text-white bg-[#1AA7EC] pt-3 pb-3 pr-14 pl-14 rounded-3xl">Sign up</button>
                    </form>
                    <p className="text-sm text-[#888E95]">By signing up, you agree to our Term and Conditions.</p>
                </div>
            </div>


            {/* Right Section */}
            <div className="w-[45%]">
                <img src={image4} />
            </div>
        </div>
    );

}

export default SignUp;