var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var names = ["Libro familiar","Ranbir Singh - Abuelo", "Diljeet Singh - Padre", "Alia Singh - Madre", "Rocky Singh - Hermano", "Soni Singh - Hermana"];
var age=[60,40,60,30,25,20];
age.sort();
age.reverse();
var i=0;
function update()
{
i++;
var numbers_of_family_members_in_array=5
if(i> numbers_of_family_members_in_array)
{
    i=0;
}
var updatedimage=images[i];
var updatedname=names[i];
var updatedage=age[i];
document.getElementById("family_member_image").src=updatedimage;
document.getElementById("family_member_name").innerHTML=updatedname;
document.getElementById("family_member_age").innerHTML=updatedage;
var max number=math.max.apply(math,age);
console.log("la edad mas alta es de:",max_number);
var min number=math.min.apply(math,age);
console.log("la edad mas baja es de:",min_number);
}