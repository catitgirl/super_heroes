import './Hero.css';

function Hero (props) {
    return (
        <div className='hero-card'>
            <img src={props.url}></img>
            <div className='hero-name'>{props.name}</div>
            <div className='position'>{props.position}</div>
            <div className='text'>{props.text}</div>
        </div>
    );
}

export default Hero;