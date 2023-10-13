import pizzaImg from "../images/pizza.png"
import burgerImg from "../images/burger.png"
import icecreamImg from "../images/icecream.png"
import icecream1Img from "../images/icecream1.png"
import kebabImg from "../images/kebab.png"
import saladImg from "../images/salad.png"
import waterImg from "../images/water.png"
import colaImg from "../images/coca.png"

export function getData(){
    return[
        {title:"Pizza", price:17.99, Image: pizzaImg, id:1},
        {title:"Burger", price:10.99, Image: burgerImg, id:2},
        {title:"IceCream", price:8.99, Image: icecreamImg, id:3},
        {title:"IceCream1", price:11.99, Image: icecream1Img, id:4},
        {title:"Kebab", price:7.99, Image: kebabImg, id:5},
        {title:"Salad", price:9.99, Image: saladImg, id:6},
        {title:"Water", price:5.99, Image: waterImg, id:7}, 
        {title:"Cola", price:6.99, Image: colaImg, id:8}   ];
}
//export default getData