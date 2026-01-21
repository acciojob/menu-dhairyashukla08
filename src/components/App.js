import React, { useState } from 'react';
import '../styles/App.css';

const menuData = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    testId: 'menu-item-breakfast'
  },
  {
    id: 2,
    title: 'Diner Double',
    category: 'lunch',
    price: 13.99,
    img: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    testId: 'menu-item-lunch'
  },
  {
    id: 3,
    title: 'Godzilla Milkshake',
    category: 'shakes',
    price: 6.99,
    img: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    testId: 'menu-item-shakes'
  },
  {
    id: 4,
    title: 'Country Delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    testId: 'menu-item-breakfast'
  },
  {
    id: 5,
    title: 'Egg Attack',
    category: 'lunch',
    price: 22.99,
    img: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    testId: 'menu-item-lunch'
  },
  {
    id: 6,
    title: 'Oreo Dream',
    category: 'shakes',
    price: 18.99,
    img: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `Portland chicharrones ethical edison bulb, af palo santo lyft. `,
    testId: 'menu-item-shakes'
  }
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menuData);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menuData);
      return;
    }
    const newItems = menuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main id="main">
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <div className="btn-container">
          <button type="button" className="filter-btn" onClick={() => filterItems('all')}>
            All
          </button>
          <button type="button" className="filter-btn" id="filter-btn-1" onClick={() => filterItems('breakfast')}>
            Breakfast
          </button>
          <button type="button" className="filter-btn" id="filter-btn-2" onClick={() => filterItems('lunch')}>
            Lunch
          </button>
          <button type="button" className="filter-btn" id="filter-btn-3" onClick={() => filterItems('shakes')}>
            Shakes
          </button>
        </div>

        <div className="section-center">
          {menuItems.map((item) => {
            const { id, title, img, desc, price, testId } = item;
            return (
              <article key={id} className="menu-item" data-test-id={testId}>
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default App;

