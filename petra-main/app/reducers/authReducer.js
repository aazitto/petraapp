const authState = {
    isLoading: false,
    loginForm: {
        email: '',
        password: '',
        savePass: false,  
    },
    forgotForm: {
        email: '',
    },
    registerForm: {
        fullName: '',
        cpf: '',
        email: '',
        password: '',
        rpassword: '',
    },
    passchangeForm: {
        oldpass: '',
        newpass: '',
        newpassrepeat: '',
    },
    emailchangeForm: {
        pass: '',
        newmail: '',
    }
}

const Auth = ( state = authState, action )=>{
    switch (action.type) {
        case 'AUTH_TOGGLE_LOADER':
            return { ...state,
                isLoading: action.isLoading
            }
        case 'AUTH_TOGGLE_MODAL':
            return { ...state,
                modal: action.modal
            }
        case 'AUTH_CHANGE_FIELD':
            return { ...state,
                [action.formName]: action.form
            }
        default: 
            return {...state};
      }  
}

export default Auth;