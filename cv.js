
    function test(){
        //retrieving data
        var fullname =document.getElementById("name").value;
        var address=document.getElementById("address").value;
        var email=document.getElementById("email").value;
        var comment=document.getElementById("comment").value;
        alert("THANKS FOR SUBMITTING YOUR FORM!");

   
    // storing data
    var lsname=localStorage.setItem('fullname',fullname);
    var lsaddr=localStorage.setItem('address',address);
    var lsemail=localStorage.setItem('email',email);
    var lscomment=localStorage.setItem('comment',comment);
    };







