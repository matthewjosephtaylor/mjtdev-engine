import { integerRangeStream } from "./integerRangeStream";
import prand from "pure-rand";
export const seedRandom = (seed) => {
    let rng = prand.xoroshiro128plus(seed);
    return () => {
        const [result, nextRng] = prand.uniformIntDistribution(0, Number.MAX_SAFE_INTEGER, rng);
        rng = nextRng;
        return result / Number.MAX_SAFE_INTEGER;
    };
};
const globalRandom = seedRandom(Date.now());
function randomUuid(random = globalRandom) {
    if (random) {
        console.warn("NextRandom is not currently implimented, returning crypto.randomUUID()");
    }
    return crypto.randomUUID();
}
function randomInteger(config) {
    config = fromObject({
        minMax: [0, Number.MAX_SAFE_INTEGER],
        random: globalRandom,
    }, config);
    const [min, max] = config.minMax;
    const interval = max - min;
    const randInterval = interval * config.random();
    return Math.round(min + randInterval);
}
function pickRandom(oneOrMany, nextRandom = globalRandom) {
    const a = toMany(oneOrMany);
    const choice = Math.floor(nextRandom() * a.length);
    return a[choice];
}
const pickRandoms = ({ from, count, nextRandom = globalRandom, random = nextRandom, forceUnique = true, }) => {
    const bag = [...toMany(from)];
    return Array(count)
        .fill(0)
        .map((_) => {
        const choice = Math.floor(random() * bag.length);
        const picked = bag[choice];
        if (forceUnique) {
            bag.splice(choice, 1);
        }
        return picked;
    });
};
function pickRandomIndex(sourceOneOrMany, nextRandom = globalRandom) {
    const sourceArray = toMany(sourceOneOrMany);
    return Math.floor(nextRandom() * sourceArray.length);
}
function pickRandomNeighbors(sourceArray, count, nextRandom = globalRandom) {
    if (sourceArray.length <= count) {
        return sourceArray;
    }
    let choiceIndex = pickRandomIndex(sourceArray, nextRandom);
    let result = [];
    // run backwards search
    for (let i = choiceIndex; i > 0; i--) {
        if (result.length == count) {
            return result;
        }
        result.push(sourceArray[i]);
    }
    // run forwards search
    for (let i = choiceIndex + 1; i < sourceArray.length; i++) {
        if (result.length == count) {
            return result;
        }
        result.push(sourceArray[i]);
    }
    return result;
}
// @see https://stackoverflow.com/a/2450976/5306554
function shuffle(oneOrMany, random = globalRandom) {
    const result = [...toMany(oneOrMany)];
    let currentIndex = result.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = result[currentIndex];
        result[currentIndex] = result[randomIndex];
        result[randomIndex] = temporaryValue;
    }
    return result;
}
export const Randoms = {
    seedRandom,
    globalRandom,
    randomInteger,
    randomUuid,
    pickRandom,
    pickRandoms,
    pickRandomNeighbors,
    shuffle,
    integerRangeStream,
};
// private helper functions
function toMany(values) {
    if (values === undefined) {
        return [];
    }
    if (values instanceof Array) {
        return values;
    }
    return [values];
}
function fromObject(source, additional = undefined, initial = undefined) {
    if (initial === undefined) {
        initial = {};
    }
    Object.assign(initial, source);
    if (additional !== undefined) {
        Object.assign(initial, additional);
    }
    return initial;
}
//# sourceMappingURL=index.js.map