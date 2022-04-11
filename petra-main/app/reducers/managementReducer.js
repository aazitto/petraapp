const managementState = {
    isLoading: false,
    platformsData: {
        fullName: '',
        currentProducts: '',
        pastPlatforms: '',
        nextMusics: '',
        linkYoutube: '',
        linkInstagram: '',
        linkSpotify: '',
    },
    releaseData: {
        fullName: '',
        releaseType: '',
        discCompany: '',
        finalCompany: '',
        linkYoutube: '',
        linkInstagram: '',
        linkSpotify: '',
        pastPlatforms: '',
        plan: '',
    },
    videoProdData: {
        videoType: '',
        lyric: '',
        description: '',
        cover: '',
        audio: ''
    }
}

const Management = ( state = managementState, action )=>{
    switch (action.type) {
        case 'MANAGEMENT_TOGGLE_LOADER':
            return { ...state,
                isLoading: action.isLoading
            }
        case 'MANAGEMENT_TOGGLE_MODAL':
            return { ...state,
                modal: action.modal
            }
        case 'MANAGEMENT_CHANGE_FIELD':
            return { ...state,
                [action.target]: action.value
            }
        default: 
            return {...state};
      }  
}

export default Management;