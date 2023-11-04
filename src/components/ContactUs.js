import {IoLocationSharp} from "react-icons/io5"
import {MdPhone} from "react-icons/md"
import {IoMailSharp} from "react-icons/io5"


function ContactUs(){

    return(
        <div className="pt-40 flex justify-between">
            {/* Left Section */}
            <div className="w-[45%] flex flex-col gap-2">
                <h1 className="font-bold text-5xl">Get in touch</h1>
                <p className="text-[#5F6368] text-lg font-normal">
                    <span className="text-[#0B4765]">Contact with our team</span> to talk about how we can help your business process at scale, or sign up for more info
                </p>
                <div className="flex flex-col gap-4 pt-8">
                    {/* Location */}
                    <div className="flex gap-4 items-center">
                        <IoLocationSharp/>
                        <p>1-4929, Lane No. 6, Balbirnagar Ext., <br></br> Shahdara, Delhi 110032</p>
                    </div>
                    {/* Phone */}
                    <div className="flex gap-4 items-center">
                        <MdPhone/>
                        <p>+91-8888888888</p>
                    </div>
                    {/* Mail */}
                    <div className="flex gap-4 items-center">
                        <IoMailSharp/>
                        <p>info@unyn.com</p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-[45%] shadow-xl">
                <div className="w-10/12 mx-auto">
                    <h1 className="font-bold text-5xl">Say something</h1>
                    <form className="flex flex-col gap-4 pt-8 pb-12">
                        <div>
                            <input type="text" placeholder="Your Name..." className="w-full border border-[#106690] pt-2 pb-2 pl-6 rounded-2xl"/>
                        </div>
                        <div>
                            <input type="email" placeholder="Your Mail..." className="w-full border border-[#106690] pt-2 pb-2 pl-6 rounded-2xl"/>
                        </div>
                        <div>
                            <textarea placeholder="Message..." className="w-full border border-[#106690] pt-2 pb-2 pl-6 pr-6 rounded-2xl"/>
                        </div>
                        <button className="w-full bg-[#1AA7EC] pt-2 pb-2 rounded-2xl text-white">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default ContactUs;