import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"




// upload a new video
export const uploadVideoAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/allVideos`, video)
}

// get all uploaded videos
export const allVideosAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allvideos`, "")
}

// get a single video
export const videoAPI = async(id) => {
    return await commonAPI("GET", `${SERVER_URL}/allvideos/${id}`, "")
}

// delete a video
export const delVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allvideos/${id}`, {}) // empty object as body - to delete the entire object
}

// add to watch history
export const addHistoryAPI = async (video) => {
    return await commonAPI("POST",`${SERVER_URL}/watchhistory`, video )
}

// get watch history
export const getHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/watchhistory`, "")
}

// delete watch history
export const delHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/watchhistory/${id}`, {}) // empty object as body - to delete the entire object
}

// add category
export const addCategoryAPI = async (category) => {
    return await commonAPI("POST",`${SERVER_URL}/categories`, category )
}

// get category
export const getCategoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/categories`, "")
}

// delete category
export const deleteCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/categories/${id}`, {})
}

// Update category
export const updateCategoryAPI = async (id,categoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/categories/${id}`, categoryDetails)
}