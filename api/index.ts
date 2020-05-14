const BASE: string = "http://localhost:5000/api";

export async function getRecipesAPI() {
    return fetch(BASE + '/recipes')
        .then(handleError)
        .then(res => res.json())
}

export const getPreviewAPI = (value: string): Promise<Response> => {
    const search = encodeURIComponent(value);
    return fetch(BASE + '/recipes?s=' + search);
}


function handleError(response: Response) {
    /* handle reponse out of succesfull ranged errors */
    if (!response.ok) throw new Error(response.statusText);
    return response;
}