// for (let index = 0; index < 10; index++) {
//     const element = index
//     if (element==5) {
//         console.log(`${element} is the best number`);
//     }
//     console.log(element);
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(`table of ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i}*${j}=${i*j}`);
//     }
//     console.log('\n');
// }
for (let index = 0; index < 10; index++) {
    if (index==5) {
        // console.log("continue here at "+index);
        continue
    }
    console.log(`${index}`);
}