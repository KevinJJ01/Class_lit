import { LitElement, html } from "lit-element";
import styleNav from "./styleNav";

export class MyElement extends LitElement{

    static get styles(){
        return [styleNav];
    }

    render() {
        return html `
        <div class="row nav" >
        
        <div class="col-sm banner" >
            <img src="logo2.png"  width="50px" height="50px" style="float: inline-start; margin-top: 10px; background-color: aliceblue; border-radius: 50px;"> 
            <div class="col-sm banner_text" >
               <h5 style="margin-left: 1px; padding: 8px;">Usuarios</h5>
            </div>
        </div>

        <div class="col-sm" >
            
        </div>
 
    </div>`;
    }
}

customElements.define('my-nav', MyElement)