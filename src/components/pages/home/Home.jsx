
import Header from "../../header/Header"
import Posts from "../../posts/Posts"


import Sidebar from "../../sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
    {/* if (user) 
      Welcome, {user.username}! */}
        <Header/>
       <div className="home">
       <Posts/>
       <Sidebar />
       </div>
    </>
  )
}
