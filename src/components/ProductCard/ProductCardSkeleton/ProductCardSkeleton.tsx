export const ProductCardSkeleton = () => {
  return (
    <div className="card card--skeleton carousel__card">
      <div className="card__top">
        <div className="card__img card__img--skeleton" />

        <p className="card__title card__title--skeleton"></p>

      </div>

      <div className="card__bottom">
        <div className="card__details">
          <div className="card__detail">
            <p className="card__text card__text--skeleton" />
          </div>

          <div className="card__detail">
            <p className="card__text card__text--skeleton" />
          </div>

          <div className="card__detail">
            <p className="card__text card__text--skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
};