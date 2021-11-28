const getRandomInt = (min, max) => {
    return new Promise((resolve, reject) => {
        if (min > max) {
            reject('min is greater than max');
        }
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(() => {
            resolve(randomInt);
        }, 2000);
    });
};

export default getRandomInt;