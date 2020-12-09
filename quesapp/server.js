var http=require("http");
var fs=require("fs");
var qstring=require("querystring");
var url=require("url");
var fact=require("./factorial");
var pri=require("./prime");
var tab=require("./table");

function process_request(req,resp)
{
    const p=url.parse(req.url);//http://localhost:8181......................../calc?num=3&sub=SUBMIT
    console.log("query string : "+p.query);
    console.log("path : "+p.path);
    console.log(req.url);

    switch(p.pathname)
    {
        case "/":
            fs.readFile("ques2data.html",function(err,data)
            {
                if(err)
                {
                    resp.end("error");
                    console.log("error");
                }
                else{
                    resp.end(data);
                }
            });
            break;
            case "/calc":
                var d=qstring.parse(p.query);// /calc?num=3&sub=SUBMIT...........d={num:3,sub:"SUBMIT"}
                console.log("in calc");
                console.log(d.num);
                if(d.num<=5)
                {
                    //-------factorial----------------
                var factans=fact.factorial(d.num);
                resp.end("factorial is :: "+factans);
               
                }
                else if(d.num>5 && d.num<=10)
                {
                    //resp.end("The number is "+d.num);
                    var tabans=tab.table(d.num);
                    
                    resp.end("the table of "+d.num+" is as follows\r\n"+tabans);
                }
                else
                {
                    var primeno=pri.prime(d.num);
                    if(primeno==true)
                    {
                        resp.end("Its a prime number");
                    }
                    else
                    {
                        resp.end("Its NOT!!! a prime number");
                    }
                }
                               


                break;
    }


}

var srv=http.createServer(process_request);
srv.listen(8081);
console.log("Server is started on port number 8181");

