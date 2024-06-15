"use client";

import Header from "../Header";

const Profile = (username:any) => {
  
        return <>
            <Header />
            <h2>Welcome {username}</h2>
        </>
}

export default Profile;