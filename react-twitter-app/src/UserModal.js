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
                        <br/>
                        <img className="UserModal-image" src={this.props.img}/>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="UserModal-following">
                            <h4>Following</h4>
                            {this.props.following.map((name) => {
                                return (
                                <p>{name}
                                <Button onClick={()=>this.props.removeFollowing(this.props.name,name)} >Remove</Button>
                                </p>      
                                )     
                            })}
                        </div>

                        <div>
                            <h4>Followers</h4>
                            {this.props.followers.map(name => <p>{name}</p>)}
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