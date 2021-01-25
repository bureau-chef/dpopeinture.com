import { useEffect } from 'react'
import Image from 'next/image'

import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { Parallax, Background } from 'react-parallax'

import { gsap, Power3 } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Header(props) {
    
    useEffect(() => {
        gsap.from('#Header', {
            autoAlpha: 0,
            ease:Power3.easeInOut,
            duration: 1
        })
        gsap.from('#Logo', {
            autoAlpha: 0,
            ease:Power3.easeInOut,
            delay:.75,
            duration: .75
        })
    }, [])

    return (
        <header id="Header">

            <Parallax strength={500}>
                
                <Row center='xs' middle='xs' style={{height: '50vh'}}>
                    <Col xs={12}>
                        <div id="Logo">
                            <Image
                                src='/DPO-Peinture-Logo.svg'
                                alt='DPO Peinture Inc. - Votre projet, notre expertise.'
                                width={581}
                                height={311}
                            />
                        </div>
                    </Col>
                </Row>
                
                <Background>
                    <div style={{
                        width: '100vw',
                        maxWidth: '100%',
                        height: '50vh', 
                        backgroundImage: 'url("/DPO-Peinture-Inc-Background.jpg")', 
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        opacity: '.5',
                    }}>
                    </div>
                </Background>

            </Parallax>
            
        </header>
    )
}

export default Header