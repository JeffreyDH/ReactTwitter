import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import './UserModal.css';

class UserModal extends React.Component {
    constructor(props, context)
    {
        super(props, context);
    }
    
    render()
    {
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="UserModal-body">
                        <img className="UserModal-image" src={this.props.img}/>
                        <div className="UserModal-userLists">
                            <div className="UserModal-following">
                                <h4>Following</h4>
                                {this.props.following.map((name) => {
                                    return (
<<<<<<< HEAD
                                    <p>{name}
                                    <Button onClick={()=>this.props.removeFollowing(this.props.name, name)} >Remove</Button>
                                    </p>      
=======
                                    <h5 style={{margin: "5px"}}>{name}
                                    <Button bsStyle="danger" bsSize="xsmall" onClick={()=>this.props.removeFollowing(this.props.name,name)} >Remove</Button>
                                    </h5>      
>>>>>>> e4fd25d23fe196e95c25b02bdea1db88ef51f7e9
                                    )     
                                })}
                            </div>

                            <div className="UserModal-followers">
                                <h4>Followers</h4>
                                {this.props.followers.map(name => <h5>{name}</h5>)}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
        
    }
}

export default UserModal;