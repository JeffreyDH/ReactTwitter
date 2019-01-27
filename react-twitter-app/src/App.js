import React from 'react';
import './App.css';
import ItemCard from './ItemCard';
import ItemModal from './ItemModal';
import User from './ItemModal';

class App extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
       this.state = {
        items:[
            {
                itemName: "Pudge", 
                itemDescription:"Best boy",
                vendor:"The shelter",
                locations:"Near you",
                imgPath: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2017/January_01/training+a+pug+_+fawn+pug+with+a+hot++pink+harness+carrying+a+ball.jpg"
            },
            {
                itemName: "Winston", 
                itemDescription:"good boy",
                vendor:"NOLA Shelter",
                locations:"Near you",
                imgPath: "https://irp-cdn.multiscreensite.com/94f3e251/dms3rep/multi/mobile/a-black-pug-adult-dog++%28275+x+275%29-min.jpg"
            },
            {
                itemName: "Pooch", 
                itemDescription:"Okay boy",
                vendor:"Shelter",
                locations:"Home",
                imgPath:"https://thumbs.dreamstime.com/z/rat-terrier-chihuahua-mixed-breed-dog-86680681.jpg"
            }

        ],
        users:[
            {
                name: "Jeff",
                following:[
                    "jesus",
                    "buddha"
                ],
                followers:[
                    "guillermo"
                ],
                imgPath: "https://irp-cdn.multiscreensite.com/94f3e251/dms3rep/multi/mobile/a-black-pug-adult-dog++%28275+x+275%29-min.jpg"
            },
            {
                name:"Guillermo",
                following:[
                    "Jeff",
                    "Manav"
                ],
                followers:[
                    
                ],
                imgPath:"https://thumbs.dreamstime.com/z/rat-terrier-chihuahua-mixed-breed-dog-86680681.jpg"
            },
            {
                name:"Manav",
                following:[
                    "tommy",
                    "hecuba",
                    "guillermo"
                ],
                followers:
                [
                    "guillermo"
                ],
                imgPath:""
            }
        ]
        
    };
       
    }

    displayItems = ()=>
    {
        return this.state.items.map(this.generateItem)
        //return this.state.users.map(this.generateUser);
    };

    generateItem = (item)=>
    {
        return(<ItemCard
            itemName={item.itemName}
            vendor={item.vendor}
            locations={item.locations}
            imgPath={item.imgPath}
            itemDescription={item.itemDescription}
        />)
    };
    generateUser =(user)=>
    {
        return(<User 
            name = {user.name}
            followers = {user.followers}
            following = {user.following}
            img = {user.imgPath}
        />)
    };

    render()
    {
        return(
            <div>
                {this.displayItems()}
            </div>
        )
    }
}
export default App;
