//saving book details
onEvent("lendbutton", "click", function( ) {
createRecord("createbookdata", {bookname:getText('text_input3'),author: getText("text_input4"),bookpincode: getText("text_input5"),booknumber: getText("text_input6"),bookaddress: getText("addressinput")}, function(record) {
 
});
});







// saving data of creating an account
onEvent("make", "click", function( ) {
createRecord("createaccountdata", {username:getText('usernamecreate'),password: getText("passwordcreate"),pincode: getText("create")}, function(record) {
 
});
});
//to check if the password is correct///////////////////////////////
var loginusername;
var loginpassword;
var createusername;
var createpassword;

onEvent("login2", "click", function( ) {
  
  loginusername = getText("text_input1");
 // console.log(loginusername);
  loginpassword = getText("text_input2");
 // console.log(loginpassword);
  readRecords("createaccountdata", {username:loginusername}, function(records) {
    for (var i =0; i < records.length; i++) {
      console.log(records[i].id + ': ' + records[i].username);
      createusername = (records[i].username);
      createpassword = (records[i].password);
    }
    if ((loginusername == createusername)&&(loginpassword == createpassword)){
       setScreen("lendorborrow");
    }
    else { showElement("labelInvalidCred");
      
    }
  });
  
});

// books diplay
var values ="";
readRecords("createbookdata", {}, function(records) {
  for (var i =0; i < records.length; i++) {
    if(records.length>0)
    {
 values=values+"bookname="+records[i].bookname+"-author="+records[i].author+"\n";
      setText("123",values );
      
    
      
     } 
    
  }
});



/// connecting screens/////////////////////////////////////////////////////////////////////////////////////////////
// home to login
onEvent("button1", "click", function( ) {
  setScreen("loginscreen");
});

// lend to lend 1

onEvent("button4", "click", function( ) {
  setScreen("lend1");
});

//lend1 to tickpage

onEvent("lendbutton", "click", function( ) {
  setScreen("tickpage");
});

//tickpage to home

onEvent("backtohome", "click", function( ) {
  setScreen("screen1(home)");
});

//rent to borrower 1

onEvent("button5", "click", function( ) {
  setScreen("borrower1");
});

// button 3 to create account
onEvent("button3", "click", function( ) {
  setScreen("createaccount");
});
//create account to login
onEvent("make", "click", function( ) {
  setScreen("loginscreen");
});
// tryagain to borrower1
onEvent("tryagain", "click", function( ) {
  setScreen("borrower1");
});
//back button to lendorrent
onEvent("image1", "click", function( ) {
  setScreen("lendorborrow");
});
//
onEvent("borrow1", "click", function( ) {
  setScreen("123");
  
  
  //search button///////////////////////////////////////////////////////////////////////////// 
});
onEvent("searchbutton", "click", function( ) {
 console.log("hello");
  var searchBookName = getText("searchbox");
  readRecords("createbookdata", {bookname:searchBookName}, function(records) {
    for (var i =0; i < records.length; i++) {
     console.log(records[i].id + ': ' + records[i].bookname);
     
 if (searchBookName === records[i].bookname) {
  showElement("txtBookDetails");
  setText("txtBookDetails", "Name:"+records[i].bookname+"\n Phone:"+records[i].booknumber+"\n Pincode:"+records[i].bookpincode+"\n Address:"+records[i].bookaddress); 
  console.log("heeeeelllo");

}
}

for (var a =0; a < records.length; a++) {
  console.log("checkinside");
 if (searchBookName !== records[a].bookname) {
  setScreen("oops");
  console.log("test");

}
}

  });
  
  

 
});



