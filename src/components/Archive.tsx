import React from 'react'
import { ZigZagGrid } from './ZigZagGrid'

interface incomingParams{}

const Archive: React.FC<incomingParams> = () => {
    return (
    <div>
        <h3>Here is archive of my less appealing websites, these aren't worthy of presentation but I like to archive their links here</h3>
          <ZigZagGrid items={[
            <p>A/B testing site for a UX course (5 min mini site)</p>, 
            <a href="https://jepuli124.github.io/abtesting/" target="_blank">A/B</a>,

            <p>A site for frontend course, looks awful and is more of a responsibility test but includes a simple text based rp game</p>, 
            <a href="https://jepuli124.github.io/SDSfrontend2025course/" target="_blank">Prepare your eyes</a>,

            <p>A site for my cousing asked by his brother, made with love and with ten minutes</p>, 
            <a href="https://jepuli124.github.io/CityboiDENUHateSite/" target="_blank">Denu site</a>,
          ]}></ZigZagGrid>
          <br />
    </div>
    )
}

export default Archive