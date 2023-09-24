function day_title(day_name){
    document.write("<td align=center width=35 bgcolor=lightblue>"+day_name+"</td>");
}    
function fill_table(month,month_len){
    day=1;
    document.write("<table border=1 cellspacing=3 cellspacing=3% bgcolor=white>")
    document.write("<tr> <td colspan=7 bgcolor=orange align=center><b>"+month+" "+year+"</td></tr><tr>");
    day_title("Sun");
    day_title("Mon");
    day_title("Tue");
    day_title("Wed");
    day_title("Thu");
    day_title("Fri");
    day_title("Sat");
    document.write("</tr><tr>");
    for(var i=1;i<start_day;i++){
        document.write("<td>");
    }
    for(var i=start_day;i<8;i++){
        document.write("<td align=center bgcolor=silver>"+day+"</td>");
        day++;
    }
    document.write("</tr><tr>");
    while(day<=month_len){
        for(var i=1;i<=7 && day<=month_len;i++){
            document.write("<td align=center bgcolor=silver>"+day+"</td>");
            day++;
        }
        document.write("</tr><tr>");
        start_day=i;
    }
    document.write("</tr></table><br>");
}
var year=prompt("Enter 4 digit year: ",2023);
var today=new Date("January 1,"+year);
var start_day=today.getDay()+1;
fill_table("January",31);
if(year%4==0){
    fill_table("February",29);
}
else{
    fill_table("February",28);
}
fill_table("March",31);
fill_table("April",30);
fill_table("May",31);
fill_table("June",30);
fill_table("July",31);
fill_table("August",31);
fill_table("September",30);
fill_table("October",31);
fill_table("November",30);
fill_table("December",31);
