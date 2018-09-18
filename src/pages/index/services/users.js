import request from '../../../utils/request';

export async function fetchUserById({ id = 1 }) {
  return request(`/api/users/${id}`);
}