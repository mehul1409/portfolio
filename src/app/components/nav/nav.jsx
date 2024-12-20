import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { LuProjector } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import { TbLogs } from "react-icons/tb";
import Link from "next/link";
import './nav.css'

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <FaHome /><span className="text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <SiAboutdotme /><span className="text">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/projects'>
                            <LuProjector /><span className="text">Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/blogs'>
                            <TbLogs /><span className="text">Blogs</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <IoIosContact /><span className="text">Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;