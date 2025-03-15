
let bnt=document.querySelector("button");
let dateInput=document.querySelector('[type="datetime-local"]');
let containerOfEvents=document.querySelector(".two");
let datesArray=JSON.parse(window.localStorage.getItem("dates"));
let not=document.querySelector(".not");
let notShowing=document.querySelector(".not-showing");
let inputOfTiltle=document.querySelector(".title");
let inputOfMaakers=document.querySelector(".makers");
let eventsCOntiaer=document.querySelector(".events-container-events");
let imp=document.querySelector(".imp");
imp.style.textAlign="center";
imp.style.display="none";
console.log(imp);
if(datesArray&&datesArray.length>0)
{
let convertIntoAnArray=datesArray;
convertIntoAnArray.forEach((ele,index)=>
    {
        let event=document.createElement("article");
        const {titleEvent,makers,date}=ele;
        const title=document.createElement("h3");
        title.innerHTML=titleEvent;
        event.appendChild(title);
        if(makers)
        {
            let makersNew=document.createElement("h4");
            makersNew.innerHTML=makers;
            event.appendChild(makersNew);
        }
        let dateCont=document.createElement("h2");
        dateCont.innerHTML=date;
        event.appendChild(dateCont);
        eventsCOntiaer.appendChild(event);
        let rest=document.createElement("h2");
        event.appendChild(rest);
        event.classList.add("one","event","col-10","col-md-5","col-lg-4","mb-3","bg-success","text-white","position-relative");
        let eleOfDelete=document.createElement("i");
        eleOfDelete.classList.add("fa-solid","fa-xmark","text-danger");
        eleOfDelete.style.position="absolute";
        eleOfDelete.style.top="10px";
        eleOfDelete.style.right="10px";
        event.prepend(eleOfDelete);
        eleOfDelete.style.fontSize="x-large";
        eleOfDelete.style.fontWeight="bolder";
        event.setAttribute("index",index);
        eleOfDelete.onclick=(e)=>
        {
            console.log("clicked");
            let index=+e.target.parentElement.getAttribute("index");
            let aarrayFromStrogae=JSON.parse(window.localStorage.getItem("dates"));
            aarrayFromStrogae.splice(index,1);
            window.localStorage.setItem("dates",JSON.stringify(aarrayFromStrogae));
            upadatingUiWithoutAdding(aarrayFromStrogae);

        }
    })

}
else
{
    // making thre is no events exists:
 
    imp.style.display="block";

}
function checkValidationInputs()
{
    let state=true;
    let message="";
    let object=
    {
        titleEvent:"",
        makers:"",
        date:"",
    }
    // check on the title:
    if(!inputOfTiltle.value)
    {
        state=false;
        message+="you must adding event name or title";
    }
    else
    {
        object.titleEvent=inputOfTiltle.value;
    }
    // check on the makers:
    if(inputOfMaakers.value)
    {
        object.makers=inputOfMaakers.value;
    }
    // check on the date:
    if(!dateInput.value)
    {
        state=false;
        message+="you must add the date of the event also";
    }
    else
    {
        // heck on the date:
        const dateNew=new Date(dateInput.value);
        const dateNow=new Date();
        if(dateNew<dateNow)
        {
            state=false;
            message+="the date is must be valid date";
        }
        object.date=dateInput.value;
    }
    return {
        success:state,
        object,
        message
    }
}
function updateUi(newEventObject)
{
    eventsCOntiaer.innerHTML="";
    imp.style.display="none";
let events=window.localStorage.getItem("dates");
if(events)
{
    console.log("i enter this");
events=JSON.parse(events);
events.push(newEventObject);
console.log(events);
// save teh new evets:
window.localStorage.setItem("dates",JSON.stringify(events));
// upadet the ui based on the array:
events.forEach((ele,index)=>
    {
        let event=document.createElement("article");
        const {titleEvent,makers,date}=ele;
        const title=document.createElement("h3");
        title.innerHTML=titleEvent;
        event.appendChild(title);
        if(makers)
        {
            let makersNew=document.createElement("h4");
            makersNew.innerHTML=makers;
            event.appendChild(makersNew);
        }
        let dateCont=document.createElement("h2");
        dateCont.innerHTML=date;
        event.appendChild(dateCont);
        eventsCOntiaer.appendChild(event);
        let rest=document.createElement("h2");
        event.appendChild(rest);
        event.classList.add("one","event","col-10","col-md-5","col-lg-4","mb-3","bg-success","text-white","position-relative");
        let eleOfDelete=document.createElement("i");
        eleOfDelete.classList.add("fa-solid","fa-xmark","text-danger");
        eleOfDelete.style.position="absolute";
        eleOfDelete.style.top="10px";
        eleOfDelete.style.right="10px";
        event.prepend(eleOfDelete);
        eleOfDelete.style.fontSize="x-large";
        eleOfDelete.style.fontWeight="bolder";
        event.setAttribute("index",index);
        eleOfDelete.onclick=(e)=>
        {
            console.log("clicked");
            let index=+e.target.parentElement.getAttribute("index");
            let aarrayFromStrogae=JSON.parse(window.localStorage.getItem("dates"));
            aarrayFromStrogae.splice(index,1);
            window.localStorage.setItem("dates",JSON.stringify(aarrayFromStrogae));
            upadatingUiWithoutAdding(aarrayFromStrogae);

        }
    })
}
else
{
    //htere is no events alrady i  the satprage:
    let array=[newEventObject];
    // save in the local storage:
    window.localStorage.setItem("dates",JSON.stringify(array));
    array.forEach((ele,index)=>
        {
            let event=document.createElement("article");
        const {titleEvent,makers,date}=ele;
        const title=document.createElement("h3");
        title.innerHTML=titleEvent;
        event.appendChild(title);
        if(makers)
        {
            let makersNew=document.createElement("h4");
            makersNew.innerHTML=makers;
            event.appendChild(makersNew);
        }
        let dateCont=document.createElement("h2");
        dateCont.innerHTML=date;
        event.appendChild(dateCont);
        eventsCOntiaer.appendChild(event);
        let rest=document.createElement("h2");
        event.appendChild(rest);
        event.classList.add("one","event","col-10","col-md-5","col-lg-4","mb-3","bg-success","text-white","position-relative");
        let eleOfDelete=document.createElement("i");
        eleOfDelete.classList.add("fa-solid","fa-xmark","text-danger");
        eleOfDelete.style.position="absolute";
        eleOfDelete.style.top="10px";
        eleOfDelete.style.right="10px";
        event.prepend(eleOfDelete);
        eleOfDelete.style.fontSize="x-large";
        eleOfDelete.style.fontWeight="bolder";
        event.setAttribute("index",index);
        eleOfDelete.onclick=(e)=>
        {
            console.log("clicked");
            let index=+e.target.parentElement.getAttribute("index");
            let aarrayFromStrogae=JSON.parse(window.localStorage.getItem("dates"));
            aarrayFromStrogae.splice(index,1);
            window.localStorage.setItem("dates",JSON.stringify(aarrayFromStrogae));
            upadatingUiWithoutAdding(aarrayFromStrogae);

        }
        });
}

}
// adding new event:
function addingNewEvent()
{
// check on the validation first:
const resultFromVliadation=checkValidationInputs();
if(resultFromVliadation.success)
{
 // if it true
    updateUi(resultFromVliadation.object);
}
else
{
    // get the message:
    notShowing.innerHTML=resultFromVliadation.message;
    not.style.top="10px";
    window.setTimeout(()=>
    {
        notShowing.innerHTML="";
        not.style.top="-1000px";
    },2000);
}
}
bnt.onclick=()=>
{
    addingNewEvent();
}


    window.setInterval(() => {
        let allEvents = document.querySelectorAll(".event");
        if (allEvents.length == 0) {
            console.log("there is no events");
        } else {
            allEvents.forEach((ele) => {
               
    
                // حساب الفرق بالمللي ثانية
                dayjs.extend(dayjs_plugin_duration);
                dayjs.extend(dayjs_plugin_relativeTime);
                
                let dateNow = dayjs();
                let dateIwant = dayjs(ele.lastElementChild.previousElementSibling.innerHTML);
                let duration = dayjs.duration(dateIwant.diff(dateNow));
                ele.lastElementChild.innerHTML = `${duration.years()} year - ${duration.months()} month - ${duration.days()} day - ${duration.hours()} hour - ${duration.minutes()} minutes - ${duration.seconds()} seconds`;
            });
        }
    }, 1000);
    
    function upadatingUiWithoutAdding(array)
    {
        eventsCOntiaer.innerHTML="";
        if(array.length==0)
        {
            imp.style.display="block";
        }
        else
        {
            imp.style.display="none";
        array.forEach((ele,index)=>
            {
                let event=document.createElement("article");
        const {titleEvent,makers,date}=ele;
        const title=document.createElement("h3");
        title.innerHTML=titleEvent;
        event.appendChild(title);
        if(makers)
        {
            let makersNew=document.createElement("h4");
            makersNew.innerHTML=makers;
            event.appendChild(makersNew);
        }
        let dateCont=document.createElement("h2");
        dateCont.innerHTML=date;
        event.appendChild(dateCont);
        eventsCOntiaer.appendChild(event);
        let rest=document.createElement("h2");
        event.appendChild(rest);
        event.classList.add("one","event","col-10","col-md-5","col-lg-4","mb-3","bg-success","text-white","position-relative");
        let eleOfDelete=document.createElement("i");
        eleOfDelete.classList.add("fa-solid","fa-xmark","text-danger");
        eleOfDelete.style.position="absolute";
        eleOfDelete.style.top="10px";
        eleOfDelete.style.right="10px";
        event.prepend(eleOfDelete);
        eleOfDelete.style.fontSize="x-large";
        eleOfDelete.style.fontWeight="bolder";
        event.setAttribute("index",index);
        eleOfDelete.onclick=(e)=>
        {
            console.log("clicked");
            let index=+e.target.parentElement.getAttribute("index");
            let aarrayFromStrogae=JSON.parse(window.localStorage.getItem("dates"));
            aarrayFromStrogae.splice(index,1);
            window.localStorage.setItem("dates",JSON.stringify(aarrayFromStrogae));
            upadatingUiWithoutAdding(aarrayFromStrogae);
        }
            });
        }
    }


  




