"use client";
import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPrice } from "@/redux/features/filter";
const PriceFilter: React.FC = () => {
  const MIN_PRICE = useAppSelector((state) => state.filter.filter.minPrice); // get min price from redux
  const MAX_PRICE = useAppSelector((state) => state.filter.filter.maxPrice); // get max price from redux

  const dispatch = useAppDispatch();
  const values = [MIN_PRICE, MAX_PRICE]; // set values to min and max price
  console.log(values);
  const STEP = 1;
  const MIN = 0;
  const MAX = 100000;

  const handlePriceChange = (values: number[]) => {
    dispatch(setPrice({ min: values[0], max: values[1] }));
  };
  return (
    <div className="py-4">
      <h1 className="text-lg pb-2">Price</h1>
      <div className="flex justify-center flex-wrap mx-4 my-8">
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="h-2.5 flex w-full"
            >
              <div
                ref={props.ref}
                className="h-1.5 w-full rounded-md self-center"
                style={{
                  background: getTrackBackground({
                    values,
                    colors: ["#ccc", "#406939", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => {
            const { key, ...restProps } = props;
            return (
              <div
                key={key}
                {...restProps}
                className="h-5 w-5 rounded bg-white flex justify-center items-center shadow-md"
              >
                <div className="absolute -top-7 text-white font-bold text-sm bg-main-main px-1 py-0.5 rounded">
                  {values[index].toFixed(0)}
                </div>
                <div
                  className={`h-4 w-1.5 ${
                    isDragged ? "bg-main-main" : "bg-gray-300"
                  }`}
                />
              </div>
            );
          }}
        />
        <output className="mt-3">
          Price: ${values[0].toFixed(0)} - ${values[1].toFixed(0)}
        </output>
      </div>
    </div>
  );
};

export default PriceFilter;
