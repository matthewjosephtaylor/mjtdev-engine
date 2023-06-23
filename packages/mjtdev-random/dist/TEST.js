import { Randoms } from "./index";
(() => {
    const r = Randoms.seedRandom(42);
    for (let i = 0; i < 10; i++) {
        console.log(r());
    }
})();
//# sourceMappingURL=TEST.js.map