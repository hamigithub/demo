// function a(){
//                     return 10;//这个时候，函数a的值会等于10，并且函数中下面的内容不再执行
//                     document.write(50);//由于上面已经return了，这条代码不会执行
//             };
// console.log(a());





 // function  a( b, c ) {
 //                    return b  + c;
 //                    }

 //    var b = a(5, 80);//这里调用一下，将参数传进函数

 //    console.log(b);//这个时候，b这个变量的值会是85





// function a( b, c ) {
//                     document.write( b + c );
//                     }
//                     var b = a(5, 80);//这里调用一下，将参数传进函数；
//        console.log(b);//这个时候页面会输出运算结果，但是变量b是没有值的，为 undefined 




    //也可以说默认函数是没有返回值的。
    // 通常函数经过一系列处理后需要给外部返回一个值或者对象
    // function ba(a,b){
    //     // return a+b;
    //     document.write(a+b);
    // }
    
    // alert(ba(1,2));
    // 如果没有return将会弹出undefined


// function counter() {
//                     for (var count = 1;count<10;count++){   // infinite loop
//                     console.log(count + "A");

//                     return;                         //直接就返回了，下面的代码不会再执行

//                     console.log(count + "B");
                    
//                     console.log(count + "C");
//                     }
//                     }

                
//                     console.log(counter());





// function counter() {
//                     for (var count = 1; count<10 ; count++) {  // infinite loop
                    
//                     console.log(count + "A"); // until 5
                    
//                     if (count === 5) {
//                         return;
//                     }

//                     console.log(count + "B");  // until 4 
                    
//                     }
                    
//                     console.log(count + "C");  // never appears
//                     }

//                     counter();