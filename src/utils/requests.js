import { BASE_URL } from "./api";
import { getData, setData } from "./helpers";

export const fetchData = () => {
    let localData = getData(BASE_URL);
    if (localData === null || localData === undefined) {
        let response = fetch(BASE_URL)
            .then((response) => response.json())
            .then((json) => {
                setData(BASE_URL, json);
                return json;
            })
            .catch((error) => console.log(error));
        return response;
    }
    return localData;
};
