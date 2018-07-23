export const strToNum = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].rating) {
            array[i].rating = parseFloat(array[i].rating, 2);
        }

        if (array[i].review_count) {
            array[i].review_count = parseInt(array[i].review_count, 10);
        }
    }
    return array;
}

export const storesByRatings = (array) => {
    let ratings = {};
    for (let store of array) {
        if (store.rating in ratings) {
            ratings[store.rating]++;
        } else {
            ratings[store.rating] = 1;
        }
    }
    return ratings;
}

// creates an object where each key is a state and value is # of stores
export const storesByState = (array) => {
    let state = {};
    for (let store of array) {
        if (store.state in state) {
            state[store.state]++;
        } else {
            state[store.state] = 1;
        }
    }
    return state;
}