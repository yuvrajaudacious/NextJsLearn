"use client"
import Script from "next/script";

export default function page(){
    return(
        <div>
        <Script  
        src="/location.js" 
        onLoad={()=>{
            console.log("File Loader")
        }}/>
        <h1> GET User Location</h1>
        </div>
    )
}