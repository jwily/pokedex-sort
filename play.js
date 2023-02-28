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

*/

/*

Sort by English name

*/

const frenchSort = (arr) => {

  // Code here

}

// frenchSort(genOne);
// console.log('\nSorted by French name\n');
// console.log(genOne.map(poke => poke.name.french));


/*

Sort by sum of all base stats descending

*/

const statSort = (arr) => {

  // Code here

}

// // Reset the original array
// genOne = pokedex.slice(0, 151);

// statSort(genOne);
// console.log('\nSorted by sum of base stats\n');
// console.log(genOne.map(poke =>
//   `${poke.name.english}: ${Object.values(poke.base).reduce((sum, curr) => sum + curr, 0)}`))


/*

Sort by type; if secondary type exists, sort single-types first then by secondary

*/
const typeSort = (arr) => {

  // Code here

}

// // Reset the original array
// genOne = pokedex.slice(0, 151);

// typeSort(genOne);
// console.log('\nSorted by type\n');
// console.log(genOne.map(poke => `${poke.name.english}: ${poke.type.join(' / ')}`));
