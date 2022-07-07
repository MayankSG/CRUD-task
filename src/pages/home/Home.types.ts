export type HomeProps = {
  items: ItemProps[];
};

export type ItemProps = {
	id: string;
	userId: string;
	title: string;
	body: string;
};