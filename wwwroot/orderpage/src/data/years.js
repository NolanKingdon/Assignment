// Quick implementation to generate years to make updating in the future easier.
const years = [];
let startYear = 2010;
let endYear = 2030;

for(let i=startYear; i<=endYear; i++) {
    years.push(`${i}`);
}

export default years;