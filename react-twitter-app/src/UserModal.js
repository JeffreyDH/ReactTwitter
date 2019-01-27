import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

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
                        <img src={this.props.img}/>
                        <Modal.Title>{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.following.map(name => <p>{name}</p>)}
                        {this.props.followers.map(name => <p>{name}</p>)}
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