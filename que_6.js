function passfun(id, parafunc1) {
    parafunc1();
}

function parafunc2() {
    console.log('Hello');
}
passfun(1, parafunc2);