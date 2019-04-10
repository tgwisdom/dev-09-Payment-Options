$(function()  {
    
 
    
 $('#userSignInput').on('keyup', function(e) {
     
  var inputLength = ($(this).val().length);     
  $('#tiles').text(inputLength);     
  updatePrice(inputLength);
 
  
 
 
  })
    
    $('#userFontInput').on('click', function(e) {     
      var inputFont = $(this).is(':checked');     
      updatePrice($('#userSignInput').val().length, inputFont);
     
  
 }) 
    
     $('#confirmOrder').on('click', function(e) {     
       event.preventDefault();
         
       var previewMsg = $('#userSignInput').val();
        
       
       $('#previewScreen').append(previewMsg); 
       $('#previewScreen').toggle().animate({ 'right': '0px' }, 250);
      
  
  
  
 }) 
    
    
    
    $('#cancelPreview').on('click', function(e) {     
       event.preventDefault();
    
    $('previewScreen').toggle();
    
    
})

    
})
    
function updatePrice(signLength, fontUpgrade) {
    var costPerTile = 5;
    
    if(fontUpgrade) {  
      costPerTile = 6;  } 
    else
    { costPerTile = 5;  } 
    
    
    var  subTotal = signLength * costPerTile;
    var  shipping = 7;
    
    if(signLength !=0) {  shipping = 7;  } 
    else { shipping = 0;  } 
    
    
    
    var  grandTotal = subTotal + shipping;
    
    $('#subTotal').text('$'+subTotal);
    $('#shipping').text('$'+shipping);
    $('#grandTotal').text('$'+grandTotal);
    
 return grandTotal;   
}

/* Previous assignment code using array to pass values through

function resetSign(event) {
 var signData = ['greeting', 'userSign',
  'tiles', 'subTotal', 'shipping', 'grandTotal'];  
    
    for (var i=0; i<signData.length; i++) {
      setTextContentById(signData[i], '');
        
    }
    event.preventDefault();
}

// Create variables for the welcome message
var greeting = '[not initialized]'; 
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome;
var sign = '[not initialized]';
var tiles, subTotal, shipping, grandTotal;

function calcSign() {
 tiles = sign.length;
 subTotal = tiles * 5;
 shipping = 7;
 grandTotal = subTotal + shipping; 
        
}

function initiateVars() {
  greeting = 'Howdy';
  name = ' Troy';
  message = ' Please Ensure order is correct:';  
  sign = 'Functions!';
  welcome = greeting +'! ' + name +', ' + message; 
  calcSign();  
}

function setTextContentById(getId, setMsg) {
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setMsg;
}

function setSign() { 
  setTextContentById('greeting', welcome);
  setTextContentById('userSign', sign);
  setTextContentById('tiles', tiles);
  setTextContentById('subTotal', '$' + subTotal);
  setTextContentById('shipping', '$' + shipping);
  setTextContentById('grandTotal', '$' + grandTotal);
 }

initiateVars();
//setSign();
resetSign();

var el = document.getElementById('resetButton');

el.addEventListener('click', resetSign, false);
    
}) */
