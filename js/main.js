//import * from "./hesabu.js" or import * as calc from "./hesabu.js"

import {volume_sphere, area_circle,surface_area_sphere, greet as salamu} from "./hesabu.js";
import greet, {sum} from "./example.js";

 let area = area_circle(7)
console.log(`Area of circle is ${area} and volume os a sphere is ${volume_sphere(7)}`)

//node js/main.js
greet()
salamu()

sum(5,6)
