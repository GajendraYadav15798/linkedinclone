import React from "react";
import Avatar from "@mui/material/Avatar";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssessmentIcon from "@mui/icons-material/Assessment";
import "./Feed.css";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__input">
        <Avatar src="data:image/png;base64,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"/>
        <form>
          <input type="text" placeholder="Start a post" />
          <input type="Submit" />
        </form>
        
        <div className="feed__options">
          <div className="option">
            <PhotoIcon style={{color:'gold'}} />
            <span>Photo</span>
          </div>
          <div className="option">
            <YouTubeIcon style={{color:'red'}} />
            <span>Video</span>
          </div>
          <div className="option">
            <CalendarTodayIcon style={{color:"green"}} />
            <span>Event</span>
          </div>
          <div className="option">
            <AssessmentIcon style={{color:'brown'}}/>
            <span>Write Article</span>
          </div>
          </div>
        </div>
       
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        <Post name= "Gajendra Yadav"description="I am learning web course from NewtonSchool" message="I can Do it "/>
        
        
        

      </div>
    
  );
}

export default Feed;
