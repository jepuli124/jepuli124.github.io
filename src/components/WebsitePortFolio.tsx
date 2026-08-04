import React from 'react'
import { ZigZagGrid } from './ZigZagGrid'

interface incomingParams{}

const WebsitePortFolio: React.FC<incomingParams> = () => {
    return (
    <section id='websites'>
        <h2>My github is filled with all kind of projects and here are my better looking websites:</h2>
        <br />    
        <ZigZagGrid items={[
        <p className='zigzagItem'>A site used to inform when I make next party</p>, 
        <p className='zigzagItem'><a href="https://jepuli124.github.io/invitationletter/" target="_blank">Invitation letter</a></p>,

        <p className='zigzagItem'>My self made slotmachine site (WIP)</p>, 
        <p className='zigzagItem'><a href="https://jepuli124.github.io/SlotsAndDice/" target="_blank" >The Slot machine</a></p>,

        <p className='zigzagItem'>A site (WIP)</p>, 
        <p className='zigzagItem'><a href="https://jepuli124.github.io/site/" target="_blank" >The site</a></p>,
        
        <p className='zigzagItem'>Here goblins can talk to each other in secrets.</p>, 
        <p className='zigzagItem'><a href="https://jepuli124.github.io/GoblinForum/" target="_blank" >The Goblin Forum</a></p>,
        
        ]}/>
    </section>
    )
}

export default WebsitePortFolio