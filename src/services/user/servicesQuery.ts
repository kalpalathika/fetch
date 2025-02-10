import {  useMutation } from "@tanstack/react-query";
import { loginApi, logoutApi } from "./api";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { favouritesAtom } from "../../store/favouritesStoreAtom";


export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            localStorage.setItem("token",data.token);
            navigate('/home');
        },
        onError: (e) =>
        {
            console.log(e)
        }
    });
};

export const useLogout = () => {
    const navigate = useNavigate();

    const resetFavourites = useResetRecoilState(favouritesAtom);

    return useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            localStorage.removeItem("token")
            resetFavourites()
            navigate('/')

        },
        onError: () => {
            resetFavourites()
            navigate('/')
        }
    })
}
