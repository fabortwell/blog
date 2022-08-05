import { useEffect, useState } from "react";
import "./post.css"
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";



export default function Post() {
  const [rate, setRate] = useState(0);

  const [posts, setPosts] = useState([]);
 useEffect(() => {
  fetch("https://blog-sitapp.herokuapp.com/posts")
  .then((r) => r.json())
  .then((data) => setPosts(data));
 }, [])

 console.log(posts)
  return (
    <div className="post">
   
    {posts.map((post) => {
      return (
        <div className="postInfo">
          <div className="postCats">
        <div className key={post.id} >
          <p className="postTitle">{post.title}</p>
          <div className="singlePostEdit">
             <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
             <i className="singlePostIcon fa-solid fa-trash-can"></i>
             </div>
             <span> Author: 
          <p className="singlePostAuthor">{post.author}</p>
          </span>
             <span> Category: 
          <p className="postCat">{post.category}</p>
          </span>
          <p className="postDesc">{post.content}</p>
          <p className="singlePostEdit">{post.edit}</p>
          <p className="singlePostDate">{post.date}</p>
  <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
  
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                alert(`Are you sure you want to give ${givenRating} stars ?`);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "rgb(255, 99, 71)"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
    
         
    <img 
    className="postImg"
    src={post.image_url} alt=""/>
       
        </div>
        </div>
        </div>
        
      )
    })}

</div>
  )
}
