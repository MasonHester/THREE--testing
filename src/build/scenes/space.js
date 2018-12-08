const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("display--canvas"),
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0020);

renderer.render( scene, camera );