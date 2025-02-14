// Подключение Three.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.132/build/three.module.js';

// Создание сцены, камеры и рендерера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создание геометрии сердца
const heartShape = new THREE.Shape();
heartShape.moveTo(0, 0);
heartShape.bezierCurveTo(0, 0.5, 0.5, 1, 0, 1.5);
heartShape.bezierCurveTo(-0.5, 1, 0, 0.5, 0, 0);

const geometry = new THREE.ShapeGeometry(heartShape);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
const heart = new THREE.Mesh(geometry, material);
scene.add(heart);

// Позиция камеры
camera.position.z = 5;

// Анимация вращения
function animate() {
    requestAnimationFrame(animate);
    heart.rotation.x += 0.01;
    heart.rotation.y += 0.01;
    renderer.render(scene, camera);
}
