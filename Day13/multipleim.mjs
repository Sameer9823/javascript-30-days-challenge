import myModule from "./multiplec.mjs";


console.log('Module Name:', myModule.name);
console.log('Module Version:', myModule.version);
console.log('PI:', myModule.constants.PI);
console.log('E:', myModule.constants.E);
console.log('Add 2 + 3:', myModule.functions.add(2, 3));
