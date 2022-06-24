import { pivotScene } from "./pivot"

export function addBuilding() {
    const building = new Entity()
    building.addComponent(new GLTFShape("models/building.glb"))
    building.setParent(pivotScene)
}