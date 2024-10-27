import * as THREE from "three";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';


const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 130;

const scene = new THREE.Scene();
let dino;

const loader = new GLTFLoader()
loader.load(
    '3d/meta_dino.glb',
    //loader model
    function (gltf) {
        dino = gltf.scene;
        scene.add(dino);
    },
    function (xhr) {
    },
    function (error) {
    },
);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("rerender3D").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);

scene.add(ambientLight);

const rerender3D = () => {
    requestAnimationFrame(rerender3D);
    renderer.render(scene, camera);
}

rerender3D()