// rotate LOGO
const logo = document.getElementById('logo');

function rotateLogo () {
    let angle;

    window.addEventListener('mousemove', e => {
        logo.style.transition = 'none';
        
        if (e.clientX < 600 && e.clientY < 500 && e.clientX > 0 && e.clientY > 0) {
            let angleRadians = Math.atan2(e.clientY - 46, e.clientX - 37.5);
            angle = Math.round(angleRadians * 180 / Math.PI);

        } else {
            if (angle > 36) {
                angle = angle - 0.2
            } else if (angle < 36) {
                angle = angle + 0.2
            } else {
                angle = 36
            }
            // angle = 36
        }
        logo.style.transform = 'rotateZ(' + angle + 'deg)';
    })

    document.addEventListener('mouseleave', () => {
        logo.style.transition = 'transform 0.3s';
        logo.style.transform = 'rotateZ(36deg)';
    })
}

rotateLogo();

// clock
const clock = {
    logTime: function logTime () {
        const now = new Date();

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();

        if (h >= 12) {
            h = h - 12;
        } else {
            h = h;
        }

        function AMorPM () {
            if (now.getHours() >= 12) {
                return "pm"
            } else {
                return "am"
            }
        }

        function display (a) {
            if (a < 10) {
                return "0" + a;
            } else {
                return a
            }
        }

        const updateTime = document.getElementById("clock");
        updateTime.innerHTML = "it's " + display(h) + "." + display(m) + AMorPM() + " in hcmc";

        setTimeout(logTime, 1000);
    }
}

clock.logTime();

// typewriter
const mynameTyping = 'tran trân trần thanh thao thảo';
const myname = 'trần thanh thảo';

let index = 0;
let counter = 0;

const acts = ['in-practice', 'learning', 'learns to code', 'learns design']

let activity = acts[counter];

const element = document.querySelector('#typed');

const typewriter = {
    typingName: function typingName (delay) {

            setTimeout (() => {
                index++;
                if (index <= 4) { //'tran'
                    element.innerHTML = mynameTyping.substring(0, index);
                    typingName(100);
                } else if (index == 5) { //'trân'
                    element.innerHTML = mynameTyping.substring(5, 9);
                    typingName(70);
                } else if (index == 6) { //'trần'
                    element.innerHTML = mynameTyping.substring(10, 14);
                    typingName(500);
                } else if (index == 7) {
                    index = 15;
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, index);
                    typingName(100);
                } else if (index == 16) {
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, index);
                    typingName(100);
                } else if (index <= 20) {
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, index);
                    typingName(80);
                } else if (index == 21) {
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, 20) + mynameTyping.substring(21, index);
                    typingName(100);
                } else if (index <= 25) {
                    element.innerHTML = mynameTyping.substring(10, 14) + '&nbsp' + mynameTyping.substring(15, 20) + '&nbsp' + mynameTyping.substring(21, index);
                    typingName(100);
                } else if (index == 26) {
                    element.innerHTML = myname;
                    index = 0;
                    setTimeout(() => {
                        element.innerHTML = myname + '<br>'
                    }, 1000);
                }
            }, delay)
        },

    backspacing: function backspacing (letters, delay) {
            index--;
            setTimeout(() => {
                if (index >= activity.length - letters + 1) {

                    element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                    backspacing(letters, delay);

                } else if (index == 0) {
                    element.innerHTML = myname + '<br>';
                    counter++;
                    activity = acts[counter];

                    if (counter >= acts.length) { //creating loop here
                        counter = 0;
                    }
                    typewriter.typingActs(100);
                }

            }, delay)
        },

    typingActs: function typingActs (delay) {
            activity = acts[counter];
            index++;

            setTimeout(() => {
                if (counter == 0) {
                    if (index < 3) { //'in'
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(70);
                    } else if (index == 3) { //'-'
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(300);
                    } else if (index < 7) { //'prac'
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(100);
                    } else if (index == 7) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(150);
                    } else if (index <= activity.length) { //'tice'
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(70);
                    } else if (index == 12) {
                        element.innerHTML = myname + '<br>' + acts[0].fontcolor('#bcbcbc') + '&nbsp;';
                        setTimeout(() => {
                            typewriter.backspacing(activity.length, 50);
                        }, 4000);
                    }
                } else if (counter == 1) {
                    if (index < 9) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(100);
                    } else if (index == 9) {
                        typewriter.backspacing(4, 40);
                        counter = 2;
                        setTimeout(() => {
                            typingActs(70)
                        }, 400)
                    }
                } else if (counter == 2) {
                    activity = acts[counter]; //length of 14
                    if (index <= 6) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(400);
                    } else if (index == 7) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(400);
                    } else if (index < activity.length) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(40);
                    } else if (index == activity.length) {
                        element.innerHTML = myname + '<br>' + activity.fontcolor('#bcbcbc') + '&nbsp;';

                        setTimeout(() => {
                            typewriter.backspacing(8, 90);
                        }, 10000);

                        setTimeout(() => {
                            counter++;
                            typingActs(100)
                        }, 12000)

                    }

                } else if (counter == 3) {
                    element.innerHTML = myname + '<br>' + activity.substring(0, 6).fontcolor('#bcbcbc');
                    if (index == 7) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, 6).fontcolor('#bcbcbc');
                        typingActs(50);
                    } else if (index < activity.length) {
                        element.innerHTML = myname + '<br>' + activity.substring(0, index).fontcolor('#bcbcbc');
                        typingActs(70);
                    } else if (index == activity.length) {
                        element.innerHTML = myname + '<br>' + activity.fontcolor('#bcbcbc') + '&nbsp;';
                        setTimeout(() => {
                            typewriter.backspacing(activity.length, 70);
                        }, 5000);
                    }
                }
            }, delay)

        },
    type: function () {
        typewriter.typingName();
        setTimeout(() => {
            typewriter.typingActs(0)
        }, (3100 + 2000));
    }
}

