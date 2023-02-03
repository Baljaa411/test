import React from "react";
import styles from "./style.module.css"
import { getClasses } from "./getClasses";


const Button = ({variant, text, img}) =>{
    const buttonTypes ={
        black: 'black',
        blue: 'blue',
    }
    return(
        <div>
                <button className={getClasses([styles.button, styles[`button-${buttonTypes[variant]}`]])}>
                
                    {text}</button>
                    <img src={img} alt="img" className={variant==="black" ? styles.displayNone : styles.img}/>

               
        </div>
    )
}

export default Button