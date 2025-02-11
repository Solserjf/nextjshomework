"use client";

import { useState } from "react";
import { addCar } from "@/services/api.service";
import { useRouter } from "next/navigation";
import axios from "axios";

const CreateFormCarPage = () => {
    const [car, setCar] = useState({ brand: "", price: "", year: "" });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addCar({
                brand: car.brand,
                price: Number(car.price),
                year: Number(car.year),
            });

            router.push(`/submit?brand=${car.brand}&price=${car.price}&year=${car.year}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error adding car:", error.response?.data || error.message);
            } else {
                console.error("Unexpected error:", error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={car.brand}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={car.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value={car.year}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateFormCarPage;
