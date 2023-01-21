// import { personaMapRoyal } from "../data/PersonaDataRoyal";
// interface Temp {
//     name: string,
//     level: number,
//     arcana: string,
// }

// type ArcanaMap = {
//     [key: string]: Temp[]
// };

// var map: ArcanaMap = {};

// for (var name in personaMapRoyal) {
//     const arcana = personaMapRoyal[name].arcana;
//     if (!(arcana in map)) {
//         map[arcana] = [];
//     }
//     map[arcana].push({
//         'name': name,
//         'level': personaMapRoyal[name].level,
//         'arcana': personaMapRoyal[name].arcana
//     });
// }

// for (var arcana in map) {
//     map[arcana].sort((a, b) => {
//         return a.level == b.level ? a.arcana.localeCompare(b.arcana) : a.level - b.level;
//     });

//     console.log("//" + arcana);
//     for (const temp of map[arcana]) {
//         var whiteSpace = " ";
//         var paddingWhite = 30 - temp.name.length;
//         while (paddingWhite > 0) {
//             whiteSpace += " ";
//             paddingWhite--;
//         }
//         console.log(`\'${temp.name}\': ${whiteSpace}'\',`);
//     }
// }
