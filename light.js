import * as THREE from "three";


const scene = new THREE.Scene();



//light

//light without shadow
// const ambientLight = new THREE.AmbientLight('white', 0.8);
// scene.add(ambientLight);

//light with shadow
// const dirLight = new THREE.DirectionalLight('white', 1);
// dirLight.position.set(5, 5, 5);
// scene.add(dirLight);

//naprawlennyj istocznik sweta wo wse storony
// const pointLight = new THREE.PointLight('white', 10, 150);
// pointLight.position.set(0.5, 1, 1);
// scene.add(pointLight);

//visualization light - vizualizacija istocznika sweta pri razrabotke
// const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
// scene.add(pointLightHelper);

//naprawlennyj istocznik sweta
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(1, 1, 1);
scene.add(spotLight);

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({color: 'red'});

const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0)


document.body.appendChild(renderer.domElement);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate()