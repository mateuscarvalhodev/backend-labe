const input = process.argv.slice(2);
const userChoice = input[0];

if (userChoice !== 'pedra' && userChoice !== 'papel' && userChoice !== 'tesoura') {
  console.log('Por favor, escolhe uma opção válida (pedra, papel ou tesoura)');
} else {
  const computerChoiceNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  
  switch (computerChoiceNumber) {
    case 0:
      computerChoice = 'pedra';
      break;
    case 1:
      computerChoice = 'papel';
      break;
    case 2:
      computerChoice = 'tesoura';
      break;
  };
  console.log(`Sua escolha: ${userChoice}`);
  console.log(`Escolha do Pc: ${computerChoice}`);

  if(userChoice === computerChoice) {
    console.log('Empataram');
  } else if (
    (userChoice === 'pedra' && computerChoice === 'tesoura') ||
    (userChoice === 'papel' && computerChoice === 'pedra') ||
    (userChoice === 'tesoura' && computerChoice === 'papel')
    ) { console.log('Você venceu');
    } else {
      console.log('O computador venceu!');
    }
};

