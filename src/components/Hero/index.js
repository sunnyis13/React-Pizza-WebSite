import React, { useState } from 'react'
import Sidebar from '../Sidebar/index'
import Navbar from '../Navbar'
import { 
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
     } 
     from './HeroElements'

function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        Greatest Pizza Ever
                    </HeroH1>
                    <HeroP>
                        Ready in 60 seconds
                    </HeroP>
                    <HeroBtn>
                        PlaceOrder
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}
export default Hero