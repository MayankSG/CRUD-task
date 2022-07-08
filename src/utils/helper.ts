export const paginate = (array: any, page: any, count: any) => {
	return array.slice((page - 1) * count, page * count);
};
