document.addEventListener("DOMContentLoaded", () => {

    const dataBase = solarBodies;
    let objects = drawObjects(dataBase);
    control();
    animation(objects);

});