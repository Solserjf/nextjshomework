import {ICar} from "@/models/ICar";

type CartItemProps = {
    item: ICar;
}
export const CarItem = ({item}:CartItemProps) => {

    return (
        <div>
            {item.id} {item.brand} {item.year} {item.price}
        </div>
    );
};