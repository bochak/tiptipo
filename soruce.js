let btn = document.getElementById('btn')

btn.addEventListener('click' , function() {
 let billamount  = document.getElementById('bill_amount').value;
 let tipprecetage  = document.getElementById('tip_precentge').value;
/*  console.log(billamount);
  console.log(tipprecetage) */;
let tipamount = document.getElementById("tip_amount").value = billamount / 100 * tipprecetage;
document.getElementById('total_bill').value =parseFloat(billamount) + parseFloat(tipamount);
})

