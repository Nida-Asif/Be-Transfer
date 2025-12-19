const ESC = '\x1b[';
const RESET = ESC + '0m';
const BOLD = ESC + '1m';
const dim = s => ESC + '2m' + s + RESET;
const c = (code, s) => ESC + code + s + RESET;
const pad = (s, n) => (s + ' '.repeat(n)).slice(0, n);

const products = [
  {name: 'Premium Debit Card', price: 10.00, category: 'Cards', note: 'Monthly fee'},
  {name: 'Wire Transfer Fee', price: 25.00, category: 'Services', note: 'Per transaction'},
  {name: 'International Transfer', price: 50.00, category: 'Services', note: 'International transfer fee'},
  {name: 'Savings Plus', price: 1500.00, category: 'Accounts', note: 'High-yield savings'},
  {name: 'Checking Account  Bronze', price: 2000.00, category: 'Accounts', note: 'Basic checking account'},
];

function formatPrice(n){ return '$' + n.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2}); }

function vibrant(){
  console.log(BOLD + ESC + '36m' + '' + RESET);
  console.log(BOLD + ESC + '36m' + ' Product                        Price       Category  Notes                        ' + RESET);
  console.log(BOLD + ESC + '36m' + '' + RESET);
  products.forEach(p=>{
    const catColor = p.category==='Accounts' ? '32m' : (p.category==='Services' ? '33m' : '36m');
    const line = ' ' + pad(p.name,29) + '  ' + pad(formatPrice(p.price),10) + '  ' + pad(p.category,8) + '  ' + pad(p.note,28) + ' ';
    const colored = line.replace(p.category, ESC + catColor + p.category + RESET);
    console.log(colored);
  });
  console.log(BOLD + ESC + '36m' + '' + RESET);
  console.log(dim('Page 1 of 1  Showing 5 of 5 results (Per page: 10)'));
}

function subtle(){
  console.log('\n' + ESC + '2m' + ' Subtle Card List ' + RESET);
  products.forEach(p=>{
    console.log(ESC + '90m' + ' ' + RESET + BOLD + p.name + RESET);
    console.log('  ' + ESC + '32m' + 'Price:' + RESET + ' ' + formatPrice(p.price) + '  ' + ESC + '34m' + 'Category:' + RESET + ' ' + p.category);
    console.log('  ' + ESC + '90m' + p.note + RESET + '\n');
  });
}

function emojiTheme(){
  console.log(BOLD + '\n Emoji Theme' + RESET);
  products.forEach(p=>{
    const ic = p.category==='Accounts' ? '' : (p.category==='Services' ? '' : '');
    const color = p.category==='Accounts' ? '32m' : (p.category==='Services' ? '33m' : '35m');
    console.log(ESC + color + ic + '  ' + p.name + RESET + '  ' + ESC + '36m' + formatPrice(p.price) + RESET + '  ' + ESC + '90m' + '(' + p.category + ')' + RESET);
  });
}

console.clear();
console.log(BOLD + ESC + '35m' + '=== Vibrant Theme (colored table) ===' + RESET);
vibrant();
console.log(BOLD + ESC + '35m' + '\n=== Subtle Theme (card list) ===' + RESET);
subtle();
console.log(BOLD + ESC + '35m' + '\n=== Emoji Theme (compact) ===' + RESET);
emojiTheme();
