import { useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const Carousel = () => {
  // one person
  // const [people, setPeople] = useState(shortList);
  // list of people - we have all people on the top of each other
  const [people, setPeople] = useState(list);

  // for logic we will use css transform(100%)
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
          <article key={id} className="slide next-slide">
            <img className="person-img" src={image} alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FaAngleLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FaAngleRight />
      </button>
    </section>
  );
};
export default Carousel;
