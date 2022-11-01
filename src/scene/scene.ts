import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  BoxGeometry,
  ConeGeometry,
} from "three"
import { updateRenderer } from "../core/renderer"

import { gui } from "../core/gui"

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

const towerHeigth = 1.75
const towerPositionY = 0.88




const tower1 = new Mesh(
  new BoxGeometry(1, towerHeigth, 1),
  new MeshToonMaterial({
    color: new Color(0XFF303030),
    wireframe: false,
  })
)

const tower2 = new Mesh(
  new BoxGeometry(1, towerHeigth, 1),
  new MeshToonMaterial({
    color: new Color(0XFF303030),
    wireframe: false,
  })
)

const tower3 = new Mesh(
  new BoxGeometry(1, towerHeigth, 1),
  new MeshToonMaterial({
    color: new Color(0XFF303030),
    wireframe: false,
  })
)


const tower4 = new Mesh(
  new BoxGeometry(1, towerHeigth, 1),
  new MeshToonMaterial({
    color: new Color(0XFF303030),
    wireframe: false,
  })
)

const wall1 = new Mesh(
  new BoxGeometry(3, 1, 1),
  new MeshToonMaterial({
    color: new Color(0XFF242424),
    wireframe: false,
  })
)

const wall2= new Mesh(
  new BoxGeometry(3, 1, 1),
  new MeshToonMaterial({
    color: new Color(0XFF242424),
    wireframe: false,
  })
)
const wall3 = new Mesh(
  new BoxGeometry(3, 1, 1),
  new MeshToonMaterial({
    color: new Color(0XFF242424),
    wireframe: false,
  })
)
const wall4 = new Mesh(
  new BoxGeometry(3, 1, 1),
  new MeshToonMaterial({
    color: new Color(0XFF242424),
    wireframe: false,
  })
)

const roof1 = new Mesh(
  new ConeGeometry(0.75, 1, 4),
  new MeshToonMaterial({
    color: new Color(0XFF7B3F00),
    wireframe: false,
  })
)

const roof2= new Mesh(
  new ConeGeometry(0.75, 1, 4),
  new MeshToonMaterial({
    color: new Color(0XFF7B3F00),
    wireframe: false,
  })
)
const roof3 = new Mesh(
  new ConeGeometry(0.75, 1, 4),
  new MeshToonMaterial({
    color: new Color(0XFF7B3F00),
    wireframe: false,
  })
)
const roof4 = new Mesh(
  new ConeGeometry(0.75, 1, 4),
  new MeshToonMaterial({
    color: new Color(0XFF7B3F00),
    wireframe: false,
  })
)

const mainGate = new Mesh(
  new BoxGeometry(0.9, 0.75, 1),
  new MeshToonMaterial({
    color: new Color(0XFF6F4E37),
    wireframe: false,
  })
)

const bigWallLeft = new Mesh(
  new BoxGeometry(15, 1, 1),
  new MeshToonMaterial({
    color: new Color(0XFF242424),
    wireframe: false,
  })
)



const bigWallRigth = new Mesh(
  new BoxGeometry(11, 1, 1),
  new MeshToonMaterial({
    color: new Color(0XFF242424),
    wireframe: false,
  })
)





const houseBody1 = new Mesh(
  new BoxGeometry(0.9,1, 1),
  new MeshToonMaterial({
    color: new Color(0XFF242424),
    wireframe: false,
  })
)

const houseBody2 = new Mesh(
  new BoxGeometry(0.9, 1, 1),
  new MeshToonMaterial({
    color: new Color(0XFF242424),
    wireframe: false,
  })
)


const houseBody3 = new Mesh(
  new BoxGeometry(0.9, 1, 1),
  new MeshToonMaterial({
    color: new Color(0XFF242424),
    wireframe: false,
  })
)

const houseRoof1 = new Mesh(
  new ConeGeometry(0.75, 1, 4),
  new MeshToonMaterial({
    color: new Color(0XFF7B3F00),
    wireframe: false,
  })
)

const houseRoof2 = new Mesh(
  new ConeGeometry(0.75, 1, 4),
  new MeshToonMaterial({
    color: new Color(0XFF7B3F00),
    wireframe: false,
  })
)

const houseRoof3 = new Mesh(
  new ConeGeometry(0.75, 1, 4),
  new MeshToonMaterial({
    color: new Color(0XFF7B3F00),
    wireframe: false,
  })
)

