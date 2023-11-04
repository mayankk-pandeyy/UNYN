import logo from "../images/logo.png"
import { Link } from "react-router-dom";


function Navbar(){

    return(
        <div className="flex items-center justify-between h-10 pt-12 pb-12 w-10/12 mx-auto">
            <div className="flex gap-10 items-center">
                <Link to="/">
                    <img src={logo} alt="logo" width={100} height={31.06} loading="lazy"/>
                </Link>

                <nav>
                    <ul className="flex gap-10">
                        <li>
                            <Link to="/">About Us</Link>
                        </li>
                        <li>
                            <Link to="/">Services</Link>
                        </li>
                        <li>
                            <Link to="/">Events</Link>
                        </li>
                        <li>
                            <label htmlFor="more">More</label>
                            <select name="more" id="more">
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <button className="text-white bg-[#1AA7EC] pt-3 pb-3 pr-10 pl-10 rounded-3xl">
                    Contact us
                </button>
            </div>
        </div>
    );


}

export default Navbar;