import { Present } from "../elements/present"

const itemPresent = [
    { src:`${process.env.PUBLIC_URL}/room1.jpg`, alt: 'room', back:`${process.env.PUBLIC_URL}/fgrad.jpg`, text:'Living room'},
    { src:`${process.env.PUBLIC_URL}/room2.jpg`, alt: 'room', back:`${process.env.PUBLIC_URL}/fgrad.jpg`, text:'Working cabinet'},
    { src:`${process.env.PUBLIC_URL}/room3.jpg`, alt: 'room', back:`${process.env.PUBLIC_URL}/fgrad.jpg`, text:'Antechamber'},
]


export const About = () => {

    return ( 
        <div className="about">
            <div className="about-title">
                <h1 className="about-title-text">Interior Plant Reference</h1>
                <p className="about-title-text-span">make your home so comfortable with refreshing plants</p>
            </div>
            <div className="about-card">
                <Present itemPresent={itemPresent}/>
            </div>
        </div>
    )
}