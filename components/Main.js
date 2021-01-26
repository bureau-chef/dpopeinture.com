import { useEffect } from 'react'
import { Fragment } from 'react'
import Image from 'next/image'

import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { Parallax, Background } from 'react-parallax'

import { gsap, Power3 } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Main(props) {

    const imageContent = {
        img : [
            {
                'src': '/photos/IMG_5776.JPEG',
                'alt': 'DPO Peinture Inc. - Teinture - Escalier',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/A733804F-69EC-4E7F-A75A-4E9AE79CB6BB.JPEG',
                'alt': 'DPO Peinture Inc. - Teinture - Patio - Extérieur',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/IMG_5784-c.jpg',
                'big': '/photos/IMG_5784.JPEG',
                'alt': 'DPO Peinture Inc. - Teinture - Patio - Extérieur',
                'w': 716,
                'h': 716,
                'bigw': 716,
                'bigh': 960,
            },
            {
                'src': '/photos/IMG_5772.JPG',
                'alt': 'DPO Peinture Inc. - Peinture - Intérieur',
                'w': 1200,
                'h': 1200,
            },
            {
                'src': '/photos/IMG_5783.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Revêtement - Extérieur',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/131EBC52-B061-45D1-BA01-AB0AFCEEF7BB.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Intérieur',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/IMG_5779.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Teinture - Extérieur',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/EE6EB1FA-61A6-4C14-BA32-A99DC7D94D05.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Extérieur',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/IMG_5773.JPG',
                'alt': 'DPO Peinture Inc. - Peinture - Intérieur - Escalier',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/16F85998-9ADF-450D-A735-2010446F9E2E.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Extérieur - Porte de garage',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/IMG_5774.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Intérieur - Armoire de cuisine',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/IMG_5780-c.jpg',
                'big': '/photos/IMG_5780.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Intérieur - Commercial',
                'w': 1536,
                'h': 1536,
                'bigw': 2048,
                'bigh': 1536,
            },
            {
                'src': '/photos/IMG_5775.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Intérieur - Brique',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/8ECEE6A5-F70C-41FC-AFED-D07125FA9512.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Extérieur - Brique',
                'w': 2048,
                'h': 2048,
            },
            {
                'src': '/photos/IMG_5679.JPEG',
                'alt': 'DPO Peinture Inc. - Peinture - Extérieur - Brique',
                'w': 2048,
                'h': 2048,
            }
        ]
    }

    /* const router = useRouter() */

    /* function scrollAnimTrigger() {
        gsap.to('.scroll-anim', { 
            scrollTrigger: {
                trigger: '#Service',
                start: 'top bottom-=50px',
                toggleActions: "play none none reverse"
            },
            autoAlpha: 0,
            ease:Power3.easeOut,
            duration: 1,
        })
    } */
    
    useEffect(() => {
        /* gsap.from('#Header', {
            autoAlpha: 0,
            ease:Power3.easeInOut,
            duration: 1.5
        })*/
    }, [])

    return (
        <main id="Content" className="section">

            <div className="circle top"></div>
            <div className="circle bottom"></div>

            <div className="wrapper">
                <Row middle="xs">
                    <Col sm={12} md={7}>
                        <Row>
                            <h1>
                                Entrepreneur peintre
                            </h1>
                        </Row>
                        <Row>
                            <p>
                                Entrepreneur peintre œuvrant principalement sur la rive-sud et la région de Montréal, DPO Peinture Inc. est disponible pour tous vos projets de peinture, petits ou&nbsp;grands. 
                            </p>
                            <p>
                                Que ce soit pour l’intérieur ou l’extérieur, notre équipe chevronnée saura satisfaire vos attentes, aussi élevées soient-elles. Faites confiance à nos experts, ils mettront leurs compétences et leur minutie en œuvre pour réaliser les travaux demandés tout en respectant vos&nbsp;exigences.
                            </p>
                            <p>
                                Contactez-nous dès maintenant et il nous fera grand plaisir de discuter avec vous de votre&nbsp;projet.
                            </p>
                        </Row>
                        <Row>
                            <hr className="spacer" />
                        </Row>
                        <Row>
                            <Col sm={12} md={6}>
                                <h2>
                                   Heures d’ouverture
                                </h2>
                                <p>
                                    Lundi au vendredi de 7h à 18h<br />
                                    Samedi de 8h à 12h
                                </p>
                            </Col>
                            <Col sm={12} md={6}>
                                <h2>
                                    Pour nous joindre
                                </h2>
                                <p>
                                    <span className='icon-phone'></span>(514) 686-7117<br />
                                    <span className='icon-email'></span>dpopeinture@gmail.com
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <hr className="spacer" />
                        </Row>
                        
                    </Col>
                    <Col sm={12} md={4} smOffset={1}>
                        <div className='card'>
                            <h2>
                                Services offerts
                            </h2>
                            <ul>
                                <li>Peinture résidentielle</li>
                                <li>Peinture commerciale</li>
                                <li>Peinture d'armoires de cuisine</li>
                                <li>Peinture de revêtements extérieurs</li>
                                <li>Peinture au fusil</li>
                                <li>Teinture en tout genre</li>
                                <li>Service de design d’intérieur</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row className="mosaic">

                    {imageContent.img.map((IMG, index) => (
                        <Fragment>
                            <Col sm={12} md={2} className='img-thumbnail' >
                                <Image
                                    src={IMG.src}
                                    alt={IMG.alt}
                                    width={IMG.w}
                                    height={IMG.h}
                                    big={IMG.big}
                                    bigw={IMG.bigw}
                                    bigh={IMG.bigh}
                                />
                            </Col>
                       </Fragment>
                    )
                    )}

                </Row>
            </div>
            
        </main>
    )
}

export default Main