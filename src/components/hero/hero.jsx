import avatar from './../../assets/avatar.svg';
import './hero.css';


function Hero(){
    return (
    <header id="hero" className="py-5 my-5 text-center">
      <div className="container d-flex align-items-center flex-column justify-content-center">
        <img src={avatar} alt="avatar" className="rounded-circle mb-3 avatar"/>
        <h1 className="display-5 text-text-uppercase fw-bold">START BOOTSTRAP</h1>
        <div className="line mx-auto my-3 fw-bold"></div>
        <p className="lead fw-semibold">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );

}

export default Hero;
