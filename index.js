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

const material = new THREE.LineBasicMaterial({
    color: 0x0000ff,
    emissive: 'white',
    shininess: 300
});

const texture = new THREE.TextureLoader().load('images/frosted-glass-texture-thumb21.jpg');
const mapTexture = new THREE.TextureLoader().load('images/map.png');
const textureMaterial = new THREE.MeshBasicMaterial({map: texture});

const textureMapMaterial = new THREE.MeshBasicMaterial({map: mapTexture})



const sphereGeometry = new THREE.SphereGeometry(10, 40, 40);
const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 'yellow',
    emissive: 'yellow',
    shininess: 800,
    wireframe: true
});

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(5, 0.9, 10),
    new THREE.MeshBasicMaterial({color: 'green'})
)

torus.position.set(2, 18,1)
scene.add(torus)

const sphere = new THREE.Mesh(sphereGeometry, textureMapMaterial);

sphere.position.x = 25

scene.add(sphere);

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




const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    textureMaterial
);

plane.position.set(42, 18,1)

scene.add(plane);


//permanent render
function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.001;
    camera.lookAt(1,2,4)
    line.rotation.y += 0.001;
    line.rotation.x += 0.001;
    sphere.rotation.y += 0.001;
    sphere.rotation.x += 0.0001;
    renderer.render(scene, camera);
    torus.rotation.x += 0.001;
}

animate();