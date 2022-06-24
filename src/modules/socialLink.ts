import config from "../config"
import { pivotScene } from "./pivot"

export function addSocialLink() {
    for (let linkData of config.socialMedia) {
        let clickableLink = new Entity()
        clickableLink.setParent(pivotScene)

        clickableLink.addComponent(new GLTFShape(linkData.model))
        clickableLink.addComponent(new Transform({
            position: linkData.position
        }))

        clickableLink.addComponent(new OnPointerDown(() => {
            openExternalURL(linkData.link)
        },
            {
                hoverText: linkData.name,
                distance: 10
            }))
    }
}