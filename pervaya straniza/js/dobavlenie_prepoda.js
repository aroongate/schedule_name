

 document.querySelector('#out').onclick = function(){
   // var clonedNode = document.getElementById("test").cloneNode(true);
   // document.getElementsByClassName('test__prepoda')[0].style= "top:297px";
   // document.getElementsByClassName('test__prepoda__nadpis')[0].style= "top:+10px";
   // console.log(clonedNode)
    let a = document.createElement('div');
    a.className='test__prepoda';
    a.id="a";
    document.body.append(a);
    let c =document.createElement('div')
    c.className='test__prepoda__nadpis__2'
    c.id="c"
    document.body.append(c);
    let b = document.createElement('button', function(){
      
      let elem = document.getElementById("qe");
      elem.parentNode.remove(elem)
      //   let elem2 = document.getElementById("krestik");
      // elem.parentNode.removeChild(elem2)
      //   let elem3 = document.getElementById("c");
      // elem.parentNode.removeChild(elem3)
        
  } );
  b.className='krestik__2';
  b.id='krestik'
    
    document.body.append(b);
    
    console.log(a)
    console.log(b)
    console.log(c)
    
}
