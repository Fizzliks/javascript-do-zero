const a = []
const b = 20
const c = true 
const d = ''

//true
if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

//true
if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

//false
if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

//true
if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}