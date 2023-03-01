const pokedex = require('./seed-data');

let genOne = pokedex.slice(0, 151);


console.log(genOne[24]);

/*

            ¶¶
           ¶¶¶¶
          ¶¶¶¶¶¶
         ¶¶¥¥¥¶¶¶
        ¶¶¥¥¥¥¥¶¶¶                                          ¶¶¶¶¶¶¶¶
        ¶¶¥¥¥¥¥¥¶¶¶                                     ¶¶¶¶¶¥¥¥¥¥¶¶
        ¶¶¥¥¥¥¥¥ƒƒ¶¶                                ¶¶¶¶¥¥¥¥¥¥¥¥¶¶¶¶
        ¶¶¥¥¥¥ƒƒƒƒƒ¶¶                           ¶¶¶¶ƒƒ¥¥¥¥¥¥¥¥¶¶¶¶
        ¶¶¶ƒƒƒƒƒƒƒƒ§¶¶                        ¶¶ƒƒƒƒƒƒƒ¥¥¥¥¥¶¶¶¶
         ¶¶¶ƒƒƒƒƒƒ§§¶¶                    ¶¶¶¶ƒƒƒƒƒƒƒƒƒƒ¥¥¶¶¶¶
           ¶¶ƒƒƒƒƒ§§¶¶                  ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒ¶¶¶¶
            ¶¶ƒƒ§§§§¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§¶¶
             ¶¶§§§§§§§ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§¶¶
              ¶¶§§§ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§¶¶¶¶                   ¶¶¶¶¶¶
            ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§¶¶¶                    ¶¶¶ƒƒƒƒƒ¶¶
          ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ¶¶¶¶¶¶ƒƒƒƒ§§§¶¶¶                   ¶¶ƒƒƒƒƒƒƒƒ¶¶
         ¶¶ƒƒ¶¶¶¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒ¶¶  ¶¶¶¶ƒƒƒ§§§§§¶¶                ¶¶ƒƒƒƒƒƒƒƒƒƒ¶¶
        ¶¶ƒƒ¶¶  ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒ¶¶¶¶¶¶¶¶ƒƒƒ§§§§§§¶¶           ¶¶¶¶ƒƒƒƒƒƒƒƒ§§§§§§¶¶
       ¶¶ƒƒƒ¶¶¶¶¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ¶¶¶¶¶¶ƒƒƒƒƒ§§§§§§¶¶        ¶¶ƒƒƒƒƒƒƒƒ§§§§§§§§§§¶¶
       ¶¶ƒƒƒƒ¶¶¶¶ƒƒƒƒƒ¥¥¥ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ####§§§§§¶¶    ¶¶¶¶ƒƒƒƒƒƒƒƒ§§§§§§§§§§§§¶¶
       ¶¶###ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ¥¥ƒƒƒƒƒƒ########§§§§¶¶¶¶¶¶ƒƒƒƒƒƒƒƒ§§§§§§§§§§§§§§§§¶¶
       ¶¶####ƒƒƒƒƒƒƒƒ¥¥¥¥¥¥¥¥¥¥¥ƒƒƒƒƒƒ########§§¶¶¶¶ƒƒ¶¶¶¶ƒƒƒƒ§§§§§§§§§§§§§§§§§§¶¶
    ¶¶¶¶¶¶###ƒƒƒƒƒƒƒƒƒ¥¥¥#####¥ƒƒƒƒƒƒƒ########¶¶ƒƒ¶¶ƒƒƒƒƒƒ¶¶§§§§§§§§§§§§§§§§§§§§¶¶
  ¶¶¶ƒƒ¶¶¶¶#ƒƒƒƒƒƒƒƒƒƒ¥¥####¥¥ƒƒƒƒƒƒƒƒƒƒ####§§¶¶ƒƒƒƒƒƒƒƒ¶¶¶¶§§§§§§§§§§§§§§§§¶¶¶¶
 ¶¶ƒƒ¶ƒƒƒƒ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒ¥¥¥¥ƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§¶¶ƒƒƒƒƒƒƒƒƒƒƒƒ¶¶§§§§§§§§§§§§¶¶¶¶
¶¶ƒƒƒƒƒƒ§§§§¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ¶¶ƒƒƒƒƒƒƒƒ§§§§¶¶§§§§§§§§§§¶¶¶¶
  ¶¶ƒƒ§§§§§§¶¶¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§¶¶¶§§§§§§§§¶¶
    ¶¶§§§§§§§¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§¶  ¶§§§§§§¶¶
      ¶¶§§§§§§ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§¶¶    ¶¶§§§§§§¶¶
        ¶¶¶§ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§¶¶       ¶¶§§§§§§¶¶
         ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§¶¶¶¶    ¶¶¶¶§§§§§§§§§§¶¶
         ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§¶¶§§¶¶¶¶¶¶ƒƒ§§§§§§§§¶¶¶¶
        ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§§¶¶ƒƒƒƒ§§§§§§¶¶¶¶
        ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§§§¶¶§§§§§§§¶¶¶¶
  ¶¶¶¶¶¶¶¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§§§§¶¶§§§§§§¶¶
 ¶¶ƒƒ¶¶ƒƒƒ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§§§§¶¶¶¶§§§§§§¶¶
 ¶¶ƒƒƒ¶¶ƒƒƒ¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§§§§§¶¶  ¶¶¶###§§§¶¶
  ¶¶§§§§§§§§¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§§§§§§§§¶¶¶¶¶#######§§§¶¶
   ¶¶§§§§§§§§¶¶ƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒƒ§§§§§§§§§§§§§§§§§########¶¶¶¶¶¶
    ¶¶§§§§§§§§¶¶§§§§ƒƒƒƒƒƒƒ§§§§§§§§§§§§§§§§§§§####¶¶¶¶¶¶
     ¶¶§§§§§§§¶¶§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§¶¶¶¶
       ¶¶¶¶¶¶¶§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§¶¶
              ¶¶¶¶¶¶¶¶¶¶§§§§§§§§§§§§§§§§§§§§¶¶
                        ¶¶¶¶¶¶§§§§§§§§§§¶¶¶¶
                            ¶¶¶¶§§§§¶¶¶¶¶
                            ¶¶§§§§§§§§¶¶
                            ¶¶§§¶¶§§§¶¶
                             ¶¶§¶¶§§¶¶
                              ¶¶¶¶¶¶

Forceful Dragon. (2007, November 14th)

/*

Sort by sum of all base stats descending

*/

