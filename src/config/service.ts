import axios from "axios";

import { FormInputs } from "../components/Form/Form.types";
import config from "./config";

export const getItems = () => {
	return axios.get(`${config.baseUrl}/posts`);
};

export const createItem = (body: FormInputs) => {
	return axios.post(`${config.baseUrl}/posts`, body);
};

export const updateItem = (id: string, body: FormInputs) => {
	return axios.put(`${config.baseUrl}/posts/${id}`, body);
};

export const getItem = (id: string) => {
	return axios.get(`${config.baseUrl}/posts/${id}`);
};

export const removeItem = (id: string) => {
	return axios.delete(`${config.baseUrl}/posts/${id}`);
};
