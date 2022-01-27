$(document).ready(function(){
  $.getJSON("json.json",function(data){
      var json_data ='';
      $.each(data,function(key,value){
          json_data+='<tr style="background-color: #e8cfd8">';
          json_data+='<td >'+value.désignation+ '</td>';
          json_data+='<td>'+value.Prix+ '</td>';
          json_data+='<td>'+value.catégorie+'</td>';
          json_data+='<td>'+value["disponibilité"]+ '</td>';
          json_data+='<td>'+value.fournisseur.reseausociale+"-"+ value.fournisseur.Adresse+'</td>'
          json_data+='</tr>'
      });
      $('#table').append(json_data);
  });
});


$(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
 