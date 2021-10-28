import React from 'react'
import './TinderCards.css'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core'
function TinderCards() {
    
    const [people, setPeople] = useState([{
        name: 'Shivam Datta',
        url: "https://media-exp1.licdn.com/dms/image/C5603AQEnP4CjCPZcgw/profile-displayphoto-shrink_100_100/0/1600079811803?e=1639612800&v=beta&t=0HHls9jz75U7P0SV0z7s4JYvewW96aujl4Jh_8fZ-TU",
    },
    {
        name: 'Shivam Datta Purkayastha',
        url: "https://media-exp1.licdn.com/dms/image/C5603AQEnP4CjCPZcgw/profile-displayphoto-shrink_100_100/0/1600079811803?e=1639612800&v=beta&t=0HHls9jz75U7P0SV0z7s4JYvewW96aujl4Jh_8fZ-TU",
    }
    ]);
    const swiped=(direction,nameToDelete)=>{
        // setLastDirection(direction);

    }
    const outOfFrame=(name)=>{
        console.log("left on the screen");
        
    }
    

    return (
        <div className="tinderCards">
            <div className="tinderCard_cardContainer">
                {people.map((person) => {
                    // console.log(person.url);

                    return <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                    
                    >
                    <div style={{backgroundImage:`url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
                })}

            </div>

        </div>
    )
}

export default TinderCards
