import {css} from 'lit-element'


export default css `

    body{
        background-image: url("./imagen.png");
        background-size: cover;
        background-repeat:no-repeat ;
        
    }
    .titulo{
        background-color: red !important;
        text-align: center;
        color:white;
        font-size: 80px;
    }

    .card{
        margin-top: 100px !important;
        
    }
    

    .form{
        text-align: center;
    }

    .button{
        text-align: center;

    }

    .boton{
        background-color: red !important;
    }

    .form input{
        border: none !important;
        border-bottom: red 0.5px solid !important;
        width: 400px;
    }
}

`