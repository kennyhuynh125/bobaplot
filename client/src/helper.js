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

// creates an object where each key is a store and value is # of stores across the US
export const topTenStores = (array) => {
    let stores = {};
    for (let store of array) {
        if (store.name in stores) {
            stores[store.name]++;
        } else {
            stores[store.name] = 1;
        }
    }
    let countOfStores = [];
    for (let key in stores) {
        countOfStores.push({
            name: key,
            count: stores[key],
        })
    }
    countOfStores = countOfStores.sort((a,b) => b.count - a.count).slice(0,10);
    let topTenStores = {};
    for (let store of countOfStores) {
        topTenStores[store.name] = store.count;
    }
    return topTenStores;
}