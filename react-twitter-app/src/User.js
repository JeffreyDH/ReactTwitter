
import React from 'react';
import UserModal from './UserModal'
import './User.css'
class User extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = 
        {
            isShowing:true
        }
    }
    handleClick = (e) =>{
        this.setState({
            isShowing: !this.state.isShowing
        });
    }
    render()
    {
        return(
        <div className = "User-container" onClick={this.handleClick}>
                <img class="User-img" src={this.props.img}/>
                {!this.state.isShowing && 
                    <UserModal
                        img = {this.props.img}
                        name={this.props.name}
                        following={this.props.following}
                        followers={this.props.followers}
                        removeFollowing = {this.props.removeFollowing}
                    />
                }
                <h4 className="User-name">
                    {this.props.name}
                </h4>
                <p style = {{textAlign:"center"}}>
                    Followers
                    {this.props.followers.length}
                </p>
                <p style ={{textAlign:"center"}}>
                    Following
                    {this.props.following.length}
                </p>
        </div>
        )
    }
}

export default User;