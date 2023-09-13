// cros  origin resourse shariNg        CORS
//so cors is the mechanism which handels additional https headers ,to tell the browsers whether a specific we app can share resouces 
//with another web app
//nut major point is both app is having different origin
//as if they have same origin then they can share resouces very easily
//and if they do not have same origin then they need to follow cors mechanism
//so when cors was not standardlize ,browsers never allow to share resources b/w different origin

//like origin means here
//suppose in have domain name 

//https://akshaysaini.in
//so browser will not allow  to share data with these different origins
//                                google.com/api/get_data------different origin not allowed
//                                akshaysaini.in/api/dat-------this is also not allowed like fetching from subdomains
//                              akshaysaini.in:5050  ---like maing call with other ports---also not allowed
//                                http://akshaysaini.in----neither different protocols were allowe to share data
//                                


//but after cors mechanism came we can share resources
// SEE THE thing is that browsers do not allowing resourcse sharing 



//questions
//q-1   ,there are two differernt origins/domains A and B and now they want to share data ,how can they do thhis?
//like A is requesting something form B
// cors preflight mechanism if followed
//like A want to do some post call
// so  in cors prefligh ....preflight/options call is make before the actual api call is  then server B takes
//the responsiblity of verfying whether this call is valid or not....and after that as soon as it realizes it is valid is send
//some additional http headers to orgin to A ,then after receiving this  actual api call is made ,then after taht resouces will get 
//shared

//now these additonal headers are
//    [action-control-allow-origin:*]--this will lead to acces to anyone of differnt origin ,i.e anyone can take or share resouces with
//this origin
//but if they want to share resouces with only specific one then they can do like
// [action-control-allow-origin:https//www.goole.com]
//no according to thsi only goofle.com can accsess his resources

//there are more http headers like
//[access-control-allow-methods:get]
//[access-control-allow-method:put]

//so always there are not call like ,all the call folllow CORS mechanism
//means sometime there are simple calls and some time calls follow preflight cors mechanism