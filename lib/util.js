import {
    FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton, WhatsappIcon, WhatsappShareButton, WorkplaceIcon, WorkplaceShareButton
} from "react-share"

import { useRouter } from 'next/router'

export function Imgsmp(props) {

    const addmedia = (value) => {
        let temp = ""

        if (value.includes('http')) {
        return props.src
        }    

            if (!value.includes('/media')) {
                temp = '/media' + props.src
            }
        
        return temp
    }


    return (
        <>
            <br />
            <div className=" centro boximages">
                <img className="responsive" src={addmedia(props.src) || "/TODO.JPG"} alt={props.src || "/TODO.JPG"} />
            </div>
            <br />
        </>
    )
}



export function Codeblock(props) {
    return (
        <>
            <div className="codeblock">
                {`${props.code}`}
            </div>
        </>
    )
}


export const getFullAddress = () => {
    const rroute = useRouter()
    return "https://gilsonpaulo.com.br" + rroute.route
}



/**requeres props quote, hashtag, shareUrl */
export function Sharegroup(props) {
    const rroute = useRouter()

    const shareUrl = props.shareUrl || "https://gilsonpaulo.com.br" + rroute.route
    const quote = props.quote || "Confira este artigo de GPWeb."
    const hashtag = props.hashtag || "#GPWEB_POST"
    const size = props.size || 32
    const round = props.round || false

    return (
        <>
            <br />

            <FacebookShareButton quote={quote} hashtag={hashtag} url={shareUrl}>
                <FacebookIcon size={size} round={round} />
            </FacebookShareButton>

            <WorkplaceShareButton quote={quote} hashtag={hashtag} url={shareUrl}>
                <WorkplaceIcon size={size} round={round} />
            </WorkplaceShareButton>

            <LinkedinShareButton quote={quote} hashtag={hashtag} url={shareUrl}>
                <LinkedinIcon size={size} round={round} />
            </LinkedinShareButton>

            <TwitterShareButton quote={quote} hashtag={hashtag} url={shareUrl}>
                <TwitterIcon size={size} round={round} />
            </TwitterShareButton>

            <WhatsappShareButton quote={quote} hashtag={hashtag} url={shareUrl}>
                <WhatsappIcon size={size} round={round} />
            </WhatsappShareButton>

            <br />
            {/* <style jsx>{`
            
            `}</style> */}
        </>
    )
}



/**A props URL deve terminar com o código do vídeo contendo 11 caracteres*/
export function ResponsiveIframe(props) {

    var embebed = props.url.substr(props.url.length - 11);
    return (
        <>

            <div className="container">
                <iframe
                    className="responsive-iframe"
                    width="560" height="315"
                    src={`https://www.youtube.com/embed/${embebed}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <style jsx>{`
            .container {
                position: relative;
                overflow: hidden;
                width: 100%;
                padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
              }
              
              /* Then style the iframe to fit in the container div with full height and width */
              .responsive-iframe {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
              }
            `}</style>
        </>
    )
}