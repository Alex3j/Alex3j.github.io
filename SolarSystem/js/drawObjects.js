function drawObjects() {

    const objects = {};
    let scale = 1;
    let planetRadiusScale = .01;    
    let orbitRadiusScale = 1500;    
    let sunRadius = 300;            
    let sizeSkySphere = 1000000;   


// Добавление звездного неба
    function drawSky() {
        var skyGeometry = new THREE.SphereGeometry(scale * sizeSkySphere, 32, 32);
        var skyMaterial = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('res/sky/stars.jpg')});
        var sky = new THREE.Mesh(skyGeometry, skyMaterial);
        sky.material.side = THREE.BackSide;
        scene.add(sky);
    }
    drawSky();

// Создание Солнца
    function drawSun(customMaterial) {
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(0, 0, 0);                    
        scene.add(light);                                       

        // Создание сферы объекта
        const sunGeometry = new THREE.SphereGeometry(sunRadius, 64, 64); 
        const sunMaterial = new THREE.MeshStandardMaterial({
            emissive: 0xffd700,
            emissiveMap: new THREE.TextureLoader().load('res/sun/8k_sun.jpg'),
            emissiveIntensity: 1
        });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);   
        sun.position.copy(light.position);                      
        scene.add(sun);
        return sun;
    }
    objects["Sun"] = drawSun();


// Создание планет, орбит и спутников
    function drawPlanets(solarBodies) {
        let data = solarBodies.filter(item => (item.parent === "Sun" && item.name !== "Sun"));

        data.forEach(body => {
            const geo = new THREE.SphereGeometry(body.radius * planetRadiusScale, 64, 64);
            const mat = new THREE.MeshPhongMaterial({
                map: new THREE.TextureLoader().load(body.material.diffuse.map),
            })
            const mesh = new THREE.Mesh(geo, mat);
            const obj = new THREE.Object3D();
            obj.add(mesh);
            scene.add(obj);

            let semiMajor = body.orbit.semiMajorAxis * orbitRadiusScale;
            const a = semiMajor * (1 + (body.orbit.eccentricity))
            const p = semiMajor * (1 - (body.orbit.eccentricity))
            const ax = (a - p) / 2;
            mesh.position.x = (body.orbit.semiMajorAxis * orbitRadiusScale) + ax;

            // угол наклона вращения планеты
            mesh.rotation.z = body.rotation.inclination * (Math.PI / 180);

            // наклон орбиты планеты
            obj.rotation.x = body.orbit.inclination * (Math.PI / 180);

            // кольца
            if (body.name === "Saturn") {
                const ringGeometry = new THREE.RingGeometry(
                    body.ring.lower * planetRadiusScale,
                    body.ring.higher * planetRadiusScale,
                    128);

                const ringMaterial = new THREE.MeshLambertMaterial({
                    map: new THREE.TextureLoader().load(body.ring.map),
                    side: THREE.DoubleSide,
                    transparent: true,
                    color: 0xffffff,
                })
                const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
                mesh.add(ringMesh);
                ringMesh.rotation.x = -0.5 * Math.PI;
            }

            const orbitPath = createOrbit(body);

            // добавление данных об объектах
            const orbitPeriod = body.orbit.period;
            const rotationPeriod = body.rotation.period;
            let time = 0;                                   // for count current position
            let rotationInclination = body.rotation.inclination;
            let planetRadius  = body.radius;
            objects[`${body.name}`] = {mesh, obj, orbitPeriod, rotationPeriod, orbitPath, time, rotationInclination, planetRadius};
        })
    }
    drawPlanets(solarBodies);


    // создание эллиптической кривой орбиты
    function createOrbit(body) {

        let semiMajor = body.orbit.semiMajorAxis * orbitRadiusScale;
        let semiMinor = semiMajor * Math.sqrt(1 - Math.pow(body.orbit.eccentricity, 2));
        const a = semiMajor * (1 + (body.orbit.eccentricity))
        const p = semiMajor * (1 - (body.orbit.eccentricity))
        const ax = (a - p) / 2;
        //const ax = Math.sqrt((semiMajor*semiMajor)-(semiMinor*semiMinor)); фокус через полуоси

        var curve = new THREE.EllipseCurve(ax, 0, semiMajor, semiMinor, 0, 2 * Math.PI, false, 0);

        // создание контура на основе кривой
        var path = new THREE.Path( curve.getPoints( 100 ) );
        var geometry = path.createPointsGeometry( 100 );
        var material = new THREE.LineBasicMaterial({
            color : "#808080",
            transparent: true,
            opacity:.5
        });

        var ellipse = new THREE.Line( geometry, material );
        ellipse.position.set(0, 0, 0);
        ellipse.rotation.x = -0.5 * Math.PI + body.orbit.inclination * (Math.PI / 180);

        scene.add( ellipse );

        return path
    }

// спутники
    function drawMoons() {
        let data = solarBodies.filter(item => item.type === "moon");

        data.forEach(body => {
            const parent = objects[`${body.parent}`];

            const geo = new THREE.SphereGeometry(body.radius * planetRadiusScale, 32, 32);
            const mat = new THREE.MeshPhongMaterial({
                map: new THREE.TextureLoader().load(body.material.diffuse.map)
            });
            const mesh = new THREE.Mesh(geo, mat);

            const obj = new THREE.Object3D();
            obj.position = parent.mesh.position;

            obj.add(mesh);
            scene.add(obj);
            mesh.position.x = body.orbit.semiMajorAxis;

            const period = body.orbit.period;
            objects[`${body.name}`] = { mesh, obj, parent, period};
        });
    }

    drawMoons();

    return objects;
}
