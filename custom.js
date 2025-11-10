import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

var centerContainer = null;
var centerCamera = null;
var centerRenderer = null;
var centerScene = null;
var topContainer = null;
var topCamera = null;
var topRenderer = null;
var topScene = null;

function setupTapeContainer() {
  // Set size and append to container
  const container = document.getElementById("three-container");
  centerContainer = container;

  // Scene, camera, renderer
  var scene = new THREE.Scene();
  centerScene = scene;
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000,
  );
  centerCamera = camera;
  const renderer = new THREE.WebGLRenderer();
  centerRenderer = renderer;

  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  // style
  renderer.setClearColor(0xffffff, 0);

  const loader = new GLTFLoader();
  var tape = null;
  loader.load(
    "tape.glb",
    function (gltf) {
      tape = gltf.scene;
      scene.add(tape);

      const width = container.clientWidth * 0.15;
      tape.scale.set(width, width, width);

      tape.rotation.x = Math.PI * 1.5;
      tape.rotation.y = Math.PI;

      camera.lookAt(tape.position.x, tape.position.y, tape.position.z);
      animate2();
      renderer.render(scene, camera);
    },
    undefined,
    function (error) {
      console.error(error);
    },
  );

  const light = new THREE.AmbientLight(0xffffff); // soft white light
  scene.add(light);

  // Position camera
  camera.position.z = 7;

  // Render loop
  function animate2() {
    requestAnimationFrame(animate2);
    renderer.render(scene, camera);
  }

  // controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.enableZoom = false;
}

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  var width = centerContainer.clientWidth;
  var height = centerContainer.clientHeight;
  centerCamera.aspect = width / height;
  centerCamera.updateProjectionMatrix();
  centerRenderer.setSize(width, height);
  centerRenderer.render(centerScene, centerCamera);

  width = topContainer.clientWidth;
  height = topContainer.clientHeight;
  topCamera.aspect = width / height;
  topCamera.updateProjectionMatrix();
  topRenderer.setSize(width, height);
  topRenderer.render(topScene, topCamera);
}

setupTapeContainer();
//setupHeaderContainer();
