import * as THREE from "three";

//scene and camera
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
    45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();


//object
// const geometry = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshBasicMaterial({
//     color: '#fff',
// })
// const cube = new THREE.Mesh(
//     geometry,
//     material,
// );
//
// scene.add(cube);

const material = new THREE.LineBasicMaterial({color: 0x0000ff});


const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(0, -10, 0));
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 0, 10));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(0, 0, -10));
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 0, -10));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(0, 0, 10));
points.push(new THREE.Vector3(0, -10, 0));
points.push(new THREE.Vector3(0, 0, -10));


const geometry = new THREE.BufferGeometry().setFromPoints(points);


const line = new THREE.Line(geometry, material);

scene.add(line);


//permanent render
function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.001;

    line.rotation.y += 0.001;
    line.rotation.x += 0.001;
    renderer.render(scene, camera);
}

animate();