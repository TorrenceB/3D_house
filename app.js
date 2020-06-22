// Initialize variables

let camera, scene, renderer, container, house;

let fov = 68;
let aspect = innerWidth / innerHeight;
let near = 0.5;
let far = 1000;

init = () => {
  (container = document.getElementById("scene")),
    // Init scene
    (scene = new THREE.Scene()),
    // Init Camera
    (camera = new THREE.PerspectiveCamera(fov, aspect, near, far));
  camera.position.set(-40, -30, 550);

  //Lighting
  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  document.body.appendChild(renderer.domElement);

  // Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("3D_model/scene.gltf", (gltf) => {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    animate();
  });
};

const animate = () => {
  requestAnimationFrame(animate);
  house.rotation.z += 0.008;
  house.rotation.y += 0.002;
  house.rotation.x += 0.001;
  renderer.render(scene, camera);
};

init();
