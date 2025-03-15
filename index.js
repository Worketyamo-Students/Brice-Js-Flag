let tag = document.getElementById("parent");
let parent = document.getElementById("parent")
let flag1= document.getElementById("child-1");
let flag2 = document.getElementById("child-2");
let flag3 = document.getElementById("child-3");
let star = document.getElementById("star");

let country = prompt("Enter the country name: ");

if (country == "cameroon" || country == "Cameroon") {
  flag1.style.backgroundColor = "green";
  star.style.backgroundColor = "yellow";
  flag2.style.backgroundColor = "red";
  flag3.style.backgroundColor = "yellow";
} 

else if (country == "Japan" || country == "japan") {
    flag2.style.borderRadius = "50%";
    flag2.style.width = "500px";
    flag2.style.justifyContent = "center";
    flag2.style.height = "500px";
    flag2.style.alignItems = "center";
    flag2.style.backgroundColor = "red";
    parent.style.alignItems = "center";
    parent.style.justifyContent = "center";
}

else if (country == "Senegal" || country == "senegal") {
    flag1.style.backgroundColor = "green";
    flag2.style.backgroundColor = "yellow";
    star.style.backgroundColor = "green";
    flag3.style.backgroundColor = "red";
}

else if (country == "Guinea" || country == "guinea") {
    flag1.style.backgroundColor = "red";
    flag2.style.backgroundColor = "yellow";
    flag3.style.backgroundColor = "green";
}