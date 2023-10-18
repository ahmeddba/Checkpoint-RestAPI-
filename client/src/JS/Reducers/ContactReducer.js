//inialState

import { GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, GET_ONE_CONTACT } from "../ActionTypes/ContactActionTypes";

const initialState = {
    contacts: [],
    errors: null,
    loadContacts: false,
    succesContacts: null,
    oneContact:{}
}

//pure function
const ContactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CONTACTS_LOAD:
            return { ...state, loadContacts: true, oneContact:{} };
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                loadContacts: false,
                contacts: payload.success.persons || [],
                succesContacts: payload.success ? payload.success.msg : null,
                oneContact:{}
            };
            
            case GET_ONE_CONTACT:
                return {...state , loadContacts:false , oneContact:payload.person}
        case GET_CONTACTS_FAIL:
            return { ...state, loadContacts: false, errors: payload ? payload : null, oneContact:{} };
        default:
            return state;
    }
};


 export default ContactReducer;
