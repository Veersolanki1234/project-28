function keyPressed() {
if (KeyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
    launcherObject.attach(stoneObj.body);
 }
}



fly()
{

  this.launcherForce.bodyA=null;

}