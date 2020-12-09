exports.table=function(num)
{
    var ans="";
    for(var i=1;i<=10;i++)
    {
        ans+=i+"x"+num+"="+parseInt(num*i)+"\r\n";
    }
    return ans;
}