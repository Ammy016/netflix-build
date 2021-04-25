import React from 'react'
import './Banner.css'

function Banner() {

    const bannerStyle = {
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_Y1UZGjwSwlCkHnoiwJIwQKNw5cVkLDqPQ&usqp=CAU")',
        backgroundPosition:"center center" ,
        backgroundSize : "cover"
    }

    const minifyText = () => {
        
    }

    return (
        <div className="banner" style={bannerStyle}> 
            {/* banner content */}

            <div className="banner-content">
                <h1 className="banner_title">Movie_title</h1>
                <div className="banner_buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <span className="banner_description">
                    this is a test description
                </span>
            </div>
        </div>
    )
}
export default Banner
