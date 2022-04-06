import React, { useState } from "react";
import './Home.css';
const Home = (props) =>{
    const [ searchText , setSerchText ] = useState("");
    const [ list , setList ] = useState(props.list);
    console.log("list",list)

    const search = (e) =>{
        
        const searchText = e.target.value;
        let filterdata = props.list.filter((element)=>{  
            // return element.country.includes(searchText.toLowerCase() && searchText.toUpperCase())
            return element.fname.toLowerCase().indexOf(searchText) > -1 ||
            element.lname.toLowerCase().indexOf(searchText) > -1 ||
            element.city.toLowerCase().indexOf(searchText) > -1 ||
            element.country.toLowerCase().indexOf(searchText) > -1

        })
        
        setList(filterdata);
        setSerchText();

    }
    return(
        <div>
            <h2>Home Component</h2>
            <input type="text"
             placeholder="search Here...."
             value={searchText}
             onChange={(e)=>search(e)}
             />
            {/* <button onClick={search}>Search</button> */}
            {
                list ? 
                <div>
                    {
                        list.map((item,i)=>
                        <div className="card" key={i}>
                            <p>{item.fname}</p>
                            <p>{item.lname}</p>
                            <p>{item.city}</p>
                            <p>{item.country}</p>
                        </div>
                        )
                    }
                </div> 
                :
                <div>
                    <p>Record Not Found</p>
                </div>
            }
        </div>
    )
}

export default Home;