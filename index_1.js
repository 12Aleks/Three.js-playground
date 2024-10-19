import * as THREE from "three";

const scene = new THREE.Scene();


const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
    color: "red",
    wireframe: true,

});
const mesh = new THREE.Mesh(geometry, material);
const cube1 = new THREE.Mesh(geometry, material);

const group = new THREE.Group();

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.2, 200),
    new THREE.MeshBasicMaterial({color: 'green'})
)

torus.position.set(2,3,1)

group.add(cube1);
group.add(mesh)
group.add(torus)

//scale and position
mesh.position.z = -1
mesh.scale.set(.1,.1,.1);


scene.add(group);

cube1.position.x = 1.5
// scene.add(cube1);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3
camera.position.y = .02

scene.add(camera);

console.log(mesh.position.distanceTo(camera.position))

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.001;
    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.001;

    cube1.rotation.z = 1;

    // mesh.rotation.reorder('YXZ')

    camera.lookAt(new THREE.Vector3(.5,.5,0))

    renderer.render(scene, camera);
}

animate();



