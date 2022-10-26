import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  BoxGeometry,
} from "three"
import { renderer, updateRenderer } from "/src/core/renderer"

import { gui } from "/src/core/gui"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#5EDCAE",
}

const tower1 = new Mesh(
  new BoxGeometry(1, 2, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const tower2 = new Mesh(
  new BoxGeometry(1, 2, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const tower3 = new Mesh(
  new BoxGeometry(1, 2, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)


const tower4 = new Mesh(
  new BoxGeometry(1, 2, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const wall1 = new Mesh(
  new BoxGeometry(3, 1.5, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const wall2= new Mesh(
  new BoxGeometry(3, 1.5, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)
const wall3 = new Mesh(
  new BoxGeometry(3, 1.5, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)
const wall4 = new Mesh(
  new BoxGeometry(3, 1.5, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)


tower1.position.set(0, 1, 0)
tower1.castShadow = true

tower2.position.set(4, 1, 0)
tower2.castShadow = true

tower3.position.set(0, 1, 4)
tower3.castShadow = true

tower4.position.set(4, 1, 4)
tower4.castShadow = true


//WALL WALL WALL WALL /WALL WALL WALL WALL /WALL WALL WALL WALL /WALL WALL WALL WALL /WALL WALL WALL WALL


wall1.position.set(2, 0.5, 0)
wall1.castShadow = true

wall2.position.set(4, 0.5, 2)
wall2.castShadow = true
wall2.rotateY(-Math.PI/2 )


wall3.position.set(0, 0.5, 2)
wall3.castShadow = true
wall3.rotateY(-Math.PI/2 )


wall4.position.set(4, 0.5, 4)
wall4.castShadow = true




showShadow(tower1)
showShadow(tower2)
showShadow(tower3)
showShadow(tower4)
showShadow(wall1)
showShadow(wall2)
showShadow(wall3)
showShadow(wall4)

scene.add(tower1)
scene.add(tower2)
scene.add(tower3)
scene.add(tower4)
scene.add(wall1)
scene.add(wall2)
scene.add(wall3)
scene.add(wall4)


const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
  new MeshToonMaterial({
    color: new Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)



export function updateScene() {
  updateRenderer()
}




function showShadow(sphere:any)
{
  const sphereCtrls = gui.addFolder({
    title: "Sphere",
  })
  sphereCtrls.addInput(sphere.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(PARAMS, "color").on("change", (e) => {
  sphere.material.color = new Color(e.value)
})

  sphereCtrls.addInput(sphere.material, "wireframe")
}