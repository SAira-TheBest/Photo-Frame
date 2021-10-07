

function setup(){
canvas=createCanvas(640,480)
canvas.position(150,150)
video = createCapture(VIDEO)
video.hide()
}

function draw(){
image(video,190,150,250,200)
fill("red")
stroke("red")
circle(50,50,80)

fill("green")
stroke("green")
circle(580,50,80)

fill("orange")
stroke("orange")
circle(50,250,80)

fill("blue")
stroke("blue")
circle(580,250,80)

fill("yellow")
stroke("yellow")
circle(50,425,80)

fill("purple")
stroke("purple")
circle(580,425,80)
}

function take_snapshot(){
    save('student_name.png')
}
