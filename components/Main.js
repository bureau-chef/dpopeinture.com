import { useEffect } from 'react'
import Image from 'next/image'

import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { Parallax, Background } from 'react-parallax'

import { gsap, Power3 } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Main(props) {

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
        })
        gsap.from('#Home-title', {
            autoAlpha: 0,
            ease:Power3.easeInOut,
            delay:.65,
            duration: .5
        })
        gsap.from('#Language', {
            x: '-5px', 
            autoAlpha: 0,
            ease:Power3.easeInOut,
            delay:.85,
            duration: .5
        })
        gsap.from('.scroll-anim-cont', {
            y: '-5px', 
            opacity: 0,
            ease:Power3.easeInOut,
            delay:.95,
            duration: .5,
            onComplete: scrollAnimTrigger
        }) */
    }, [])

    return (
        <main id="Content" className="section">
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
            </div>
            
            
        </main>
    )
}

export default Main