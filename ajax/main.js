//PRVI nacin

// let xml = new XMLHttpRequest();
//
// xml.open("get", "https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default");
//
// xml.onreadystatechange = function(){
//     if(xml.readyState == 4 && xml.status == 200){
//         console.log( xml.responseText )
//     }
// };
//
// xml.send();

//xml.responseText - ovdje su podaci

//DRUGI nacin

// let getData = new Promise( function(resolve, reject){
//     let xml = new XMLHttpRequest();
//
//     xml.open("get", "https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default");
//
//     xml.onreadystatechange = function(){
//         if(xml.readyState == 4 && xml.status == 200){
//             resolve(JSON.parse(xml.responseText))
//         }
//     };
//
//     xml.send();
// })

// getData.then((data)=>{
//     console.log(data)
//
// }, (err)=>{
//
// })

//TRECI nacin

// fetch("https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default")
// .then(prom =>{
//     return prom.json()
// })
// .then(res => {
//     console.log(res)
// })

//CETVRTI nacin

axios.get("https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default")
    .then(res => {
        console.log(res.data)
    })

