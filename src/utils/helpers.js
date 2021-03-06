const SEPARATOR = "//**//";
const CACHE_INTERVAL = 60 * 60 * 1000;

function clearCache() {
    localStorage.clear();
}

export const getFavBanks = () => {
    let data = localStorage.getItem("favBanks");
    if (data === null) return [];
    data = JSON.parse(data);
    return data;
};

export const removeFavBank = (bankToRemove) => {
    let data = getFavBanks();
    data = data.filter((item) => item.ifsc !== bankToRemove.ifsc);
    localStorage.setItem("favBanks", JSON.stringify(data));
    return data;
};

export const addFavBank = (bankToAdd) => {
    let data = getFavBanks();
    if (data.find((item) => item.ifsc === bankToAdd.ifsc) === undefined) {
        data.push(bankToAdd);
        localStorage.setItem("favBanks", JSON.stringify(data));
        return true;
    } else return false;
};

export const setData = (url, val) => {
    let dataToStore = `${JSON.stringify(val)}${SEPARATOR}${Date.now().toString()}`;
    console.log(dataToStore);
    localStorage.setItem(url, dataToStore);
};

export const getData = (url) => {
    // debugger;
    let localData = localStorage.getItem(url);
    let validatedData = validateData(localData);
    if (validatedData.isValid === false) {
        localStorage.removeItem(url);
        return null;
    }
    return validatedData.data;
};

export const validateData = (localData) => {
    if (localData === null) return { isValid: false };

    let data = localData.split(SEPARATOR);
    let timestamp = Number(data[1]);

    if (Number.isNaN(timestamp)) return { isValid: false };

    let date = new Date(timestamp);
    if (date.toString() === "Invalid Date") return { isValid: false };

    if (Date.now() - date.getTime() < CACHE_INTERVAL) {
        return {
            isValid: true,
            data: JSON.parse(data[0]),
        };
    }

    return { isValid: false };
};
