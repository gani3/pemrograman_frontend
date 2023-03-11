import users from "./data.js";

function index() {
    console.log("# looping data");
}

function store() {
    console.log("# menambah data");    
}

function edit(params) {
    console.log("# mengedit data");    
}

function hapus(params) {
    console.log("# menghapus data");    
}

export {index,store,edit,hapus}

