const backendDomain = "http://localhost:8080"
const SummaryApi = {
    signUp : {
        url : `${backendDomain}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomain}/api/login`,
        method : "post"
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomain}/api/logout`,
        method : "post"
    },
    all_users : {
        url : `${backendDomain}/api/all-users`,
        method : "get"
    },
    update_User : {
        url : `${backendDomain}/api/update-user`,
        method : "post"
    },
    upload_Product : {
        url : `${backendDomain}/api/upload-product`,
        method : "post"
    },
    get_Product : {
        url : `${backendDomain}/api/get-product`,
        method : "get"
    },
    update_Product : {
        url : `${backendDomain}/api/update-product`,
        method : "post"
    },
}



export default SummaryApi;