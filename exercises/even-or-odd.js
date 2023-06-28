const input = process.argv.slice(2);
const choice = input[0];
const userNumber = parseInt(input[1]);

if(input.length !== 2 || (choice !== 'par' && choice !== 'impar') || isNaN(userNumber)) {
  console.log('Por favor, forneça uma escolha válida (par ou impar) e um número válido');
} else {
  const computerNumber = Math.floor(Math.random() * 10) + 1;
  console.log(`Sua escolha: ${choice}`);
  console.log(`Seu numero: ${userNumber}`);
  console.log(`O numero do PC: ${computerNumber}`);
  
  const total = userNumber + computerNumber;
  const isTotalEven = total % 2 === 0;

  if((choice === 'par' && isTotalEven) || (choice === 'impar' && !isTotalEven)) {
    console.log('Você venceu!');
  } else
  console.log('O PC venceu');
}
