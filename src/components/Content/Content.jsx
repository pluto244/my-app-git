import React from 'react';
import PostsContainer from './Posts/PostsConteiner';
const Profile = (props) => {


      

    return (
        <div>
            Main content

            <PostsContainer store={props.store}/>


        </div>




    );
}


export default Profile;