import { useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const Carousel = () => {
  // one person
  // const [people, setPeople] = useState(shortList);
  // list of people - we have all people on the top of each other
  const [people, setPeople] = useState(list);

  const prevSlide = () => {
    console.log('prev');
  };
  const nextSlide = () => {
    console.log('next');
  };

  return (
    <section className="slider-container">
      {people.map((person) => {
        const { id, image, name, title, quote } = person;
        return (
          <article key={id} className="slide">
            <img className="person-img" src={image} alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
            <button type="button" className="prev" onClick={prevSlide}>
              <FaAngleLeft />
            </button>
            <button type="button" className="next" onClick={nextSlide}>
              <FaAngleRight />
            </button>
          </article>
        );
      })}
    </section>
  );
};
export default Carousel;
