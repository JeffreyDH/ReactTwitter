import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';


class ItemModal extends React.Component
{
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
                        <Modal.Title>{this.props.itemTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.itemDescription}</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleClose}>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
        
    }
}
export default ItemModal;