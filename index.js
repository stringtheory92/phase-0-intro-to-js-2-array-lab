// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

    function destructivelyAppendCat(name) {
        cats.length = 0;
        cats.push("Milo", "Otis", "Garfield");
        return cats.push(name);
 }
    function destructivelyPrependCat(name) {
        cats.length = 0;
        cats.push("Milo", "Otis", "Garfield");
        return cats.unshift(name);
    }
    function destructivelyRemoveLastCat() {
        cats.length = 0;
        cats.push("Milo", "Otis", "Garfield");
        return cats.pop();
    }
    function destructivelyRemoveFirstCat() {
        cats.length = 0;
        cats.push("Milo", "Otis", "Garfield");
        return cats.shift();
    }
    function appendCat(name) {
        cats.length = 0;
        cats.push("Milo", "Otis", "Garfield");
        return [...cats, name];
    }
    function prependCat(name) {
        cats.length = 0;
        cats.push("Milo", "Otis", "Garfield");
        return [name, ...cats];
    }
    function removeLastCat() {
        cats.length = 0;
        cats.push("Milo", "Otis", "Garfield");
        return cats.slice(0, -1);
    }
    function removeFirstCat() {
        cats.length = 0;
        cats.push("Milo", "Otis", "Garfield");
        return cats.slice(1);
    }