export function filterCharacterName(characters, nombreAfiltrar) {
  const resultadoFiltro = [];
  characters.forEach(personaje => {
    if (personaje.name.includes(nombreAfiltrar)) {
      resultadoFiltro.push(personaje)
    }
  });
  return resultadoFiltro;
}

// Función para extraer apellidos de la data que comiencen con mayúscula
export function extractApellidos(characters) {
  const resultadoFiltro = [];
  const apellidosRegistrados = []; // arreglo para almacenar los apellidos registrados
  characters.forEach(personaje => {
    const nombreCompleto = personaje.name;
    const nombreSeparado = nombreCompleto.split(' ');
    if (nombreSeparado.length > 1 && nombreSeparado[1].length > 2 && /^[A-Z]/.test(nombreSeparado[1])) {
      const apellido = nombreSeparado[1];
      if (!apellidosRegistrados.includes(apellido)) { // verificar si el apellido ya está registrado
        apellidosRegistrados.push(apellido); // agregar el apellido a los apellidos registrados
        resultadoFiltro.push(apellido);
      }
    }
  });
  return resultadoFiltro.sort();
}

export function extractSpecies(characters) {
  const resultadoFiltro = [];
  const especiesRegistradas = [];
  characters.forEach(personaje => {
    const especie = personaje.species;
    if (especie && typeof especie === 'string' && !especiesRegistradas.includes(especie)) {
      especiesRegistradas.push(especie);
      resultadoFiltro.push(especie);
    }
  });
  return resultadoFiltro.sort();
}
export function filterCharacterSpecies(characters, tipoEspecie) { // En  el dom hay qu escribir Human(ALGO)
  const filterCharacterSpecies = [];
  characters.forEach(especie => {
    if (especie.species === tipoEspecie) {
      filterCharacterSpecies.push(especie)
    }
  });
  return filterCharacterSpecies.sort();
}

export function filterSpellType(spells, tipoHechizo) {
  const resultadofilterSpellType = [];
  spells.forEach(hechizo => {
    if (hechizo.spell_type === tipoHechizo) {
      resultadofilterSpellType.push(hechizo)
    }
  });
  return resultadofilterSpellType;
}

export function filterCharacterHouse(characters, casa) {
  const resultadoCasas = [];
  characters.forEach(element => {
    if (element.house === casa) {
      resultadoCasas.push(element)
    }
  });
  return resultadoCasas.sort();
}

export function filterCharacterGender(characters, genero) {
  const resultadoFiltroGender = [];
  characters.forEach(element => {
    if (element.gender === genero) {
      resultadoFiltroGender.push(element)
    }
  });
  return resultadoFiltroGender.sort();
}

export function sortDataPotions (potions, sortBy, sortOrder = 'asc') {
  const resultadoSort1 = [];
  const resultadoFinal = [];
  potions.forEach((element) => {
    resultadoSort1.push(element[sortBy]);
  });

  if (sortOrder === 'desc') {
    resultadoSort1.sort().reverse().forEach((nombre) => {
      potions.forEach((element) => {
        if (element[sortBy] === nombre) {
          resultadoFinal.push(element);
        }
      });
    });
  } else {
    resultadoSort1.sort().forEach((nombre) => {
      potions.forEach((element) => {
        if (element[sortBy] === nombre) {
          resultadoFinal.push(element);
        }
      });
    });
  }

  return resultadoFinal;
}

// export function filterpotionsName(letter, nombreAfiltrar) {
//   const resultadoFiltroNombrePotions = [];
//   potions.forEach(potions => {
//     if (potions.name.includes(nombreAfiltrar)) {
//       resultadoFiltroNombrePotions.push(potions)
//     }
//   });
//   return JSON.stringify(resultadoFiltroNombrePotions);
// }