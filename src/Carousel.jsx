import { useState, useEffect } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const Carousel = () => {
  // one person
  // const [people, setPeople] = useState(shortList);
  // list of people - we have all people on the top of each other
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  // for logic we will use css transform(100%)
  const prevSlide = () =>
    setCurrentPerson((curr) => (curr - 1 + people.length) % people.length);

  const nextSlide = () =>
    setCurrentPerson((curr) => (curr + 1) % people.length);

  useEffect(() => {
    let sliderId = setInterval(() => nextSlide(), 2000);
    sliderId;
    return () => clearInterval(sliderId);
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
          >
            <img className="person-img" src={image} alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button
        type="button"
        className="prev"
        onClick={() => prevSlide(currentPerson)}
      >
        <FaAngleLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FaAngleRight />
      </button>
    </section>
  );
};
export default Carousel;
