

$(document).ready(()=>{

    $.ajax({
        type:"GET",
        url:"js/vaccine_doses.json",
        dataType:"json",
        error:(e) => {console.log(e)},
        success: parseVaccine
        
    });

function parseVaccine(data){
   console.dir(data);
   alert(0);
   for (let i of data){
       let item=new grab(("991590042"),(i.report_date),(i.previous_day_doses_administered),
        (i.total_doses_administered),
        (i.total_doses_in_fully_vaccinated_individuals),
        (i.total_individuals_fully_vaccinated));
        console.log(JSON.stringify(item));
        localStorage.setItem(item.d,JSON.stringify(item));

    }



}
}
);  

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


