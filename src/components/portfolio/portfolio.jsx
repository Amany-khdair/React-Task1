import cabin from './../../assets/protfolio/cabin.png';
import cake from './../../assets/protfolio/cake.png';
import circus from './../../assets/protfolio/circus.png';
import game from './../../assets/protfolio/game.png';
import safe from './../../assets/protfolio/safe.png';
import submarine from './../../assets/protfolio/submarine.png';
import './portfolio.css'

function Portfolio() {
  const items = [
    { id: 1, img: cabin, title: "cabin" },
    { id: 2, img: cake, title: "cake" },
    { id: 3, img: circus, title: "circus" },
    { id: 4, img: game, title: "game" },
    { id: 5, img: safe, title: "safe" },
    { id: 6, img: submarine, title: "submarine" }
  ];

  return (
    <section id="portfolio" className="py-4">
      <div className="container">
        <h2 className="text-center text-text-uppercase fs-1 p-color my-5 by-5">Portfolio</h2>
        <div className="row g-4">
          {items.map(item => (
            <div key={item.id} className="col-sm-6 col-md-4">
              <div className="card">
                <img src={item.img} className='card-img' alt={item.title} />                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
