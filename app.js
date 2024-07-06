// document.write('<h1>Hello BANGLADESH</h1>')
// alert('Hello BANGLADESH')
// console.log('Hello BANGLADESH')
// document.querySelector('h2').innerHTML = 'Hello World'

// var HeadingText = '<h1>Hello Sabbir Hosen</h1>'; //String data 
// var number = 100; //Integer data 

// document.write(HeadingText)
// document.write(HeadingText)
// document.write(HeadingText)
// document.write(HeadingText)
// document.write(HeadingText)
// document.write(HeadingText)
// document.write(HeadingText)
// document.write(HeadingText)
// document.write(HeadingText)
// document.write(HeadingText)



// document.write('') --> kaj kore InterFace er jonno
// alert('') --> kaj kore Reload er jonno
// console.log('') --> kaj kore Browser a inspact er jonno
// document.querySelector('h2').innerHTML = 'Hello World' -->  kaj kore HTML er kono content k replace korar jonno
// var likhe kono kichuke copy kore rakha jai --> for example, var HeadingText = '<h1>Hello Sabbir Hosen</h1>' & it's runing process is document.write(HeadingText)
// Operator, Loop
// Arithmetics Operator {+, -, *, /, %} for example -->
// var sum = 10 + 15
// console.log (sum);

// Assign Operator --> for example 
// var sum = 150;
// sum += 150;
// console.log(sum);

// Comparison Operator {==, ===, !=, !==, >, <, >=, <=} for example -->

// console.log(sum);

// Logical Operator
// Increment/Decrement {++, --}


// Loop kaj koranor shorto, Loop kaj kore 3ti bishoy er upor nirvor kore 
// Loop ---> Initilization(start up point), Condition(stopage), Increment/Decrement

// for(var i = 1; i <= 1000; i++) {
//     document.write('<h1>' + i + '</h1>')
// }


for(var i = 1; i <= 50; i++) {
    document.write('<div class="namta">')
    for(var j = 1; j <= 10; j++) {
        document.write(i + " X " + j + " = " + i * j + "<br>")
    }
    document.write('</div>')
}