import React from 'react';
import './ItemCard.css';
import ItemModal from './ItemModal';

class ItemCard extends React.Component
{

    constructor(props, context)
    {
        super(props, context);
        //this.handleClick = this.handleClick.bind(this);
        this.state = {
            
            isShowing: true
        }
    }
    handleClick = (e) =>{
        this.setState({
            isShowing: !this.state.isShowing
        });
    }
    
    render(){
        return(
            <div className = "ItemCard-container" onClick={this.handleClick}>
                <img class="ItemCard-img" src={this.props.imgPath}/>
                {!this.state.isShowing && 
                    <ItemModal
                        itemTitle={this.props.itemTitle}
                        itemDescription={this.props.itemDescription}
                        handleClose = {this.handleClick}
                    />
                
                }
                <h4 className="ItemCard-title">
                    {this.props.vendor}
                </h4>
                <p style = {{textAlign:"center"}}>
                </p>
                <p style ={{textAlign:"center"}}>
                    <span style={{fontWeight:"bold"}}>
                        {this.props.locations}
                    </span>
                </p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
            
        )
    }
}

export default ItemCard;