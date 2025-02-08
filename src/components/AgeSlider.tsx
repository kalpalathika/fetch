import RangeSlider from "react-range-slider-input";
import { Fragment } from "react/jsx-runtime";
import "react-range-slider-input/dist/style.css";


export const AgeSlider = () => {
    return (
        <Fragment>
            <div>
                <p className="mb-4">Dog Age</p>
                <RangeSlider min={1} max={15} step={1} value={[1, 15]} />
                <p className="mt-4"> Selected Age is between </p>
            </div>
        </Fragment>
    )
}