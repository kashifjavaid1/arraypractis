// var names=["Ali","kashif","javaid","umer","Hamza","abdullah","asad","usama","rehman","numan","abubaker"];
// // console.log("name","=",names[5]);
// for (let abc = 0; abc < names.length; abc++) {
//     console.log("index",abc);
//     console.log("Name","=",names[abc]);
    
// }

// function ab() {
//     console.log(window.print());
//     // window.print()
// }

var car=[{
    model:2015,
    color:"white",
    company:"honda",
    price:123
},
{
    model:2016,
    color:"red",
    company:"toyota",
    price:456
},
{
    model:2017,
    color:"black",
    company:"honda",
    price:789
},
{
    model:2022,
    color:"gray",
    company:"toyota",
    price:101112
}
]
for (let index = 0; index < car.length; index++) {
   var abc=car[index];
    if (abc.company=="honda") {
        console.log(abc.price);
    }
    
}