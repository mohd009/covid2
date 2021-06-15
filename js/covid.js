

$(document).ready(()=>{

    $.ajax({
        type:"GET",
        url:"js/vaccine_doses.json",
        dataType:"json",
        error:(e) => {console.log(e)},
        success: parseVaccine
        
    });

function parseVaccine(data){
  //console.dir(data);
   for (let i of data){
       let item=new grab(("991590042"),(i.report_date),(i.previous_day_doses_administered),
        (i.total_doses_administered),
        (i.total_doses_in_fully_vaccinated_individuals),
        (i.total_individuals_fully_vaccinated));
        console.log(JSON.stringify(item));
        localStorage.setItem(item.d,JSON.stringify(item));

    }
    alert("Done");




}
$("#DisplayData").click(function(){
    myArray=[];
   
    console.log(localStorage.key(9));
    for (var i=0; i<localStorage.length;i++){
        console.log(localStorage.key(i));
        myArray.push((localStorage.key(i)))


    }

    extract(myArray.sort());


    
})
function extract(params){
    $('#title').html("Summary of Total Vaccine Doses");
    $.each(params,(index,user)=>{
        //works but uses with index
//        $('#data').append("<li>"+(user)+"<button id='" + ('test'+index) + "' class='vaccine'>Details</button><span></span>"+"</li>");
//<span id='" + ('t'+index) + "' ></span>"
$('#data').append("<li>"+(user)+" <br/><span id='" + (user) + "' class='vaccine'>Details</span>"+"</li>");
   $(".vaccine").css("color", "red");
})

}
$('#data').on("click", ".vaccine",function(){
   //check length to see if data has been appended before repeat
   //before appending because it keeps appending
   var b=$(this).attr("id");//id of span
   //check the value in span to see if has h2 tag with id=addo
   if ($('#'+b).find('#addo').length==0){
     $('#'+b).append("<br/><h2 id='addo'>Vaccine Doses Detail sECTION</h2>");

    $('#'+b).append("<br/><p>"+localStorage.getItem(b)+"</p>");
    $("p").css("color", "orange");
    $("p").css("text-decoration", "none");
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


