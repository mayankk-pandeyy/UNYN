import { Link } from "react-router-dom";
import { BiChevronRight } from 'react-icons/bi';


function LearnMore(){

    return(
        <div>
            <Link to="/">
                <div className="flex items-center text-[#1AA7EC]">
                    <p>Learn More</p>
                    <BiChevronRight/>
                </div>
            </Link>
        </div>
    );


}

export default LearnMore;