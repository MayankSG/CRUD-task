import { ItemProps } from "../pages/home/Home.types";

export const paginate = (array: ItemProps[], page: number, count: number) => {
	return array.slice((page - 1) * count, page * count);
};
