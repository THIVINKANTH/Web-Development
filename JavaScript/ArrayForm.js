let studentvalues=["thivin","pradeep","thilak","manoj"];

var creating=()=>
{
    let temp=document.getElementById('users');
    studentvalues.push(temp.value);
    alert("Your Value is added"+temp.value)
}


let viewpoint=()=>
{
    let hi="";
    studentvalues.map((data)=>
    {
        hi+="<tr><td>"+data+"</td></tr>"
    })
    const performance=document.getElementById('live');
    performance.innerHTML="<table align='center' style='padding:10px 10px 5px 10px; box-shadow:5px 6px 4px yellow;'><thead><tr><th>Student Names</th></tr></thead><tbody>"+hi+"</tbody></table>"
}


let updating=()=>
{
    let index=document.getElementById('users').value
    const newone=prompt("tell us which value you want update/replace"+studentvalues[index])
    studentvalues[index]=newone;
}



var deleting=()=>
{
    let temp=document.getElementById('users').value
    studentvalues=studentvalues.filter((data)=>
    {
        return data!==temp;
    })
}

var searching=()=>
{
    let temp=document.getElementById('users').value;
    for(let index=0;index<studentvalues.length;index++)
    {
        if(studentvalues[index]===temp)
        {
            return index;
        }
    }
}