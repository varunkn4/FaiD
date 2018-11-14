
const defaultState = {
    basicDetails: {},
    dietDetails: {},
    secondaryDetails: {},
    healthDetails: {},
    registerStatus:{}
};

export default (state = {}, action) => {
    switch (action.type) {

        case 'REGISTRATION:NEW_USER':
            return { ...state, defaultState }

        case 'REGISTRATION:BASICDATA:SET':
            return { ...state, basicDetails: action.data }
        case 'REGISTRATION:SECDATA:SET':
            return { ...state, secondaryDetails: action.data }
        case 'REGISTRATION:HEALTHDATA:SET':
            return { ...state, healthDetails: action.data }
        case 'REGISTRATION:DIETDATA:SET':
            return { ...state, dietDetails: action.data }
        
        case 'REGISTRATION:NEW_USER:SUCCESS':
            return { ...state, registerStatus: action.data} 
        case 'REGISTRATION:NEW_USER:ERROR':
            return { ...state, registerStatus: action.data}       
        default:
            return state;
    }
};
