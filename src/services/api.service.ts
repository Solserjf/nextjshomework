
import axios from "axios";
import {ICar} from "@/models/ICar";

const axiosInstance = axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v1',
    headers: {}
});

export const getAllCars = async ():Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>("/cars");
    console.log(axiosResponse);
    const cars =  axiosResponse.data;
    console.log(cars);
    return cars;
}

export const addCar = async (car: ICar) => {
    await axiosInstance.post("/cars", car);
}











