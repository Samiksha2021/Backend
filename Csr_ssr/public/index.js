function send(){
    $.get('/todo',(data) => {
        console.log('hii',data);
        $('#list').empty();
        //DOM Manupilation
        for(let todo of data){
            $('#list').append(<li>${todo}</li>);  
        }
    });
    
}

send()
$('#bt').on('click',()=>{
    let value = $('#ip').val()
    console.log(value,"diausyif")
   $.post('/todo',{value},()=>{
    $('#inp').val('')
    send();
   })

})