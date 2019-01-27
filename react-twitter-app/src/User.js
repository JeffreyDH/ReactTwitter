
import React from 'react';

class User extends React.Component
{
    constructor(props, context)
    {
        this.state = 
        {
            name: this.props.name,
            followers: this.props.followers,
            following: this.props.following,
            img: this.props.imgPath
        }
    }

    render()
    {

    }
}

export default User;