typewriter.type();

// backtotopTool
var backtotopTool = document.getElementById('backtotop');
backtotopTool.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// project txwes
var containers = document.querySelectorAll('.project.txwes .pic-container');
var pics = document.querySelectorAll('.viewing .txwes .pic');

function displayPic(container, pic) {

    var currentMouseEvent, prevMouseEvent;
    let x, y, h, w;

    function updateRect () {
        var rect = container.getBoundingClientRect();
        x = rect.left,
        y = rect.top,
        h = rect.height,
        w = rect.width;
        console.log(y);
    }    

    document.addEventListener('scroll', () => {
        console.log('scrolling...')
        updateRect();
    });

    container.addEventListener('mouseleave', () => {
        setTimeout(() => {
            pic.style.opacity = '0.5';
        },200)
        setTimeout(() => {
            pic.style.opacity = '0';
            // pic.style.display = 'none';
            pic.classList.add('notransition');
            pic.classList.remove('pic-transition');
        },400)
    })

    container.addEventListener('mouseenter', e => {
        currentMouseEvent = e;
        prevMouseEvent = e;
        setTimeout(() => {
            pic.classList.add('pic-transition')
            pic.classList.remove('notransition');
            pic.style.display = "block"; 
        },150)
        pic.style.top = (currentMouseEvent.clientY - y) + 'px';
        pic.style.left = (currentMouseEvent.clientX - x) + 'px';
    })

    container.addEventListener('mousemove', e => {
        currentMouseEvent = e;
        // pic.style.opacity = '0.2';
        setTimeout(() => {
            pic.classList.add('pic-transition')
            pic.style.opacity = '1';
            pic.style.display = "block";
        },200)
    })

    setInterval(() => {
        let a;
        let angle;
        if (prevMouseEvent && currentMouseEvent) {
            const movementX = currentMouseEvent.clientX - prevMouseEvent.clientX;
            const movementY = currentMouseEvent.clientY - prevMouseEvent.clientY;
            const speed = 10*Math.sqrt(movementX*movementX + movementY*movementY);

            if (speed == 0) {
                a = 0;
                angle = 0
            } else {
                if (movementX == 0) {
                    angle = 0
                } else if (movementX > 0) { //right-ward
                    if (movementX > 30 && speed > 600 && speed < 1000) {
                        a = speed/10;
                        angle = 3
                    } else {
                        a = 0;
                        angle = 1
                    }
                } else if (movementX < 0) { //left-ward
                    if (movementX < -30 && speed > 600 && speed < 1000) {
                        a = -speed/10;
                        angle = -3
                    } else {
                        a = 0;
                        angle = -1
                    }
                } 
            }
            pic.style.top = (currentMouseEvent.clientY - y) + 'px';
            pic.style.left = (currentMouseEvent.clientX - x) + 'px';
            pic.style.transform = 'rotateZ(' + angle + 'deg)';
        } 
        prevMouseEvent = currentMouseEvent;
    }, 100)
}

// containers.forEach(container => displayPic(container));
for (let i = 0; i < containers.length; i++) {
    displayPic(containers[i], pics[i])
}