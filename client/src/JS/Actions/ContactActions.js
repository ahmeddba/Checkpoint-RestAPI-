import axios from "axios";
import { GET_CONTACTS_FAIL,GET_CONTACTS_LOAD,GET_CONTACTS_SUCCESS, GET_ONE_CONTACT } from "../ActionTypes/ContactActionTypes";

//get all contacts
export const getContacts = () => async (dispatch) => {
    dispatch({ type: GET_CONTACTS_LOAD });
    try {
        const response = await axios.get("/api/persons/getAllPersons");
        dispatch({ type: GET_CONTACTS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
    }
};

//Add contact
export const ajoutContact = (newContact) => async (dispatch) => {
    try {
       const result = await axios.post("/api/persons/newperson", newContact);
        dispatch({type:GET_CONTACTS_SUCCESS , payload: result.data});
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
    }
}

//delete contact
export const deleteContact = (id) => async (dispatch) => {
try {
    await axios.delete(`/api/persons/deletePersonById/${id}`);
dispatch(getContacts());
} catch (error) {
dispatch({type:GET_CONTACTS_FAIL , payload:error.response.data})
}
}

//get one contact
export const getOneContact = (id) => async (dispatch) => {
    dispatch({type:GET_CONTACTS_LOAD});
    try {
        const result = await axios.get(`/api/persons/getPersonById/${id}`);
        dispatch({type:GET_ONE_CONTACT , payload:result.data});
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL , payload:error.response.data})
    }
}

//edit contact
export const editContact = (id , editedContact) => async (dispatch) => {
    try {
        await axios.put(`/api/persons/updateById/${id}`, editedContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL , payload:error.response.data})
    }
}
