import axios from "axios";

export const getCustomer = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/customers/${id}`);
  return data;
};

export const deposit = async (id, amount) => {
  const { data } = await axios.put(
    `http://localhost:3000/customers/${id}/deposit`,
    { amount }
  );
  return data;
};
