namespace SpriteKind {
    export const chargedprojectile = SpriteKind.create()
    export const chargedprojectile2 = SpriteKind.create()
    export const chargedprojectile3 = SpriteKind.create()
    export const chargedprojectile4 = SpriteKind.create()
    export const chargedprojectile5 = SpriteKind.create()
    export const missilecount = SpriteKind.create()
    export const missiles = SpriteKind.create()
    export const launchprojectile = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let right_direction = false
    music.pewPew.play()
    if (right_direction == true) {
        if (missile_count > 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 75, 0)
            projectile2.setKind(SpriteKind.launchprojectile)
            projectile2.startEffect(effects.fire)
            missile_count += -1
            missile.sayText("X" + missile_count)
        }
        if (missile_count == 0) {
            music.pewPew.stop()
        }
    } else if (right_direction == false) {
        if (missile_count > 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -75, 0)
            projectile2.setKind(SpriteKind.launchprojectile)
            projectile2.startEffect(effects.fire)
            missile_count += -1
            missile.sayText("X" + missile_count)
        }
        if (missile_count == 0) {
            music.pewPew.stop()
        }
    }
})
info.onCountdownEnd(function () {
    game.over(false, effects.splatter)
})
info.onLifeZero(function () {
    game.over(false, effects.starField)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (missile_count == 0) {
        pause(500)
        missile_count += 1
        missile.sayText("X" + missile_count)
        pause(500)
        if (missile_count < 30) {
            missile_count = 30
            missile.sayText("X" + missile_count)
        }
    }
})
let missile: Sprite = null
let projectile2: Sprite = null
let missile_count = 0
let mySprite: Sprite = null
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 . . . 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . 3 3 3 
    . . 3 . . . . 3 3 3 3 3 3 3 . . 
    . . 3 3 . 3 3 3 3 3 3 3 . . 3 3 
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    . . . 3 . 3 3 3 . . . . . . . . 
    . . . 3 3 3 3 3 . . . . . . . . 
    . . . . . 3 3 . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . 3 . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
