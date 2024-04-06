import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card bg-base-100 shadow-xl border-b mb-16">
      <figure>
        <img className="" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 2000)}{" "}
            <Link to={`/news/${_id}`} className="text-primary font-bold">
              Read more...
            </Link>
          </p>
        ) : (
          <p>{details.length}</p>
        )}
        <p></p>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.object,
};
