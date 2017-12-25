 export function isEmpty(str) {
     return (!str || str.length === 0);
 }

 export function isEmptyObj(obj) {
     if (!obj) {
         return true;
     }
     return Object.getOwnPropertyNames(obj).length === 0;
 }

//The maximum is exclusive and the minimum is inclusive
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getWinKey(currentGameLevel) {
    return `${getRandomInt(0, currentGameLevel+2)}${getRandomInt(0, currentGameLevel+2)}`;
}

export function getColors(winKey) {
    const colorSeed = getRandomInt(0, 360);
    const light     = getRandomInt(10, 35);
    const moreLight = getRandomInt(43, 51);

    return {
        baseColor : `hsl(${colorSeed}, 100%, ${light}%)`,
        [winKey]  : `hsl(${colorSeed}, 95%, ${moreLight}%)`
    };
}

export function findInsertIndex(arr, obj, key) {
    let len = arr.length;
    if(len == 0){
        return 0;
    }

    let mid  = 0;
    let low  = 0;
    let high = len - 1;

    let compKey = obj[`${key}`];

    while(true) {
        mid = (low + high) / 2 | 0;

        if(arr[mid][`${key}`] == compKey) {
            return mid;
        } else if (arr[mid][`${key}`] < compKey) {
            high = mid - 1;
            if(low > high) {
                return mid;
            }
        } else {
            low = mid + 1;
            if(low > high) {
                return mid+1;
            }
        }
    }
}



