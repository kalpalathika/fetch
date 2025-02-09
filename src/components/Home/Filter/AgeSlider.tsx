import RangeSlider from "react-range-slider-input";
import { Fragment } from "react/jsx-runtime";
import "react-range-slider-input/dist/style.css";
import { useRecoilState } from "recoil";
import { ageMaxAtom, ageMinAtom } from "../../../store/filterStoreAtom";

export const AgeSlider = () => {
    const [ageMin, setAgeMin] = useRecoilState(ageMinAtom);
    const [ageMax, setAgeMax] = useRecoilState(ageMaxAtom);

    const handleAgeChange = (ageMin: number, ageMax: number) => {
        setAgeMin(ageMin);
        setAgeMax(ageMax);
    }

    return (
        <Fragment>
            <div>
                <p className="mb-4">Dog Age</p>
                <RangeSlider 
                min={1} max={15} 
                step={1} 
                value={[ageMin,ageMax]} 
                onInput={(input)=>handleAgeChange(input[0],input[1])}
                />
                <p className="mt-4"> Age from {ageMin} to {ageMax} </p>
            </div>
        </Fragment>
    )
}