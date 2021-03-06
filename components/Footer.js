import { useEffect } from 'react'
import Image from 'next/image'

import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

import { gsap, Power3 } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Footer(props) {
    
    useEffect(() => {
        gsap.from('#Footer', {
            scrollTrigger: {
                trigger: '#Footer',
                start: 'top bottom-=50px',
                toggleActions: "play none none none"
            },
            autoAlpha: 0,
            ease:Power3.easeInOut,
            duration: 1.5
        })
    }, [])

    return (
        <footer id="Footer" className="section">
            <div className="wrapper">
                <Row center="xs" start="sm" middle="xs">
                    <Col sm={12} md={6}>
                        <span>
                            <Image
                                src='/regie-du-batiment-du-quebec-rbq-vector-logo.svg'
                                alt='Régie du bâtiment du Québec'
                                width={150}
                                height={65}
                            />
                        </span>
                    </Col>
                    <Col sm={12} md={6}>
                        <p>
                            RBQ : 5787-2350-01<br />
                            © DPO Peinture Inc.
                        </p>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer