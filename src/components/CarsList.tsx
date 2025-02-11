import {getAllCars} from "@/services/api.service";
import {CarItem} from "@/components/CarItem";


const CarsList = async () => {
const cars = await getAllCars();

    return (
        <div>
            {
                cars.map(item => <CarItem key={item.id} item={item}/>)
            }
        </div>
    );
};
export default CarsList;