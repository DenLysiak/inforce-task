import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setIsOpened } from "../../app/features/modalSlice";
import { ProductDetails } from "../../types/types";
import { setNewProducts } from "../../app/features/productsSlice";

export const ModalWindow = () => {
  const dispatch = useAppDispatch()

  const [inputValues, setInputValues] = useState({
    link: '',
    name: '',
    count: 0,
    weight: '',
    height: 0,
    width: 0,
    comment: '',
  });

  const newProduct: ProductDetails = {
    id: 0,
    imageUrl: inputValues.link,
    name: inputValues.name,
    count: inputValues.count,
    weight: inputValues.weight,
    size: {
      height: inputValues.height,
      width: inputValues.width,
    },
    comments: [inputValues.comment],
  };

  const isFilledAllValues = () => {
    return Object.values(inputValues).every(v => v);
  }

  const onChangeHandler = (property: string, value: string | number) => {
    setInputValues({ ...inputValues, [property]: value });
  };

  return (
    <form action="" className="modal"
      onSubmit={event => {
        event.preventDefault();

        console.log(isFilledAllValues());
  
        if (isFilledAllValues()) {
          dispatch(setNewProducts(newProduct));
        } else {
          alert("Please enter all fields");
        }

        dispatch(setIsOpened(false));
      }}
    >
      <input
        type="text"
        placeholder="Enter image URL"
        onChange={(event) => {
          onChangeHandler("link", event.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product name"
        onChange={(event) => onChangeHandler("name", event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter product count"
        onChange={(event) => onChangeHandler("count", event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter product weight"
        onChange={(event) => onChangeHandler("weight", event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter product height"
        onChange={(event) => onChangeHandler("height", event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter product width"
        onChange={(event) => onChangeHandler("width", event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter comment"
        onChange={(event) => onChangeHandler("comment", event.target.value)}
      />

      <div className="modal__buttons">
        <button type="submit">Add</button>

        <button
          type="reset"
          onClick={() => {
          dispatch(setIsOpened(false));
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};