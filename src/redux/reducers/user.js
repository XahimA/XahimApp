import * as UserACtionTypes from '../action types/userActionTypes';
const initilState = {
    name: "rashid",
    id: "",
    firsName: "",
    lastName: "",
};

// export const SET_NAME = "SET_NAME";
// export const SET_ID = "SET_ID";
// export const SET_FIRSNAME = "FIRSNAME";
// export const LASTNAME = "LASTNAME";
// export const SET_EMAIL = "SET_EMAIL";
// export const SET_FIREBASEUID = "SET_FIREBASEUID";
// export const SET_MESSAGETOKEN = "MESSAGETOKEN";
// export const SET_BUISNESSNAME = "BUISNESSNAME";
// export const SET_GSTNUMBER = "GSTNUMBER";
// export const SET_OWNERCONTACTNUMBER = "OWNERCONTACTNUMBER";
// export const SET_BUYERCONTACTNUMBER = "BUYERCONTACTNUMBER";
// export const SET_DELIVERYCONTACTNUMBER = "DELIVERYCONTACTNUMBER";
// export const SET_ACCOUNTSCONTACTNUMBER = "ACCOUNTSCONTACTNUMBER";

const user = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {


        case UserActionTypes.SET_ID:
            return {
                ...state,
                id: payload,
            };
        case UserActionTypes.SET_NAME:
            return {
                ...state,
                name: payload,
            };
        case UserActionTypes.SET_EMAIL:
            return {
                ...state,
                email: payload,
            };
        case UserActionTypes.SET_CONTACTNO:
            return {
                ...state,
                contactNo: payload,
            };
        case UserActionTypes.SET_REGISTERTOKEN:
            return {
                ...state,
                registerToken: payload,
            };
        case UserActionTypes.SET_USERPHONENO:
            return {
                ...state,
                userPhoneNo: payload,
            };


        default:
            return state;
    }
};

export default user;