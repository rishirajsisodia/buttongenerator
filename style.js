let label_name=document.getElementById('label_name');
let color1 = document.getElementById('colorholder1');
let color2 = document.getElementById('colorholder2');
let fsize = document.getElementById('Font_size');
let pt = document.getElementById('padding_top');
let pb = document.getElementById('padding_bottom');
let pl = document.getElementById('padding_left');
let pr = document.getElementById('padding_right');
let bsize= document.getElementById('border_size');
let bcolor = document.getElementById('border_color');
let bradius = document.getElementById('border_radius');
let btype = document.getElementById('border-type');

//BUTTON

let btn=document.getElementById('btn');

//LABEL NAME 
let defaultname="label";
label_name.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.textContent=e.target.value;
        }
    else{
        btn.textContent=defaultname;
    }
});

let fillcolor;
// BUTTON COLOR 
let defcolor="#000000";
color1.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.color=e.target.value;
            fillcolor=e.target.value;
        }
    else{
        btn.style.color=defcolor;
    }
});


// FONT SIZE 
fsize.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.fontSize=e.target.value+"px";
        }
    else{
        btn.style.fontSize="20px";
    }
});

//PADDING TOP 
pt.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.paddingTop=e.target.value+"px";
        }
    else{
        btn.style.paddingTop="20px";
    }
});

//PADDING BOTTOM
pb.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.paddingBottom=e.target.value+"px";
        }
    else{
        btn.style.paddingTop="20px";
    }
});

//PADDING LEFT
pl.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.paddingLeft=e.target.value+"px";
        }
    else{
        btn.style.paddingTop="20px";
    }
});


//PADDING RIGHT 

pr.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.paddingRight=e.target.value+"px";
        }
    else{
        btn.style.paddingTop="20px";
    }
});


//BORDER

bsize.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.borderWidth=e.target.value+"px";
        }
    else{
        btn.style.borderWidth="1px";
    }
});

//BORDER

bcolor.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.borderColor=e.target.value;
        }
    else{
        btn.style.borderColor="#000000";
    }
});


//BORDER RADIUS
bradius.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.borderRadius=e.target.value+"px";
        }
    else{
        btn.style.borderRadius="0px";
    }
});


//BACKGROUND
color2.addEventListener("input",e =>{
    if(e.target.value.length!=0)
        {
            btn.style.background=e.target.value;
        }
    else{
        btn.style.background="#ccc";
    }
});


let htmlc=document.getElementById("htmlcode");
let codeprint=document.getElementById('codeprinter');
let generate=document.getElementById('generator');
generate.onclick=()=>{
htmlc.textContent=`<button id='btn'>${label_name.value}</button>`
codeprint.innerHTML=
`#btn{
color:${label_name.value};<br>
font-size:${fsize.value}px;<br>
padding-top:${pt.value}px;<br>
padding-right:${pr.value}px;<br>
padding-bottom:${pb.value}px;<br>
padding-left:${pl.value}px;<br>
border-color:${bcolor.value};<br>
border-size:${bsize.value}px;<br>
border-radius:${bradius.value}px;<br>
background: ${color2.value};<br>
}`
}