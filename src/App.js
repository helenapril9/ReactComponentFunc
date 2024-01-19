import './App.css';

const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  };
  
function ShopItemFunc(props) {
    return (
    <div className="main-content">
        <h2>{props.brand}</h2>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <div className="description">{props.descriptionFull}</div>
        <div className="highlight-window mobile">
            <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
            <div className="price">{props.currency}{props.price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
        </div>
    </div>
    )
};

function App() {
  return(
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
    <ShopItemFunc brand={item.brand} title={item.title} description={item.description} descriptionFull={item.descriptionFull} price={item.price} currency={item.currency}/>      
    </div>
  </div>
);
}

export default App;
