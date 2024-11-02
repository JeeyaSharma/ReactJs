import React,{useEffect} from 'react'

const Navbar= ({color}) =>{

    // Case 1: Run on every render
    useEffect(() => {
        alert("Hey I will run on every render.")
    })

    // Case 2: Run only on first render
    useEffect(() => {
        alert("Hey Welcome to my page. This is the first render.")
    },[])

    // Case 3: Run only when certain values change
    useEffect(() => {
        alert("Hey I am running because color was changed")
    },[color])
    
    // Example of Cleanup Function
    useEffect(() => {
        alert("Hey Welcome to my page, this is my first render on App.jsx")
        return () => {
          alert("Component was unmounted")
        }
      },[])
    return(
        <div>
            I am Navbar of {color} color hehe....
        </div>
    )
}

export default Navbar