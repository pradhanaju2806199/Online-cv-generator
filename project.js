function AddNewWorkExperience(){
// for dynamically adding textarea for work experience
let newnode=document.createElement('textarea');//it will create the new textarea
newnode.classList.add('form-control');//it will add the classes into that created input form(here the textarea)
newnode.classList.add('WeField');//it will add the classes into that created input form(here the textarea)
newnode.setAttribute("row",3);//it will set the the attributes to that input button
newnode.setAttribute('placeholder','enter here');//it will set the the attributes to that input button

let WorkExperienceob = document.getElementById("WorkExperience");//taking the reference for adding the new 
//node(here textarea) inside this container by the help of the id
let WorkExperienceAddButtonob = document.getElementById("WorkExperienceAddButton");// this reference taken 
//because we have to specify "before it" tag  

WorkExperienceob.insertBefore(newnode,WorkExperienceAddButtonob);//as the expression says insering the newnode
// (here textaera) before "WorkExperienceAddButtonob" inside "WorkExperienceob" 

}
function AddNewAq(){
// for dynamically adding textarea for academic qualification
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('AqField');
    newnode.setAttribute("row",3);
    newnode.setAttribute("placeholder",'Enter here');

    let aqob=document.getElementById("aq");
    let AqAddButtonob=document.getElementById("AqAddButton");

    aqob.insertBefore(newnode,AqAddButtonob);
    
}
function GenerateCV(){

    // for first column in cv template
    let NameFiel=document.getElementById("NameField").value;
    let Name=document.getElementById("NameT1");
    Name.innerHTML=NameFiel;

    document.getElementById("NameT2").innerHTML = document.getElementById("NameField").value;
    document.getElementById("AddressT").innerHTML = document.getElementById("AddressField").value;
    document.getElementById("NumberT").innerHTML = document.getElementById("NumberField").value;
    document.getElementById("EmailT").innerHTML = document.getElementById("EmailField").value;
    document.getElementById("FacebookT").innerHTML = document.getElementById("FacebookField").value;
    document.getElementById("InstagramT").innerHTML = document.getElementById("InstagramField").value;
    document.getElementById("LinkedinT").innerHTML = document.getElementById("LinkedinField").value;
    

    // for second column in cv template
    document.getElementById("ObjectiveT").innerHTML=document.getElementById("ObjectiveField").value;

    // for the work experience field

    let wes=document.getElementsByClassName('WeField');
    let str='';
    for(let e of wes)
    {
        str=str+`<li> ${e.value}</li>`;
    }
    
    document.getElementById('wet').innerHTML=str;
    // for the academic qualification

    let aqs=document.getElementsByClassName("AqField");
    let str1='';
    for(let e of aqs){
        str1=str1+`<li>${e.value}</li>`;
    }

    document.getElementById('aqt').innerHTML=str1;

    // code for image
    let file=document.getElementById("ImageField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);

    //basically onloadend is for -> while we are reading a file it may take some time and while 
    // document.getElementById("ImageT").src=reader.result; runs by that time it was not read completely so that onloadend 
    //will do after the complete reading of the file it will execute the following tasks
    reader.onloadend=function()
    {
        document.getElementById("ImageT").src=reader.result;

    }
    

    //form hide and template show
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    document.getElementById('EditCV').style.display='block';
    document.getElementById('Download').style.display='block';

}

function EditCV(){

    document.getElementById('cv-form').style.display='block';
    document.getElementById('cv-template').style.display='none';
    document.getElementById('EditCV').style.display='none';
    document.getElementById('Download').style.display='none';

}

// function GeneratePDF(){

//     const element=document.getElementById("NameField");
//     html2pdf().from('element').save();
// }

window.onload=function(){document.getElementById("download").addEventListener("click",()=>{const invoice=this.document.getElementById('cv-template');

html2pdf().from(invoice).save();
})}