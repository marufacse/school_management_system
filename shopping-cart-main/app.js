
function updateNumber(product,price,isIncreasing)
{
    // updateCase(true);
   const caseInput =document.getElementById(product+'-number');
   //console.log('hi')
  let caseNumber=caseInput.value;
  
  //console.log(caseNumber)
  if(isIncreasing==true)
    {
   caseNumber=parseInt(caseNumber)+1;
   }
   else if(caseNumber>0){
    caseNumber=parseInt(caseNumber)-1;
    // if(caseInput.value==0)
    // {break;}
   }
   caseInput.value=caseNumber;
   //case total
  const caseTotal= document.getElementById(product+'-total')
  caseTotal.innerText=caseNumber*price;
  //update total
  calculateTotal()

}
function getInputValue(product)
{
    const productInput=document.getElementById(product+'-number')
    const productNumber=productInput.value;
    return productNumber;
}

function calculateTotal()
{
    
    const phoneTotal= getInputValue('phone')*1219;
    const  caseTotal= getInputValue('case')*59;
    const subTotal= phoneTotal+caseTotal;
    //update on the html
    const tax=subTotal/10;
    const total=subTotal+tax
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=total;
}

//phone increase decrese

document.getElementById('phone-plus').addEventListener('click',function()
{
    updateNumber('phone',30,true)
})

document.getElementById('phone-minus').addEventListener('click',function()
{
    updateNumber('phone',30,false)
})


//handle case increase decrease


document.getElementById('case-plus').addEventListener('click',function()
{
    updateNumber('case',20,true)
   // updateCase(true);
//    const caseInput =document.getElementById('case-number');
//    //console.log('hi')
//   const caseNumber=caseInput.value;
//   console.log(caseNumber)
//    caseInput.value=parseInt(caseNumber)+1;
  //console.log(caseNumber)
});
document.getElementById('case-minus').addEventListener('click',function()
{
    updateNumber( 'case',20,false)


    // const caseInput=document.getElementById('case-number')
    // const caseNumber=caseInput.value;
  // console.log(caseNumber)
  
})