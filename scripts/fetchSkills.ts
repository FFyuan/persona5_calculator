// import { skillMapRoyal } from "../data/SkillDataRoyal";

// interface Skill {
//     name: string,
//     element: string,
//     effect: string,
//     cost: number,
// }

// type SkillMap = {
//     [element: string]: Skill[]
// };

// var map: SkillMap = {};

// for (var name in skillMapRoyal) {
//     const element = skillMapRoyal[name].element;
//     if (!(element in map)) {
//         map[element] = [];
//     }
//     map[element].push({
//         'name': name,
//         'cost': skillMapRoyal[name].cost | 0,
//         'effect': skillMapRoyal[name].effect,
//         'element': element
//     });
// }

// for (var element in map) {
//     map[element].sort((a, b) => a.cost == b.cost ? a.name.localeCompare(b.name) : a.cost - b.cost);

//     console.log('// ' + element);
//     for (const temp of map[element]) {
//         var whiteSpace = " ";
//         var paddingWhite = 30 - temp.name.length;
//         while (paddingWhite > 0) {
//             whiteSpace += " ";
//             paddingWhite--;
//         }
//         console.log(`\'${temp.name}\': ${whiteSpace}'\',`);
//     }
// }
