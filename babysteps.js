var s=process.argv;
var sum=0;
for (var i=2;i<s.length;i++)
{
    var x=parseInt(s[i]);
    sum=sum+x;
}
console.log(sum);