createHouse(-9,1.5,12)
createHouse(22,1.5,5)
createHouse(-6,1.5,6)
createHouse(5,1.5,6)


houseRoof1.position.set(-8, 1.5, 3)
houseRoof1.castShadow = true
houseRoof1.rotateY(-Math.PI/4 )

houseRoof3.position.set(12, 1.5, 3)
houseRoof3.castShadow = true
houseRoof3.rotateY(-Math.PI/4 )

houseRoof2.position.set(14, 1.5, 12)
houseRoof2.castShadow = true
houseRoof2.rotateY(-Math.PI/4 )

houseBody1.position.set(-8, 0.5, 3)
houseBody1.castShadow = true

houseBody2.position.set(12, 0.5, 3)
houseBody2.castShadow = true

houseBody3.position.set(14, 0.5, 12)
houseBody3.castShadow = true


bigWallLeft.position.set(-8, 0.5, 0)
bigWallLeft.castShadow = true

bigWallRigth.position.set(10, 0.5, 0)
bigWallRigth.castShadow = true

tower1.position.set(0, towerPositionY, 0)
tower1.castShadow = true

tower2.position.set(4, towerPositionY, 0)
tower2.castShadow = true

tower3.position.set(0, towerPositionY, 4)
tower3.castShadow = true

tower4.position.set(4, towerPositionY, 4)
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


wall4.position.set(2, 0.5, 4)
wall4.castShadow = true


roof1.position.set(0, 2.25, 0)
roof1.castShadow = true
roof1.rotateY(-Math.PI/4 )


roof2.position.set(4, 2.25, 0)
roof2.rotateY(-Math.PI/4 )
roof2.castShadow = true

roof3.position.set(0,   2.25, 4)
roof3.castShadow = true
roof3.rotateY(-Math.PI/4 )


roof4.position.set(4,  2.25, 4)
roof4.castShadow = true
roof4.rotateY(-Math.PI / 4)

mainGate.position.set(2,  0.35, -0.05)
mainGate.castShadow = true





showShadow(tower1)
showShadow(tower2)
showShadow(tower3)
showShadow(tower4)
showShadow(wall1)
showShadow(wall2)
showShadow(wall3)
showShadow(wall4)
showShadow(roof1)
showShadow(roof2)
showShadow(roof3)
showShadow(roof4)
showShadow(mainGate)
showShadow(bigWallLeft)
showShadow(bigWallRigth)
showShadow(houseBody1)
showShadow(houseBody2)
showShadow(houseBody3)
showShadow(houseRoof1)
showShadow(houseRoof2)
showShadow(houseRoof3)

scene.add(houseRoof1)
scene.add(houseRoof2)
scene.add(houseRoof3)
scene.add(houseBody1)
scene.add(houseBody2)
scene.add(houseBody3)
scene.add(bigWallRigth)
scene.add(bigWallLeft)
scene.add(mainGate)
scene.add(roof1)
scene.add(roof2)
scene.add(roof3)
scene.add(roof4)
scene.add(tower1)
scene.add(tower2)
scene.add(tower3)
scene.add(tower4)
scene.add(wall1)
scene.add(wall2)
scene.add(wall3)
scene.add(wall4)


const plane = new Mesh(
  new PlaneGeometry(30, 30, 30, 30),
  new MeshToonMaterial({
    color: new Color(0xffDAF7ff),
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
sphereCtrls.addInput(PARAMS, "color").on("change", (e: any) => {
  sphere.material.color = new Color(e.value)
})

  sphereCtrls.addInput(sphere.material, "wireframe")
}

function createHouse(x:any,_y:any,z:any) {
  const nameHouse = new Mesh(
    new BoxGeometry(0.9, 1, 1),
    new MeshToonMaterial({
      color: new Color(0XFF242424),
      wireframe: false,
    })
  )
  
  const nameRoof = new Mesh(
    new ConeGeometry(0.75, 1, 4),
    new MeshToonMaterial({
      color: new Color(0XFF7B3F00),
      wireframe: false,
    })
  )

  nameRoof.position.set(x, 1.5, z)
  nameRoof.castShadow = true
  nameRoof.rotateY(-Math.PI / 4)

  nameHouse.position.set(x, 0.5, z)
  nameHouse.castShadow = true
  showShadow(nameRoof)
  scene.add(nameRoof)
  showShadow(nameHouse)
  scene.add(nameHouse)

}
