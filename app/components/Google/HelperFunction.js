
import {showMessage} from "react-native-flash-message";

const showError = (error) =>{
    showMessage({
        message,
        type: "danger",
        icon: "danger"
    })
}

const showSucess = (message) =>{
    showMessage({
        message,
        type: "success",
        icon: "success"
    })
}

export {
    showError,
    showSucess
}