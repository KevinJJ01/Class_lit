import { LitElement, html } from "lit-element";
import styleContent from "./styleContent";

export class MyElement extends LitElement{

    static get styles(){
        return [styleContent];
    }

    render() {
        return html `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="dashboard.css">
            <title>SITTS</title>
        </head>
        <body>
        
        
            <div class="row" >
        
                <div class="col-sm-3 options" >
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong><a href="dashboard.html" style="color: black; text-decoration: none;">Inicio</a></strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong><a href="presidencia.html" style="color: black; text-decoration: none;">Presidencia</a></strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
        
                    <div class="col-sm optionss">
                        <img src="/81206380-balón-de-fútbol-americano-icono.png" width="20px" height="20px" >
                        <strong>dcnskdcasdac</strong>
                    </div>  
                </div>
        
        
        
                <div class="col-sm tarjets" >
                    <div class="col-sm texto" >
                    
                        <h1>BIENVENID@ AL SISTEMA INTEGRADO DE PUMAS</h1>
                        <h2>PUMAS TIC</h2>
                    
                    </div>
                    
                </div>
        
        
            </div>`;
    }
}

customElements.define('my-content', MyElement)