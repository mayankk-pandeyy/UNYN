import internationalCollab from "../images/internationalCollab.svg"
import mentorshipProgram from "../images/mentorshipProgram.svg"
import networkingEvents from "../images/networkingEvents.svg"
import JoinButton from "./JoinButton";
import LearnMore from "./LearnMore";


function Empower(){

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-col w-[710px] mx-auto items-center pt-36">
                <p className="font-semibold text-lg">Empower</p>
                <h1 className="font-bold text-5xl pt-6">Unlock Your Potential with UNYN</h1>
                <div className="font-normal text-lg text-[#888E95] flex flex-col items-center pt-6">
                    <p>At UNYN, we offer a range of impactful programs and events designed to 
                    empower young</p>
                    <p>individuals. From mentorship programs to networking events and 
                    international collaborations,</p>
                    <p>we provide the resources and support needed to help you thrive.</p>
                </div>
            </div>
            <div className="flex gap-20 pt-14">
                {/* Mentorship Programmes */}
                <div className="flex flex-col gap-3 items-center pl-4 pr-4 mx-auto">
                    <img src={mentorshipProgram} width={60} height={60}/>
                    <h3 className="font-bold text-2xl">Mentorship Programs</h3>
                    <p className="text-lg font-normal text-[#888E95]">Connect with experienced mentors who will guide you towards success.</p>
                </div>

                {/* Networking Events */}
                <div className="flex flex-col gap-3 items-center pl-4 pr-4">
                    <img src={networkingEvents} width={60} height={60}/>
                    <h3 className="font-bold text-2xl">Networking Events</h3>
                    <p className="text-lg font-normal text-[#888E95]">Expand your network and forge valuable connections with like- minded individual.</p>
                </div>

                {/* International Collaborations */}
                <div className="flex flex-col gap-3 items-center pl-4 pr-4">
                    <img src={internationalCollab} width={60} height={60}/>
                    <h3 className="font-bold text-2xl">International Collaborations</h3>
                    <div className="text-lg font-normal text-[#888E95]">
                        Gain global exposure and collaborate with students from different ocuntries.
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6 pt-16">
                <JoinButton></JoinButton>
                <LearnMore></LearnMore>
            </div>
        </div>
    );

}

export default Empower;