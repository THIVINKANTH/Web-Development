var customerentry=[Thivin,Pradeep,Manoj];

let creating=()=>
{
    let temp=document.getElementById('register')
    customerentry.push(temp.value)
    alert("your value is added Successfully"+temp.value)
}