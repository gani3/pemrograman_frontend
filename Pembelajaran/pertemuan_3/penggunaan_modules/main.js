import {
    users,
    index,
    store,
    edit,
    hapus
} from "./mainImport.js"



function main() {
    index();
    store();
    edit();
    hapus();
    console.log(users);
}

main();