import stars from "../images/stars.svg"
import john1 from "../images/john1.svg"
import john2 from "../images/john2.svg"


function Testimonials(){

    return(
        <div>
            <h1 className="font-bold text-5xl">Member Testimonials</h1>
            <p className="text-sm font-normal text-[#888E95] pt-2">Here what our members have to say about their experience with UNYN</p>
            <div className="flex justify-between pt-16">
                <div className="flex flex-col gap-4 w-[45%]">
                    <div>
                        <img src={stars} />
                    </div>
                    <p className="pr-14">UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals.</p>
                    <div className="flex gap-2">
                        <div>
                            <img src={john1} />
                        </div>
                        <div className="pt-2">
                            <p className="text-base font-normal">John Doe</p>
                            <p className="text-xs font-normal">Marketing Manager, XYZ Company</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-[45%]">
                    <div>
                        <img src={stars} />
                    </div>
                    <p className="pr-14">UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals.</p>
                    <div className="flex gap-2">
                        <div>
                            <img src={john2} />
                        </div>
                        <div className="pt-2">
                            <p className="text-base font-normal">John Doe</p>
                            <p className="text-xs font-normal">Marketing Manager, XYZ Company</p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );

}

export default Testimonials;