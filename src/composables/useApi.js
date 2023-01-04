/*
  Neste arquivo ficam as funções de CRUD que podem ser importadas
  em todo projeto quando necessário.
 */
import axios from "axios";

export default function useApi(url) {
  // Get All:
  const list = async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Get one:
  const getById = async (id) => {
    try {
      const { data } = await axios.get(`${url}/${id}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Post:
  const post = async (form) => {
    try {
      const { data } = await axios.post(url, form);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Update:
  const update = async (id, form) => {
    try {
      const { data } = await axios.put(`${url}/${id}`, form);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Delete:
  const excluir = async (id) => {
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
    getById,
    post,
    update,
    excluir,
  };
}
