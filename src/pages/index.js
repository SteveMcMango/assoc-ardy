import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import YouTube from 'react-youtube-embed'
import AssociationArdevazPDF from '../assets/images/AssociationArdevazPDF.jpg'



// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'
import thumb09 from '../assets/images/thumbs/09.jpg'
import thumb10 from '../assets/images/thumbs/10.jpg'
import thumb11 from '../assets/images/thumbs/11.jpg'
import thumb12 from '../assets/images/thumbs/12.jpg'




import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/fulls/07.jpg'
import full08 from '../assets/images/fulls/08.jpg'
import full09 from '../assets/images/fulls/09.jpg'
import full10 from '../assets/images/fulls/10.jpg'
import full11 from '../assets/images/fulls/11.jpg'
import full12 from '../assets/images/fulls/12.jpg'







const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01},
    { id: '2', src: full02, thumbnail: thumb02},
    { id: '3', src: full03, thumbnail: thumb03},
    { id: '4', src: full04, thumbnail: thumb04},
    { id: '5', src: full05, thumbnail: thumb05},
    { id: '6', src: full06, thumbnail: thumb06},
    { id: '7', src: full07, thumbnail: thumb07, caption: 'Ngar-su-taung village, Yangon, Birmanie'},
    { id: '8', src: full08, thumbnail: thumb08, caption: 'Ecole primaire'},
    { id: '10', src: full10, thumbnail: thumb10},
    { id: '11', src: full11, thumbnail: thumb11},
    { id: '9', src: full09, thumbnail: thumb09, caption: 'Bibliothèque'},
    { id: '12', src: full12, thumbnail: thumb12}








];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                   
                        <header className="major">

                        <YouTube id='Kla7aQwa5lM' />

                           
                        </header>

                        <h2 style={{ margin: "2rem auto" }}>Nous avons pu accueillir 130 étudiants pour cette rentrée scolaire… <br />grâce à vous ! MERCI

                        </h2>
                        <p><em style={{fontSize: "0.5 rem"}}>mise à jour: mai 2018</em></p>
                        <p><em style={{color: "black"}}>"Nous n’étudions pas pour l’école, mais pour la vie !"</em></p>
                        <p>Depuis 38 ans, l’Ecole Ardévaz défend ce crédo qui va bien au-delà du slogan! En effet, l’Ecole s’efforce d’offrir un enseignement de qualité qui permet à des jeunes d’obtenir un bagage solide, pour leur avenir. Et ce, quelque soit leur parcours ou leur origine, en plaçant l’humain au centre.</p>
                        <p>En créant l’association Ardévaz, l’Ecole a voulu aller encore plus loin en bâtissant un véritable pont entre la Suisse et un pays défavorisé, le Myanmar.</p>
                        <p>Chaque année, des enfants doivent mettre un terme à leurs études pour des raisons extrascolaires (pauvreté, répression, ethnique, …).</p>
                        <p>Aussi, notre volonté est de supporter des projets éducatifs ; modestes mais concrets. Nous avons construit une structure d’accueil dans un temple bouddhiste (pour la protection) avec des infrastructures qui permettent la dispense de formations, par l’intermédiaire d’enseignants locaux (des moines), à des enfants d’une des régions les plus pauvres du monde. Cette action concrète, par les travaux réalisés (salles de classes, toilettes, vestiaires, …) et une aide réelle dans le suivi des études (qualité des cours, enseignement de l’Anglais) remplissent la mission de l’association Ardévaz.</p>

                    </section>

                    <section id="two">
                        <p>Si comme nous, vous voulez permettre à un enfant d’avoir la possibilité d’aller à l’école, aidez-nous à poursuivre ces projets… qui sont des investissements pour la vie…</p>
                    
                        <p style={{color: "magenta"}}>Budget 2018 pour 130 étudiants: USD 8000</p>

                        <h3 style={{color: "magenta"}}>Pour nous aider Compte: Association Ardévaz<br />

IBAN: CH05 8057 2000 0222 8573 0<br />

Banque: Raiffeisen


 </h3>

</section>

<section id="three">

<img src={AssociationArdevazPDF} alt="Ardevaz update" />;

</section>

                    <section id="four">

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    
                    </section>

                    <section id="five">
                        <h2>Contact – Groupe Ardévaz
                        </h2>
                        <p></p>
                        <div className="row">
                        
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Rue des Amandiers 10,<br />
                                        1950 SION-SUISSE
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Tél</span></h3>
                                        (+41) 27/322.78.83
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Courriel</span></h3>
                                        <a href="mailto:info@ardevaz.com">info@ardevaz.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
