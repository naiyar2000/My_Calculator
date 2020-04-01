const generalbtns = document.querySelectorAll('.generalbtns .dark');
const generalbtnslighter = document.querySelectorAll('.generalbtns .lighter');
const generalbtnslightblue = document.querySelectorAll('.generalbtns .lightblue');
const specialbtns = document.querySelectorAll('.specialbtns button');
let display2 = document.querySelector('.input2');
let display1 = document.querySelector('.input1');
let num = document.querySelectorAll('.num');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let substract = document.querySelector('.substract');
let addition = document.querySelector('.addition');
let clearAll = document.querySelector('.clearAll');
let clear = document.querySelector('.clear');
let back = document.querySelector('.back');
let equal = document.querySelector('.lightblue');
let dispvalue1 = '';
let dispvalue2 = '0';
//Background color shades when cursor hovers over buttons
    generalbtns.forEach((btns)=>{
        btns.addEventListener('mousemove', runevent1);
    });
    function runevent1(e){
        let vary = (e.offsetX/e.offsetY)/6;
        e.target.style.background = "rgba(117, 116, 116,"+vary+")";
        e.target.style.border = "rgb(117, 116, 116) solid 1px";
        e.target.addEventListener('mouseleave',()=>{
        e.target.style= "#000000";
        });
    };
    generalbtnslighter.forEach((btns)=>{
        btns.addEventListener('mousemove', runevent2);
    });
    function runevent2(e){
        let vary = (e.offsetX/e.offsetY)/18;
        e.target.style.background = "rgba(3, 3, 3, "+vary+")";
        e.target.style.border = "rgb(117, 116, 116) solid 1px";
        e.target.addEventListener('mouseleave',()=>{
        e.target.style= "rgba(3, 3, 3, 0.555)";
        });
    };
    generalbtnslightblue.forEach((btns)=>{
        btns.addEventListener('mousemove', runevent3);
    });
    function runevent3(e){
        let vary = (e.offsetX/e.offsetY)/8;
        e.target.style.background = "rgba(16, 191, 245, "+vary+")";
        e.target.style.border = "rgb(117, 116, 116) solid 1px";
        e.target.addEventListener('mouseleave',()=>{
        e.target.style= "rgba(16, 191, 245, 0.5)";
        });
    };
    specialbtns.forEach((btns)=>{
        btns.addEventListener('mousemove', runevent4);
    });
    function runevent4(e){
        let vary = (e.offsetX/e.offsetY)/8;
        e.target.style.background = "rgba(117, 116, 116, "+vary+")";
        e.target.style.border = "rgb(117, 116, 116) solid 1px";
        e.target.addEventListener('mouseleave',()=>{
        e.target.style= "rgba(16, 191, 245, 0.5)";
        });
    };

//Display on the screen on click
    num.forEach((btns)=>{
        btns.addEventListener('click', (e)=>{
            if(dispvalue1 === '0')
            {
                dispvalue1 = '';
            }
            if(dispvalue2 === '0')
            {
                dispvalue2 = '';
            }
                dispvalue1 += e.target.innerText;
                dispvalue2 += e.target.innerText;
                display1.innerText = dispvalue1;
                display2.innerText = dispvalue2;
        });
    });

    multiply.addEventListener('click', clickdisp);
    divide.addEventListener('click', clickdisp);
    addition.addEventListener('click', clickdisp);
    substract.addEventListener('click', clickdisp);
   
    function clickdisp(e){
        if(dispvalue1 === '0')
        {
            dispvalue1 = '';
        }
            dispvalue1 +=   e.target.innerText;
            display1.innerText = dispvalue1;
            dispvalue2 = '0';
            display2.innerHTML = dispvalue2;
    };


//Clear display screen
    clear.addEventListener('click', clearfield);
    clearAll.addEventListener('click', clearfield);
    back.addEventListener('click', backfield);
    function clearfield(){
        dispvalue1 = '';
        dispvalue2 = '0';
        display1.innerText = dispvalue1; 
        display2.innerText = dispvalue2; 
    }
    function backfield(){
        let lengthdisp2 = dispvalue2.length;
        dispvalue2 = dispvalue2.slice(0, lengthdisp2 - 1);
        if(dispvalue2 === '')
        {
            dispvalue2 = '0';
        }
        display2.innerText = dispvalue2;
    }


//Evaluate
    equal.addEventListener('click', ()=>{
        let evalStringArray = [];
        let pendingval = display1.innerText;
        for(i=0; i<pendingval.length; i++)
        {
            if(pendingval[i] === 'x'){
                evalStringArray.push('*');
            }
            else{
                evalStringArray.push(pendingval[i]);
            }
        }
        
        let evaluated = eval(evalStringArray.join(' '));
        dispvalue2 = evaluated + ' ';
        display2.innerText = dispvalue2;
       /*  pendingval.forEach((val)=>{
            console.log(val);
        }) */
        console.log(pendingval)
        evalStringArray = [];
        
 /*      evalStringArray.push(dispvalue1.innerHTML);
        console.log(display1.innerHTML);
        let evaluated = eval(evalStringArray.join(' '));
        dispvalue2 = evaluated + '';
        console.log(evaluated); */
    });
 
     /* multiply.addEventListener('click', performOperation);
    divide.addEventListener('click', performOperation);
    substract.addEventListener('click', performOperation);
    addition.addEventListener('click', performOperation);
    equal.addEventListener('click', performOperation); 
  
    function performOperation(e){
        let operator = e.target.innerText;
        console.log(operator);
        switch(operator){
            case '+':
                pendingval = dispvalue1;
                dispvalue1 = '0';
                display2.innerText = displvalue1;
                evalStringArray.push(pendingval);
                evalStringArray.push('+');
                break;

            case '-':
                pendingval = dispvalue1;
                dispvalue1 = '0';
                display2.innerText = displvalue1;
                evalStringArray.push(pendingval);
                evalStringArray.push('-');
                break;

            case 'x':
                pendingval = dispvalue1;
                dispvalue1 = '0';
                display2.innerText = dispvalue1;
                evalStringArray.push(pendingval);
                evalStringArray.push('*');
                break;

            case '/':
                pendingval = dispvalue1;
                dispvalue1 = '0';
                display2.innerText = dispvalue1;
                evalStringArray.push(pendingval);
                evalStringArray.push('/');
                break;

            case '=':
                evalStringArray.push(dispvalue1);
                let evaluation = eval(evalStringArray.join(' '));
                console.log(evaluation);
                dispvalue1 = evaluation + '';
                display2.innerText = dispvalue1;  
                evalStringArray = [];
                break;
            
            default:
                break;
        }
    } */