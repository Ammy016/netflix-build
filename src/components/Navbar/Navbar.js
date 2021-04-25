import React , {useState , useEffect} from 'react'
import './Navbar.css'

function Navbar() {

    const [show , handleShow] = useState(false);

    const showNavbar = () => {
        if(window.scrollY > 100 ){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',showNavbar);
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`Navbar ${show && 'show'}`}>
            {/* navbar left */}
            <div className="nav_left">
                <img src="https://pngimg.com/uploads/netflix/netflix_PNG31.png" className="Netflix-logo" alt="netflix-logo" />
            </div>

            {/* Navbar middle */}
            <div className="nav_center">

            </div>

            {/* Navbar right */}
            <div className="nav_right">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className="avatar-logo" alt="avatar-icon"/>
            </div>
        </div>
    )
}

export default Navbar
  