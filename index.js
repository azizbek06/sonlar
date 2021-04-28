let son= prompt("999 gacha bolgan qiymatni kiriting!!!")
let birlar, onlar, yuzlar;

birlar=son%10;
onlar = Math.floor(son/10)%10;
yuzlar = Math.floor(son/100)%10;
// if(unminglar1===0)
switch(yuzlar){
    case 1:
        document.write('BirYuz-'); break;
    case 2:
    document.write('Ikkiyuz-'); break;
    case 3:
    document.write('Uchyuz-'); break;
    case 4:
   document.write('Yortuz-'); break;
    case 5:
    document.write('Beshyuz-'); break;
    case 6:
   document.write('Oltiyuz-'); break;
    case 7:
   document.write('Yettiyuz-'); break;
    case 8:
    document.write('Sakkiyuz-'); break;
    case 9:
    document.write('Yoqiyuz-'); break;
       
}
switch(onlar){
    case 1:
        document.write('on-'); break;
    case 2:
    document.write('yigirma-'); break;
    case 3:
    document.write('ottiz-'); break;
    case 4:
    document.write('qirq-'); break;
    case 5:
    document.write('ellik-'); break;
    case 6:
  document.write('oltish-'); break;
    case 7:
    document.write('yetmish-'); break;
    case 8:
    document.write('sakson-'); break;
    case 9:
    document.write('toxson-'); break;
       
}
switch(birlar){
    case 1:
        document.write('bir'); break;
    case 2:
   document.write('ikki'); break;
    case 3:
   document.write('uch'); break;
    case 4:
    document.write('tort'); break;
    case 5:
    document.write('besh'); break;
    case 6:
    document.write('olti'); break;
    case 7:
    document.write('yetti'); break;
    case 8:
    document.write('sakkiz'); break;
    case 9:
    document.write('toqqiz'); break;
       
}
