import config from "../config"
import { pivotScene } from "./pivot"

export function addSculpture() {
    const sculpture = new Entity()
    sculpture.addComponent(new GLTFShape(config.sculpture.modelSrc))
    sculpture.addComponent(new Transform({
        position: config.sculpture.position
    }))
    sculpture.setParent(pivotScene)
}