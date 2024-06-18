import { API_BASE_URL_LIKES_POKEMON } from "../config/urls";

const saveStatus = async(url, like) => {
    try {
        const response = await fetch(API_BASE_URL_LIKES_POKEMON,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url,like})
        });
        return response.json();
    } catch (error) {
        console.error(`Error saving data: ${error}`);
    }
}

export default saveStatus;
