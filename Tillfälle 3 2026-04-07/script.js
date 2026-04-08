//UPPGIFT (PROVADE DENNA FÖRST):

let loop = ["o", "x", "o", "x", "o", "x", "o", "x", "o", "x",]

for(let i = 0; i < loop.length; i +=1){
//console.log("test" + i)
document.write(loop[i])}

console.log("vidare")

/*

//--TEST och antecknignar: --

let count = 0

while(count <10) {
   console.log("test" + count)
    count +=1
     
}
console.log("vidare")

*/
/*

let personer = ["Jonny", "Conny", "Sonny"]

for(kö = 2; kö >=0; kö -=1)
document.write(personer[kö] + "   har  köplats" + "   " + kö + "   " +  "<br>")

    console.log("test" + kö)

*/

//---- ANTECKNINGAR OCH TEST FRÅN LEKTION:

// 4 arrayer

let foo = 5 //deklararerar en variabel som heter foo och tilldelar den med 5
foo = 10 //tilldelar variabeln med nummer 10
//foo = [1, 2, 3, "patrik"]

//Index:     0    1     2
let billy = [5, "hej", true] //array


billy[0] = 10
billy[2] = false

//billy = 1

billy[3] = 88
billy[10] =88


//console.log(billy)
//console.log(foo)

let text = "hejsan"
//console.log(text.length) //visar antal bokstäver

let queue = ["elina", "albin", "rabia", "reebar", "alrik", "gustav"]
//console.log(queue.length) //visar antal element


//queue [0] = queue [4]

//console.log(queue)

//DUM KOD:
/*
let first = "elina"
let second = "albin"
let third = "rabia"
*/




//queue.reverse() //vänder på ordningen
//queue.sort() //sorterar i bokstavsorning, vid värden med siffror så går de först'

//DESSA SKA VI KUNNA:

//queue.push("anna") //lägg till på slutet
//queue.unshift("anna") //lägg till i början
//queue.pop() //tar bort från slutet
//queue.shift() //tar bort från början

//console.log(queue) 

// 5 loopar

//live server auto uppdaterar och uppdaterar ibland med oklar kod
//loopen kan gå för evigt
//Så när vi jobba med loopar måste vi pausa live server och köra direkt från mappen och uppdatera själva

//alert(123) pausar programmet

// 2 st loopar, while och for

//while
/*
if(true){ //vid true så kör den koden direkt under
    console.log("hej")
} //vid false kör den else kod under
else { 
    console.log("yo")
}

let count = 0

while(count < 10){ // repeterar om det är true i parantesen
    console.log("while" + count)
    count = count + 1 //ökar / lägger till
    //alert(count)
}//vid false så stoppar den loopen och går vidare

console.log("vidare")
*/
//for

/* behöver 3 saker: (variabel ; condition/regel ; ändring)
for(let count = 0 ; count <10 ; count = count + 1)  // repeterar om det är true i parantesen
    console.log("for" + count)
     //ökar / lägger till
     */

/*count = count + 1 //manuel öka med en, kan ändra siffran till annat
count += 1 //förkortning öka med en, kan ändra siffran till nåt annat
count ++ //endast +1

//ändring: count = count + 1
//förkortningar:
//count +=1
//count ++
//++count
*/
//Här är queue kopplad till variabeln 1 som plussas hela tiden:

//for(let i = 0 ; i < queue.length ; i++)
//document.write("köplats:   " + i + "   är   " + queue[i] + "<br>")

//I prakten är det samma som följande:

//document.write("köplats:   " + 0 + "   är   " + queue[0] + "<br>")
//document.write("köplats:   " + 1 + "   är   " + queue[1] + "<br>")
//document.write("köplats:   " + 2 + "   är   " + queue[2] + "<br>")
//document.write("köplats:   " + 3 + "   är   " + queue[3] + "<br>")
//document.write("köplats:   " + 4 + "   är   " + queue[4] + "<br>")