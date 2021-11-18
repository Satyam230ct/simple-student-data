{
    var a=3,b=2,c=1;
    $("form button").click({aa:a,bb:b,cc:c},fun);
}
var items=$("#items");

function fun(e)
{
    console.log(e.data.aa);
    console.log(e.data.bb);
    console.log(e.data.cc);
    console.log(e);
    let roll=$("#roll").val();
    let name=$("#name").val();
    let marks=$("#marks").val();
    e.preventDefault();
    if(roll==="" || name==="" || marks==="")
    {
        alert("Please fill all the fields");
    }
    else
    {
        let item='<div class="items">Roll no - <span class="highlight">'
        +roll+'</span>, <span class="highlight">'+name+
        '</span> ,have got <span class="highlight">'+ marks +
        '</span> marks </div>';
        console.log(item);
        items.append(item);
        $("#roll").val("");
        $("#name").val("");
        $("#marks").val("");
    }
}
