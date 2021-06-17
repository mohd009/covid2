

$(document).ready(()=>{
  $("#load").click(function(e){
        $.ajax({
                type:"GET",
                url:"js/vaccine_doses.json",
                dataType:"json",
                error:(e) => {console.log(e)},
                success: parseVaccine
                
            });
  })
    

function parseVaccine(data){
    alert("Data has been loaded");
  //console.dir(data);
  if (localStorage.length== 0){
     
      for (let i of data){
       let item=new grab(("abdulnmo"),(i.report_date),(i.previous_day_doses_administered),
        (i.total_doses_administered),
        (i.total_doses_in_fully_vaccinated_individuals),
        (i.total_individuals_fully_vaccinated));
        console.log(JSON.stringify(item));
        localStorage.setItem(item.d,JSON.stringify(item));

    }
    
  }
   




}
$("#DisplayData").click(function(){
    myArray=[];
    //to avoid pushing again
   
         for (var i=0; i<localStorage.length;i++){
        console.log(localStorage.key(i));
        myArray.push((localStorage.key(i)))


    
    }
    extract(myArray.sort());


    
})
function extract(params){
    var l = ($('li').length);
    //only add data if list item length to prevent readding
    if (l==0){
        $('#title').html("Summary of Total Vaccine Doses Administered");
    $.each(params,(index,user)=>{
       
   $('#data').append("<li>"+(user)+" <br/><span id='" + (user) + "' class='vaccine'>Details</span>"+"</li>");
   $(".vaccine").css("color", "brown");
   $(".vaccine").css("font-weight", "bold");
   $(".vaccine").css("font-size", "18px");
   $(".vaccine").css("border", "2px dotted brown");
   $(".vaccine").css("border-radius", "8px ");
   $(".vaccine").css("background-color", "grey");
   $(".vaccine").css("text-decoration", "underline");

})
    }
    

}

$('#data').on("click", ".vaccine",function(){
   //check length to see if data has been appended before repeat
   //before appending because it keeps appending
   var b=$(this).attr("id");//id of span
   //check the value in span to see if has h2 tag with id=addo
   if ($('#'+b).find('#addo').length==0){
     $('#'+b).append("<h2 id='addo'>Vaccine Doses Detail Information</h2>");
    var change = JSON.parse(localStorage.getItem(b));
    $('#'+b).append("<br/><p id='cov'>"+ "ID: "+ change.id+"<br>"+ "Date: "+ change.d + 
    "<br> Previous doses: "+change.prev_doses + "<br> Administered doses: "+change.admin+
    "<br> Total doses fully vaccinated: "+change.fully + "<br> Total vaccinated individuals: "+
    change.indiv+"</p>");
   // $("p").css("color", "orange");
   // $("p").css("text-decoration", "none");
   }
 
  // var f = $('span#'+b).next().length;
 
  
  


})
//$('#test0').click(function(){
 //   alert("lll");
//})
}
);  
//make it run once once clicked




class grab{
    constructor(id,d,prev_doses,admin,fully,indiv){
        this.id=id;
        this.d = d;
        this.prev_doses=prev_doses;
        this.admin=admin;
        this.fully=fully;
        this.indiv=indiv;


    }
    
   


    
    
}


