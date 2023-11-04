import JoinButton from "./JoinButton";



function JoinNow(){
    return(
        <div className="h-[400px] bg-[#1AA7EC] flex flex-col gap-4 justify-center items-center">
            <h1 className="font-bold text-5xl text-white">Empowering Your Potential with UNYN</h1>
            <p className="font-normal text-lg text-white">Join UNYN and unlock endless opportunities for growth</p>
            <div className="flex gap-6 pt-8">
                <div>
                    <button className="bg-white text-[#1AA7EC] pt-3 pb-3 pr-14 pl-14 rounded-3xl">Join</button> 
                </div>

                <div>
                    <button className="text-white border border-white pt-3 pb-3 pr-7 pl-7 rounded-3xl">Get evolved</button> 
                </div>
            </div>
        </div>
    );


}

export default JoinNow;