import { BASE_PATH } from "./next_host";
const headers = {
  "Content-Type": "application/json",
};

//Fetch method
let fetchData = async (endpoint: string, next: any = null) => {
  let options = next !== null ? { headers, next } : { headers };
  // console.log({ BASE_PATH })
  return await (await fetch(`${BASE_PATH}${endpoint}`, options)).json();
};

//post method
let postData = async (endpoint: string, data: any) =>
  await (
    await fetch(`${BASE_PATH}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    })
  ).json();

//update method
let updateById = async (endpoint: string, data: any) =>
  await (
    await fetch(`${BASE_PATH}${endpoint}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers,
    })
  ).json();

//delete method
let deleteById = async (endpoint: string) =>
  await (
    await fetch(`${BASE_PATH}${endpoint}`, { method: "DELETE", headers })
  ).json();

//delete method
let goRevalidate = async (path: string) =>
  await (
    await fetch(
      `${BASE_PATH}/api/revalidate/?token=${process.env.NEXT_PUBLIC_REVALIDATE_TOKEN}&path=${path}`,
      { method: "DELETE", headers }
    )
  ).json();

export { fetchData, postData, deleteById, updateById, goRevalidate };
