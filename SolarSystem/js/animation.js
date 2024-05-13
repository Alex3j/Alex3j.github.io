function animation(data) {

    let rotationPeriodScale = {rotation_speed: 0.365};// 1 - real, 365 times/year (if orbitPeriodScale = 1)
    let orbitPeriodScale = {orbit_speed: 0.1};

    const gui = new dat.GUI();
    const cameraFolder = gui.addFolder('Rotation');
    cameraFolder.add(rotationPeriodScale, 'rotation_speed', 0.0001, 1);
    cameraFolder.add(orbitPeriodScale, 'orbit_speed', 0.001, 1);
    cameraFolder.open();

    let cameraLookAt = data.Sun;

    function lookAt(body) {
        if (body !== data.Sun) {
            camera.position.x = body.mesh.position.x + cameraDistance * Math.sin(cameraRotationY) * Math.cos(cameraRotationX);
            camera.position.y = body.mesh.position.y + cameraDistance * Math.sin(cameraRotationX);
            camera.position.z = body.mesh.position.z + cameraDistance * Math.cos(cameraRotationY) * Math.cos(cameraRotationX);
            camera.lookAt(body.mesh.position);
        } else {
            camera.position.x = cameraDistance * Math.sin(cameraRotationY) * Math.cos(cameraRotationX);
            camera.position.y = cameraDistance * Math.sin(cameraRotationX);
            camera.position.z = cameraDistance * Math.cos(cameraRotationY) * Math.cos(cameraRotationX);
            camera.lookAt(0, 0, 0);
        }

    }

    const cameraPlanet = gui.addFolder('Look At');
    cameraPlanet.add(options = {planet: 'Sun'}, 'planet', ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
        .name('Camera on')
        .onChange(function(value) {
            switch (value) {
                case 'Sun': cameraLookAt = data.Sun; break;
                case 'Mercury': cameraLookAt = data.Mercury; break;
                case 'Venus': cameraLookAt = data.Venus; break;
                case 'Earth': cameraLookAt = data.Earth; break;
                case 'Mars': cameraLookAt = data.Mars; break;
                case 'Jupiter': cameraLookAt = data.Jupiter; break;
                case 'Saturn': cameraLookAt = data.Saturn; break;
                case 'Uranus': cameraLookAt = data.Uranus; break;
                case 'Neptune': cameraLookAt = data.Neptune; break;
            }
            console.log(cameraLookAt.planetRadius)
            if (cameraLookAt === data.Sun) {
                cameraDistance = 3000;
            }else{
                cameraDistance = cameraLookAt.planetRadius * .1;
            }
        });
    cameraPlanet.open()
    render();


    function render() {

        lookAt(cameraLookAt)

        //вращение вокруг собственной оси
        data.Earth.mesh.rotateY(rotationPeriodScale.rotation_speed / data.Earth.rotationPeriod);
        data.Mercury.mesh.rotateY(rotationPeriodScale.rotation_speed / data.Mercury.rotationPeriod);
        data.Venus.mesh.rotateY(rotationPeriodScale.rotation_speed / data.Venus.rotationPeriod);
        data.Mars.mesh.rotateY(rotationPeriodScale.rotation_speed / data.Mars.rotationPeriod);
        data.Jupiter.mesh.rotateY(rotationPeriodScale.rotation_speed / data.Jupiter.rotationPeriod);
        data.Saturn.mesh.rotateY(rotationPeriodScale.rotation_speed / data.Saturn.rotationPeriod);
        data.Uranus.mesh.rotateY(rotationPeriodScale.rotation_speed / data.Uranus.rotationPeriod);
        data.Neptune.mesh.rotateY(rotationPeriodScale.rotation_speed / data.Neptune.rotationPeriod);
        data.Sun.rotation.y += rotationPeriodScale.rotation_speed / 2500;

        //вращение вокруг Солнца
        function movePlanet(bodyName) {
            let t = bodyName.time;
            t += 1 / (bodyName.orbitPeriod / orbitPeriodScale.orbit_speed);
            if (t >= 1) t = 0;
            bodyName.mesh.position.x = bodyName.orbitPath.getPoint(t).x;
            bodyName.mesh.position.z = -bodyName.orbitPath.getPoint(t).y;
            bodyName.time = t;
        }

        movePlanet(data.Mercury)
        movePlanet(data.Venus)
        movePlanet(data.Earth)
        movePlanet(data.Mars)
        movePlanet(data.Jupiter)
        movePlanet(data.Saturn)
        movePlanet(data.Uranus)
        movePlanet(data.Neptune)

        //спутники
        function moveMoon(moon, parent) {
            moon.obj.position.x = parent.mesh.position.x;
            moon.obj.position.z = parent.mesh.position.z;
            moon.obj.rotateY(0.2 / moon.period);
        }

        moveMoon(data.Moon, data.Earth);
        moveMoon(data.Ganymede, data.Jupiter);
        moveMoon(data.Callisto, data.Jupiter);
        moveMoon(data.Io, data.Jupiter);
        moveMoon(data.Europa, data.Jupiter);
        moveMoon(data.Dione, data.Saturn);
        moveMoon(data.Titan, data.Saturn);
        moveMoon(data.Rhea, data.Saturn);
        moveMoon(data.Iapetus, data.Saturn);
        moveMoon(data.Titania, data.Uranus);
        moveMoon(data.Oberon, data.Uranus);
        moveMoon(data.Umbriel, data.Uranus);
        moveMoon(data.Ariel, data.Uranus);
        moveMoon(data.Triton, data.Neptune);

        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
}