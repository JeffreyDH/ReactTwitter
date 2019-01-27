
import React from 'react';

class User extends React.Component
{
    constructor(props, context)
    {
        this.state = 
        {
            name: this.props.name,
            followers: this.props.followers,
            following: this.props.following
        }
    }
    // render()
    // {
    //     <div className="User">
            
    //     </div>
    // }
}
export default User;