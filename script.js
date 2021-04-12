var name_of_st= [];
function submit() {
var name1= document.getElementById("st_name1").value;
var name2= document.getElementById("st_name2").value;
var name3= document.getElementById("st_name3").value;
var name4= document.getElementById("st_name4").value;
name_of_st.push(name1);
name_of_st.push(name2);
name_of_st.push(name3);
name_of_st.push(name4);
console.log(name_of_st);
document.getElementById("dis_name").innerHTML=name_of_st;
document.getElementById("submit_bt").style.display = "none";
document.getElementById("sort_bt").style.display = "inline-block";
}
function sort() {
    name_of_st.sort();
    console.log(name_of_st)
    document.getElementById("dis_name").innerHTML=name_of_st;
}