import React , {useState , useEffect }from 'react'
import './Banner.css'
// import axios from '../../http-requests/axios'
import axios from 'axios'
import requests from '../../http-requests/request'

function Banner() {

    const [movie , setMovie] =  useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(`https://www.themoviedb.org/3${requests.fetchNetflixOriginals}`);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length - 1)
                ]
            );
            return request
        }
        fetchData();
    }, [])

    console.log(movie);

    const bannerStyle = {
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_Y1UZGjwSwlCkHnoiwJIwQKNw5cVkLDqPQ&usqp=CAU")',
        backgroundPosition:"center center" ,
        backgroundSize : "cover"
    }

    const minifyText = ( str , n ) => {
        return str ?.length > n ? str.substr(n-1) + '...' : str
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
