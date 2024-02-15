import React from "react";
import { Link } from "react-router-dom";


const Home = ({ pokemonProp: results }) => {
    console.log(results);
    return (
       

        <div className="flex">
    

            {results &&
                results.map((val, index) => (
                    <div className="ml-4 text-2xl text-yellow-400 border-black-500 " key={val.index}>
                        <Link to={`/about/${val.index}`}>{val.name}</Link>
                    </div>

                ))

            }


        </div>

    )
}

export default Home;