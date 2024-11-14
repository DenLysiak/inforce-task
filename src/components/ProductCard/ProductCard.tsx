/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom";
import { ProductDetails } from "../../types/types";

interface Props {
  details: ProductDetails;
}

export const ProductCard: React.FC<Props> = ({ details }) => {
  const imageUrl = `https://denlysiak.github.io/react_phone-catalog/img/phones/apple-iphone-11/black/00.webp`;

  return (
    <div className="card carousel__card">
      <div className="card__top">
        <img src={imageUrl} alt="the phone" className="card__img" />

        <Link to={"/productView"} className="card__title">
          {details.name}
        </Link>
      </div>

      <div className="card__bottom">
        <div className="card__details">
          <div className="card__detail">
            <p className="card__text">Count</p>

            <p className="card__text card__text--property">{details.count}</p>
          </div>

          <div className="card__detail">
            <p className="card__text">Weight</p>

            <p className="card__text card__text--property">{details.weight}</p>
          </div>

          <div className="card__detail">
            <p className="card__text">Height</p>

            <p className="card__text card__text--property">
              {details.size.height}
            </p>
          </div>

          <div className="card__detail">
            <p className="card__text">Width</p>

            <p className="card__text card__text--property">
              {details.size.width}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
