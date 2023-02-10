import request from "./index";

export async function getAllUser() {
  return request(`/user/user-all`, {
    method: "GET",
  });
}
