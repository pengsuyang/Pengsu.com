body {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    background: pink;
}


.container{
    display: flex;
    width: 90vw;
}


.panel{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    margin: 10px;
    flex: 1;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    color: white;
    transition: all 0.5s ease-in;
}


.panel.active{
    flex: 10;


}


.panel.active h3{
    opacity: 1;
    transition: opacity 0.25s ease-in 0.25s;
}


.panel h3{
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left:20px;
    opacity: 0;
}


@media (max-width: 480px) {
    .container {
        width: 100vh;
    }


    .panel:nth-of-type(4)
    .panel:nth-of-type(5){
        display:none;
    }
}
