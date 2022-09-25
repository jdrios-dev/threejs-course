//1. Scene
const scene = new THREE.Scene();

//2. Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff1990 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//3. Camera
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height);
scene.add(camera);

camera.position.z = 5;
camera.position.x = 1;
camera.position.y = -2;

//4. Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
