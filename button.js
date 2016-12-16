function buttonmaker(){
  
  var posit_x = canvas.width/2 + innerWidth/2;
  var posit_y = innerHeight/2-height/2;

  var button = createButton("Start");
    button.mousePressed(Recetpage);
    button.position(posit_x, posit_y);

  var rbutton = createButton("Restart");
    rbutton.mousePressed(Recover);
    rbutton.position(posit_x, posit_y + 60);

  var pause = createButton("Pause");
  // pause.mousePressed(Stop);
    pause.position(posit_x, posit_y + 120);
}