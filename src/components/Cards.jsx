import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { FaQuoteRight } from "react-icons/fa"

const Cards = ({ data, next, before, random }) => {
  const { id, name, job, image, text } = data;

  return (
    <article className="review" key={id}>
      <div className="img-container">
        <img className="person-img" src={image} alt={name} /> 
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="btn-container">
        <span className="prev-btn" onClick={before}>
          <TiArrowLeftThick />
        </span>{" "}
        <span className="next-btn" onClick={next}>
          <TiArrowRightThick />
        </span>
      </div>
        <button className="btn" onClick={random}>
          Surprise me
        </button>
     
    </article>
  );
};
export default Cards;
