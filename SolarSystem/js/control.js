function control() {

    // Добавление событий мыши и прокрутки для изменения положения камеры
    window.addEventListener('resize', function () {
        // Изменение соотношения сторон камеры
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
    canvas.addEventListener('mousewheel', onMouseWheel);

    function onMouseDown(event) {
        previousMouseX = event.clientX;
        previousMouseY = event.clientY;
        isMouseDown = true;
    }

    function onMouseMove(event) {
        if (isMouseDown) {
            let deltaX = event.clientX - previousMouseX;
            let deltaY = event.clientY - previousMouseY;
            cameraRotationY -= deltaX * 0.01;
            cameraRotationX += deltaY * 0.01;
            updateCameraPosition();

            previousMouseX = event.clientX;
            previousMouseY = event.clientY;
        }
    }

    function onMouseWheel(event) {
        let delta = event.deltaY;
        if (delta < 0) {
            cameraDistance = Math.max(cameraDistance - Math.pow(cameraDistance, 0.6), 15);
        } else if (delta > 0) {
            cameraDistance = Math.min(cameraDistance + Math.pow(cameraDistance, 0.6), 120000);
        }
        updateCameraPosition();
    }

    function updateCameraPosition() {
        camera.position.x = (cameraDistance * Math.sin(cameraRotationY) * Math.cos(cameraRotationX));
        camera.position.y = cameraDistance * Math.sin(cameraRotationX);
        camera.position.z = cameraDistance * Math.cos(cameraRotationY) * Math.cos(cameraRotationX);
        camera.lookAt(0, 0, 0);
    }
}