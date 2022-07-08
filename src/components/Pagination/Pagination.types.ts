import { ItemProps } from "../../pages/home/Home.types";

export type PaginationProps = {
	page: number;
	count: number;
	handleChange: (e: any, value: any) => void;
};
