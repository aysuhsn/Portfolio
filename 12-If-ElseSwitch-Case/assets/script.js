// TASK1

const dizelQiymet = 0.9;
const adiQiymet = 1.0;
const premiumQiymet = 1.5;

const yanacaqNovu = prompt("Yanacaq növünü seçin: 1 - Dizel, 2 - Adi, 3 - Premium");

let yanacaqQiymeti;
let yanacaqAdi;

switch (yanacaqNovu) {
  case '1':
    yanacaqQiymeti = dizelQiymet;
    yanacaqAdi = "Dizel";
    break;
  case '2':
    yanacaqQiymeti = adiQiymet;
    yanacaqAdi = "Adi benzin";
    break;
  case '3':
    yanacaqQiymeti = premiumQiymet;
    yanacaqAdi = "Premium benzin";
    break;
  default:
    alert("Lütfən, düzgün yanacaq nömrəsi daxil edin.");
    yanacaqQiymeti = null;
}

if (yanacaqQiymeti !== null) {
  const miqdarInput = prompt("Almaq istədiyiniz ${yanacaqAdi} yanacağının miqdarını litrlə daxil edin:");
  const miqdar = parseFloat(miqdarInput);

  if (isNaN(miqdar) || miqdar <= 0) {
    alert("Lütfən, düzgün yanacaq miqdarı daxil edin.");
  } else {
    const budceInput = prompt("Mövcud büdcənizi AZN ilə daxil edin:");
    const budce = parseFloat(budceInput);

    if (isNaN(budce) || budce <= 0) {
      alert("Lütfən, düzgün büdcə məbləği daxil edin.");
    } else {
      const umumiDeyer = miqdar * yanacaqQiymeti;

      if (budce >= umumiDeyer) {
        const qalanBalans = budce - umumiDeyer;
        alert("Siz ${miqdar.toFixed(2)} litr ${yanacaqAdi} aldınız. Qalan balansınız: ${qalanBalans.toFixed(2)} AZN.");
      } else {
        const catismayanMebleg = umumiDeyer - budce;
        alert("Ümumi dəyər: ${umumiDeyer.toFixed(2)} AZN. Mövcud balansınız: ${budce.toFixed(2)} AZN. Əskik məbləğ: ${catismayanMebleg.toFixed(2)} AZN.");
      }
    }
  }
}


// TASK2


const movsum = prompt("Mövsümü daxil edin: yaz, yay, payız və ya qış");

let aylar;
switch (movsum) {
  case 'yaz':
    aylar = "Mart, Aprel, May";
    break;
  case 'yay':
    aylar = "İyun, İyul, Avqust";
    break;
  case 'payız':
    aylar = "Sentyabr, Oktyabr, Noyabr";
    break;
  case 'qış':
    aylar = "Dekabr, Yanvar, Fevral";
    break;
  default:
    alert("Lütfən, düzgün mövsüm adı daxil edin: yaz, yay, payız və ya qış.");
    aylar = null;
}

if (aylar !== null) {
  alert(movsum + " mövsümünün ayları: " + aylar + ".");
}
