// CutoutSceneController.js
// Version: 0.0.3
// Event: Lens Turned On
// Description: Set every child to same render order so LensStudio uses 3D scene to calculate render order, 
// and set pass to two-sided so that we can see 2D sprites from both direction.

//@input int renderOrder = 1
 
// Get all sprite visuals under this scene object
var spriteVisuals = [];
recursiveGetAllSpriteVisuals(script.getSceneObject());

// Go through each sprite and modify it
for (var i = 0; i < spriteVisuals.length; i++) {
    modifyPass(spriteVisuals[i]);
}

// Helpers
function recursiveGetAllSpriteVisuals (sceneObject)
{
    // Collect sprite visuals
    if (sceneObject.getComponentCount("Component.SpriteVisual") > 0){
        var spriteVisual = sceneObject.getFirstComponent("Component.SpriteVisual");
        spriteVisuals.push(spriteVisual);
    } 

    // Do this collection recursively
    for (var i=0; i<sceneObject.getChildrenCount(); i++){
        recursiveGetAllSpriteVisuals(sceneObject.getChild(i));
    }  
    
}

function modifyPass (spriteVisual)
{
    if (spriteVisual)
    {
        spriteVisual.setRenderOrder(script.renderOrder);
    }
}