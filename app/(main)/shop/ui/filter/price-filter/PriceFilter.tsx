"use client";
import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPrice } from "@/redux/features/filter";
import { CiFilter } from "react-icons/ci";
const PriceFilter: React.FC = () => {
  const MIN_PRICE = useAppSelector((state) => state.filter.filter.minPrice); // get min price from redux
  const MAX_PRICE = useAppSelector((state) => state.filter.filter.maxPrice); // get max price from redux
  const dispatch = useAppDispatch();
  const values = [MIN_PRICE || 0, MAX_PRICE || 0]; // set values to min and max price
  const STEP = 1;
  const MIN = 0;
  const MAX = 100000;

  const [localValues, setLocalValues] = React.useState(values); // set local values to min and max price
  const handlePriceChange = (newValues: number[]) => {
    setLocalValues(newValues);
  };

  const applyPriceFilter = () => {
    dispatch(setPrice({ min: localValues[0], max: localValues[1] }));
  };

  return (
    <div className="py-4">
      <h1 className="text-lg pb-2">Price</h1>
      <div className="flex flex-col items-center mx-1 my-8">
        <Range
          values={localValues}
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
                    values: localValues,
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
                  {localValues[index].toFixed(0)}
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
        <div className="flex justify-between items-center mt-4 gap-2">
          <output className="text-sm">
            Price: ${localValues[0].toFixed(0)} - ${localValues[1].toFixed(0)}
          </output>
          <div className="lg:tooltip" data-tip="Apply price ">
            <CiFilter
              onClick={applyPriceFilter}
              className="text-main-main text-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
