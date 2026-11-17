let day = prompt('Enter day of the week', 1)
switch (+day) {//put + to convert string to number
    case 1: //if day ==1
        console.log('overtime salary is 200/hr')
        break

    case 2: //if day ==2
        console.log('overtime salary is 210/hr')
        break
    case 3: //if day ==3
        console.log('overtime salary is 220/hr')
        break
    case 4: //if day ==4
        console.log('overtime salary is 240/hr')
        break
    case 5: //if day ==5
        console.log('overtime salary is 206/hr')
        break
    default:
        console.log('no pay for other days')
}