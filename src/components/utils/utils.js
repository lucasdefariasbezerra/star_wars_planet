import images from './images';
import consts from './consts';

const getRandom = (max) => {
    return Math.floor((Math.random() * max ) + 1);
};

const getImage = (climate) => {
    // if the key is no available on images object then the default key is returned
    const key = (climate && climate !== 'unknown' && climate !== 'artificial temperate') ? getClimate(climate) : consts.DEFAULT_KEY;
    const image = images[key];
    return image ? image : consts.DEFAULT_IMAGE;
};

const getClimate = (climate) => {
    /*
        if climate is undefined then a blank array is returned.
        if climat has value then the it is
        turned in an array where the first word is returned
    */
    const array = climate ? climate.split(',') : [];
    return array[0];
};

export {
    getImage,
    getRandom
};
