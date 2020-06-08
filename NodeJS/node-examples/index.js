var rect=require('./rectangle');
var square=
{
    perimeter:(side) => 4*side,
    area:(side) => side*side 
}

function calcrect(l,b)
{
    if(l>0 && b>0)
    {console.log("Solving rectangle perimeter"+rect.perimeter(l,b));
    console.log("Solving rectangle area"+rect.area(l,b));}
    else
    console.log("Negative values? really bro? ");
}

calcrect(2,4);
calcrect(-1,3);
calcrect(17,13);
