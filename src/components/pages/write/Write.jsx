
import {Link} from "react-router-dom";
import React, { useState } from "react";
import "./write.css"


  function Write(){
     const [title, setTitle] = useState("")
     const [image, setImage] = useState("")
     const [category, setCategory] = useState("")
    const [content, setContent] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
  
      fetch("https://blog-sitapp.herokuapp.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category,
          title: title,
          content: content,
        }),
      })
        .then((r) => r.json())
        .then((newContent) => {
          setContent("");
        });
        console.log(content);
        console.log(image);
        console.log(category);
    }
  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="" 
        />
       <form className="writeForm" onSubmit={handleSubmit}>
           <div className="writeFormGroup">
               <label htmlFor="fileInput">
               <i  onChange={(e) => setImage(e.target.value)} className="writeIcon fa-solid fa-circle-plus"></i>
               </label>
                <input type="file"  onChange={(e) => setTitle(e.target.value)} style={{display:"none"}}/>
                <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                 placeholder="Title" className="writeInput" autoFocus={true}/>
           </div>

             <div className="writeForm">
           <label onChange={(e) => setCategory(e.target.value)} className="blog-names">Choose a Category:</label>
                  <select onChange={(e) => setCategory(e.target.value)} name="technology" id="technology">
                  <option value="technology">Technology</option>
                  <option value="Education">Eduction</option>
                  <option value="fashion">Fashion</option>
                  <option value="Security">Security</option>
                  </select>
                </div>

           <div className="writeFormGroup">
               <textarea onChange={(e) => setContent(e.target.value)}
               placeholder="Tell your story..." 
               type="text" value={content}
               className="writeInput writeText">
               </textarea>
           </div>
           <button className="writeSubmit">Publish</button>
           <Link className="link"  to="/write">Write</Link>

       </form>
    </div>
  )
}

export default Write

