import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadProducts } from "../../app/features/productsSlice";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductCardSkeleton } from "../ProductCard/ProductCardSkeleton/ProductCardSkeleton";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { setIsOpened } from "../../app/features/modalSlice";

export const ProductListView = () => {
  const [sortingOptions, setSortingOptions] = useState({
    alphabetically: false,
    count: false,
  });

  const { products, isLoadingProducts } = useAppSelector(
    (state) => state.productsReducers
  );

  const { isOpened } = useAppSelector(
    (state) => state.modalReducer
  );
  const dispatch = useAppDispatch();

  const getPreparedProducts = useMemo(() => {
    const copy = [...products];

    switch (true) {
      case (sortingOptions.count):
        return copy.sort((cur, next) => next.count - cur.count)
      case (sortingOptions.alphabetically):
        return copy.sort((cur, next) => cur.name.localeCompare(next.name));

      default: return copy;
    }
    
  }, [products, sortingOptions.alphabetically, sortingOptions.count])

  useEffect(() => {
    dispatch(loadProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="product-page">
      <div className="product-page__top">
        <select onChange={event => {
          setSortingOptions({ ...sortingOptions, [event.target.value]: true });
        }} className="product-page__select">
          <option
            value="alphabetically"
          >
            Alphabetically
          </option>
          <option
            value="count"
          >
            By count
          </option>
        </select>

        <button
          className="product-page__button"
          onClick={() => {
            dispatch(setIsOpened(true));
          }}
        >
          Add Product
        </button>
      </div>

      {isOpened && <ModalWindow />}

      {isLoadingProducts ? (
        <div className="product-page__list">
          <ProductCardSkeleton />

          <ProductCardSkeleton />

          <ProductCardSkeleton />

          <ProductCardSkeleton />
        </div>
      ) : (
        <div className="product-page__list">
          {getPreparedProducts.map((item) => (
            <ProductCard key={item.id} details={item} />
          ))}
        </div>
      )}
    </section>
  );
};
