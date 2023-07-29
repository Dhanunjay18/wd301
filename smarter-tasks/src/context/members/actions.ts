import { API_ENDPOINT } from '../../config/constants';


export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  
  try {
    dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching members:', error);
    dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: 'Unable to load members' });
  }
};

export const addMember = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },

      body: JSON.stringify(args), 
    });
    if (!response.ok) {
      throw new Error('Failed to create member');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message }
    }
    console.log(data)
    dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data.user });

    return { ok: true }
  } catch (error) {
    console.error('Failed to add member', error);
    return { ok: false, error }
  }
};

export const deleteMember = async (dispatch: any, args: number) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    console.log("Delete Member function args : ", args)
    const response = await fetch(`${API_ENDPOINT}/users/${args}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Failed to Delete member');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message }
    }
    dispatch({ type: 'DELETE_MEMBER_SUCCESS', payload: args });
    return { ok: true }
  } catch (error) {
    console.error('Failed to DELETE member', error);
    return { ok: false, error }
  }
};