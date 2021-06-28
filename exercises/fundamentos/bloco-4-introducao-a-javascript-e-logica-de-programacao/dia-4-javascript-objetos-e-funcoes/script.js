let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain',
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
  };

  for (let key in info) {
    for (let key2 in info2) {
        console.log(info[key] + info2[key2])
    }
}