const statSort = (arr) => {

  const compare = (a, b) => {

    // a and b are Pokemon here

    const statsA = Object.values(a.base);
    const statsB = Object.values(b.base);

    const sumA = statsA.reduce((sum, curr) => sum + curr, 0);
    const sumB = statsB.reduce((sum, curr) => sum + curr, 0);

    // -1, 0, 1?
    // We have a and b
    // The question is, where does "a" go in relation to "b"
    // given any conditional?

    // If we want "a" to come before "b", we want to return -1
    // because -1 is "left", right?
    // 1 is right

    return sumB - sumA;

  }

  return arr.sort(compare);

}

statSort(genOne);
console.log('\nSorted by sum of base stats\n');
console.log(genOne.map(poke =>
  `${poke.name.english}: ${Object.values(poke.base).join(', ')}`))

/*

Sort by alphabetically by French name

*/

const frenchSort = (arr) => {

  const compare = (a, b) => {

    const nameA = a.name.french;
    const nameB = b.name.french;

    if (nameA < nameB) return -1;
    else if (nameA > nameB) return 1;
    return 0;

  }

  return arr.sort(compare);
}

// Reset the original array
genOne = pokedex.slice(0, 151);

frenchSort(genOne);
console.log('\nSorted by French name\n');
console.log(genOne.map(poke => poke.name.french));

/*

Sort by type; if secondary type exists, sort single-types first then by secondary

*/

const typeSort = (arr) => {

  const compare = (a, b) => {

    const typesA = a.type;
    const typesB = b.type;

    if (typesA[0] === typesB[0]) {

      const secondA = typesA[1] ? typesA[1] : '';
      const secondB = typesB[1] ? typesB[1] : '';

      if (secondA < secondB) return -1;
      if (secondA > secondB) return 1;
      return 0;

    }

    if (typesA[0] < typesB[0]) return -1;
    else if (typesA[0] > typesB[0]) return 1;
    return 0;

  }

  return arr.sort(compare);
}

// Reset the original array
genOne = pokedex.slice(0, 151);

typeSort(genOne);
console.log('\nSorted by type\n');
console.log(genOne.map(poke => `${poke.name.english}: ${poke.type.join(' / ')}`));
