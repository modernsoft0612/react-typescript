/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import theme from '../../styles/theme'

const projects = [
    {
        name: 'Spokestack',
        image: require("../../assets/projects/spokestack.png"),
        link: 'https://spokestack.io/',
        tags: ['NextJS', 'Node',"Websocket", 'SASS'],
        description:'Spokestack is a powerful platform of open source libraries and robust services to make your software fully voice-enabled. Get started with open-source libraries that add speech recognition, text-to-speech, and language understanding to your software with one simple cross-platform API. We offer SDKs for different platforms that let you manage voice interactions inside your software.'
    },
    {
        name: 'Faevva Pay',
        image: require("../../assets/projects/tcn.png"),
        link: 'http://tcn.webbb.site/',
        tags: ['React', 'ThreeJS', 'Node',"MongoDB"],
        description:'Designed in Bolzano, Italy, artfully crafted, and polished by hand, Penarosa wants nothing less than making wristwatches for the most fashionable wrists. The project was to build the online eCommerce platform with a fancy 3D simulator.'
    },
    {
        name: 'Wasil-iq',
        image: require("../../assets/projects/wasil.png"),
        link: 'https://wasil-iq.com/ON/',
        tags: ['PHP', 'MySQL','Javascript', 'Paypal','Stripe'],
        description: 'Wasil is the first and the biggest fully automated shipping company in Iraq. They at Wasil aim to bring Iraq a step closer to the modern world by providing exceptional shipping services to our lovely costumers.'
    }
]

export default function Projects() {

    return (
        <div css={styles} className="container">
            <h3>A few of my projects</h3>
            <div className="row" >
                {
                    projects.map((project, index) => (
                        <div className="col-lg-4" key={index.toString()}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div key={index.toString()} className="project-item">
                                    <img src={project.image} alt={project.name}/>
                                    <h5>{project.name}</h5>
                                    <div className="description">
                                        {project.description}
                                    </div>
                                    <div className={'flex-wrap'}>
                                        {
                                            project.tags.map((tag, index) => {
                                                return (
                                                    <span className="badge badge-green" key={index.toString()}>
                                             {tag}
                                        </span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const styles = css`
  width: 96%;
  margin: 30px auto 0 auto;
  
  a{
    display: block;
    height: 100%;
  }
  
  .project-item{
    width: 100%;
    background-color: white;
    border-radius: ${theme.borderRadiusDefault};
    padding: 10px;
    height: inherit;
    
    img{
      width: 100%;
      object-fit: contain;
    }
    .description{
      margin: 10px 0;
    }
  }
`