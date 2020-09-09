

/*Rebate Calculator*/
var c2,c4,c5,c6,c7;
var c9,c11,c12,c14,c16,c17,c18,c20,c21,c23,c25,c26,c28,c29;
var e4,e5,e6,e7,e8,e14,e15,e16,e17,e19,e20,e22,e23;
 c2 = parseFloat(document.getElementById('tsaleprice').value);
 c4 = parseFloat(document.getElementById('landbeftax').value);
 c5 = parseFloat(document.getElementById('fafbeftax').value);
 c6 = parseFloat(document.getElementById('applbeftax').value);
 c7 = parseFloat(document.getElementById('realtbeftax').value);
 console.log(c2);
  console.log(c4);
   console.log(c5);
    console.log(c6);
     console.log(c7);
/*Total Applicable To GST Only*/
function totapptoGST(){
 return (C4+C5+C6+C7); 
}
/*</End> Total Applicable to GST Only*/
/*######*/
/*Total GST Only Incl. GST*/
function totGSTonlyincGST(){
	return (C20+(C20*C28));
}
/*</End> /*Total GST Only Incl. GST*/
/*######*/
/* Sale Price Less Above */
function salePriceLessAbove(){
 return (C2-C11);
}
/*</End> Sale Price Less Above*/
/*Tax Formula*/
function taxFormula(C2,C12,C20,C25,C26,C28){
 let c = ((C25>=450000&&C26>350000&&C26<450000)?((100000*C12)+(8820*450000))/((100000*1.11)+8820):((C25<=350000&&C26<=350000)?C12/1.0668:((C25>=450000&&C26<=350000)?C12/1.0848:((C25>=450000&&C26>=450000)?C12/1.11:((C25>350000&&C25<450000&&C26<=350000)?C12/(1+(0.0348+C28)):((C25>350000&&C25<450000&&C26>350000&&C26<450000)?((100000*(C2-(C20*1.113)))+(15120*450000))/((100000*1.11)+15120):FALSE))))));
return c;
}
/*</End> Tax Formula*/
console.log(taxFormula(450000,266979.86,175000,422059.59,247059.59,0.045829).toFixed(2));

/* Sale Price Before Taxes On GST/PST Portion */
function  SalePriceBeforeTaxesOnGSTPSTPortion(Cc2,Cc12,Cc20,Cc25,Cc26,Cc28){
 return taxFormula(Cc2,Cc12,Cc20,Cc25,Cc26,Cc28).toFixed(2);
}
console.log(SalePriceBeforeTaxesOnGSTPSTPortion(450000,266979.86,175000,422059.59,247059.59,0.045829));

/*GST On Above*/
function gstOnAbove(C28,C16){
return C28*C16;
}
/*end GST on above*/
//########
/*PST On Above*/
function pstOnAbove(C29,C16){
return C29*C16;
}
/* End PST on above*/
/*Sale Price Before Taxes on GST Only Portion*/
function SalePriceBeforeTaxesonGSTOnlyPortion(){
	let C9 = parseFloat(document.getElementById('').value);
	return C9;
}
function gstOnAbove1(C2,C28){
 return C20*C28;
}
function SalePriceAfterTaxes(){
	return (C16+C17+C18+C19+C20+C21+C22);
}
/*Pre-Tax Sale Price For GST Purposes*/
function PreTaxSalePriceForGSTPurposes(){
	return C16+C20;
}
/*  Pre-Tax Sale Price For PST Purposes */
function PreTaxSalePriceForPSTPurposes(){
	return C16;
}
/* GST Rate */
function GSTRate(){
	return ((C25>=450000?C25*1.05:(C25<=350000?C25*1.032:(((C25*0.05)-(((450000-C25)/100000)*6300))+C25)))-C25)/C25;
}
function PSTRate(){
	return ((C26>=450000?C26*1.06:(C26<=350000?C26*1.0348:(((C26*0.06)-(((450000-C26)/100000)*8820))+C26)))-C26)/C26;
}
