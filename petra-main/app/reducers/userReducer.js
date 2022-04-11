const userState = {
    isLoading: false,
    userData: {},
    userForm: {},
    invoiceData: {},
    invoiceForm: {},
    bankData: {},
    bankForm: {}
}

const User = ( state = userState, action )=>{
    switch (action.type) {
        case 'USER_LOAD_DATA':
            return { ...state,
                [action.target]: action.value
            }
        case 'USER_TOGGLE_LOADER':
        return { ...state,
            isLoading: action.isLoading
        }
        default: 
            return {...state};
      }  
}

export default User;