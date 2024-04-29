const elements = [
    { id: 1, symbol: 'H', name: 'Hydrogen', group: ['react_nonmetal', 'nonmetal'] },
    { id: 2, symbol: 'He', name: 'Helium', group: ['noble', 'nonmetal'] },
    { id: 3, symbol: 'Li', name: 'Lithium', group: ['alkali', 'metal'] },
    { id: 4, symbol: 'Be', name: 'Beryllium', group: ['alkaline', 'metal'] },
    { id: 5, symbol: 'B', name: 'Boron', group: ['metalloid'] },
    { id: 6, symbol: 'C', name: 'Carbon', group: ['react_nonmetal', 'nonmetal'] },
    { id: 7, symbol: 'N', name: 'Nitrogen', group: ['react_nonmetal', 'nonmetal'] },
    { id: 8, symbol: 'O', name: 'Oxygen', group: ['react_nonmetal', 'nonmetal'] },
    { id: 9, symbol: 'Fl', name: 'Fluorine', group: ['react_nonmetal', 'nonmetal'] },
    { id: 10, symbol: 'Ne', name: 'Neon', group: ['noble', 'nonmetal'] },
    { id: 11, symbol: 'Na', name: 'Sodium', group: ['alkali', 'metal'] }, 
    { id: 12, symbol: 'Mg', name: 'Magnesium', group: ['alkaline', 'metal'] },
    { id: 13, symbol: 'Al', name: 'Aluminum', group: ['post_transition', 'metal'] },
    { id: 14, symbol: 'Si', name: 'Silicon', group: ['metalloid'] },
    { id: 15, symbol: 'P', name: 'Phosphorous', group: ['react_nonmetal', 'nonmetal'] },
    { id: 16, symbol: 'S', name: 'Sulfur', group: ['react_nonmetal', 'nonmetal'] },
    { id: 17, symbol: 'Cl', name: 'Chlorine', group: ['react_nonmetal', 'nonmetal'] },
    { id: 18, symbol: 'Ar', name: 'Argon', group: ['noble', 'nonmetal'] },
    { id: 19, symbol: 'K', name: 'Potassium', group: ['alkali', 'metal'] },
    { id: 20, symbol: 'Ca', name: 'Calcium', group: ['alkaline', 'metal'] },
    { id: 21, symbol: 'Sc', name: 'Scanadium', group: ['transition', 'metal'] },
    { id: 22, symbol: 'Ti', name: 'Titanium', group: ['transition', 'metal'] },
    { id: 23, symbol: 'V', name: 'Vanadium', group: ['transition', 'metal'] },
    { id: 24, symbol: 'Cr', name: 'Chromium', group: ['transition', 'metal'] },
    { id: 25, symbol: 'Mn', name: 'Manganese', group: ['transition', 'metal'] },
    { id: 26, symbol: 'Fe', name: 'Iron', group: ['transition', 'metal'] },
    { id: 27, symbol: 'Co', name: 'Cobalt', group: ['transition', 'metal'] },
    { id: 28, symbol: 'Ni', name: 'Nickel', group: ['transition', 'metal'] },
    { id: 29, symbol: 'Cu', name: 'Copper', group: ['transition', 'metal'] },
    { id: 30, symbol: 'Zn', name: 'Zinc', group: ['transition', 'metal'] },
    { id: 31, symbol: 'Ga', name: 'Gallium', group: ['post_transition', 'metal'] },
    { id: 32, symbol: 'Ge', name: 'Germanium', group: ['metalloid'] },
    { id: 33, symbol: 'As', name: 'Arsenic', group: ['metalloid'] },
    { id: 34, symbol: 'Se', name: 'Selenium', group: ['react_nonmetal', 'nonmetal'] },
    { id: 35, symbol: 'Br', name: 'Bromine', group: ['react_nonmetal', 'nonmetal'] },
    { id: 36, symbol: 'Kr', name: 'Krypton', group: ['noble', 'nonmetal'] },
    { id: 37, symbol: 'Rb', name: 'Rubidium', group: ['alkali', 'metal'] },
    { id: 38, symbol: 'Sr', name: 'Strontium', group: ['alkaline', 'metal'] },
    { id: 39, symbol: 'Y', name: 'Yttrium', group: ['transition', 'metal'] },
    { id: 40, symbol: 'Zr', name: 'Zirconium', group: ['transition metal', 'metal'] },
    { id: 41, symbol: 'Nb', name: 'Niobium', group: ['transition metal', 'metal'] },
    { id: 42, symbol: 'Mo', name: 'Molybdenum', group: ['transition metal', 'metal'] },
    { id: 43, symbol: 'Tc', name: 'Technetium', group: ['transition metal', 'metal'] },
    { id: 44, symbol: 'Ru', name: 'Ruthenium', group: ['transition', 'metal'] },
    { id: 45, symbol: 'Rh', name: 'Rhodium', group: ['transition', 'metal'] },
    { id: 46, symbol: 'Pd', name: 'Palladium', group: ['transition', 'metal'] },
    { id: 47, symbol: 'Ag', name: 'Silver', group: ['transition', 'metal'] },
    { id: 48, symbol: 'Cd', name: 'Cadmium', group: ['transition', 'metal'] },
    { id: 49, symbol: 'In', name: 'Indium', group: ['post_transition', 'metal'] },
    { id: 50, symbol: 'Sn', name: 'Tin', group: ['post_transition', 'metal'] },
    { id: 51, symbol: 'Sb', name: 'Antimony', group: ['metalloid'] },
    { id: 52, symbol: 'Te', name: 'Tellurium', group: ['metalloid'] },
    { id: 53, symbol: 'I', name: 'Iodine', group: ['react_nonmetal', 'nonmetal'] },
    { id: 54, symbol: 'Xe', name: 'Xenon', group: ['noble', 'nonmetal'] },
    { id: 55, symbol: 'Cs', name: 'Cesium', group: ['alkali', 'metal'] },
    { id: 56, symbol: 'Ba', name: 'Barium', group: ['alkaline', 'metal'] },
    { id: 57, symbol: 'La', name: 'Lanthanum', group: ['lanthanoid', 'metal'] },
    { id: 58, symbol: 'Ce', name: 'Cerium', group: ['lanthanoid', 'metal'] },
    { id: 59, symbol: 'Pr', name: 'Praseodymium', group: ['lanthanoid', 'metal'] },
    { id: 60, symbol: 'Nd', name: 'Neodymium', group: ['lanthanoid', 'metal'] },
    { id: 61, symbol: 'Pm', name: 'Promethium', group: ['lanthanoid', 'metal'] },
    { id: 62, symbol: 'Sm', name: 'Samarium', group: ['lanthanoid', 'metal'] },
    { id: 63, symbol: 'Eu', name: 'Europium', group: ['lanthanoid', 'metal'] },
    { id: 64, symbol: 'Gd', name: 'Gadolinium', group: ['lanthanoid', 'metal'] },
    { id: 65, symbol: 'Tb', name: 'Terbium', group: ['lanthanoid', 'metal'] },
    { id: 66, symbol: 'Dy', name: 'Dysprosium', group: ['lanthanoid', 'metal'] },
    { id: 67, symbol: 'Ho', name: 'Holmium', group: ['lanthanoid', 'metal'] },
    { id: 68, symbol: 'Er', name: 'Erbium', group: ['lanthanoid', 'metal'] },
    { id: 69, symbol: 'Tm', name: 'Thulium', group: ['lanthanoid', 'metal'] },
    { id: 70, symbol: 'Yb', name: 'Ytterbium', group: ['lanthanoid', 'metal'] },
    { id: 71, symbol: 'Lu', name: 'Lutetium', group: ['lanthanoid', 'metal'] },
    { id: 72, symbol: 'Hf', name: 'Hafnium', group: ['transition', 'metal'] },
    { id: 73, symbol: 'Ta', name: 'Tantalum', group: ['transition', 'metal'] },
    { id: 74, symbol: 'W', name: 'Tungsten', group: ['transition', 'metal'] },
    { id: 75, symbol: 'Re', name: 'Rhenium', group: ['transition', 'metal'] },
    { id: 76, symbol: 'Os', name: 'Osmium', group: ['transition', 'metal'] },
    { id: 77, symbol: 'Ir', name: 'Iridium', group: ['transition', 'metal'] },
    { id: 78, symbol: 'Pt', name: 'Platinum', group: ['transition', 'metal'] },
    { id: 79, symbol: 'Au', name: 'Gold', group: ['transition', 'metal'] },
    { id: 80, symbol: 'Hg', name: 'Mercury', group: ['transition', 'metal'] },
    { id: 81, symbol: 'Tl', name: 'Thallium', group: ['post_transition', 'metal'] },
    { id: 82, symbol: 'Pb', name: 'Lead', group: ['post_transition', 'metal'] },
    { id: 83, symbol: 'Bi', name: 'Bismuth', group: ['post_transition', 'metal'] },
    { id: 84, symbol: 'Po', name: 'Polonium', group: ['post_transition', 'metal'] },
    { id: 85, symbol: 'At', name: 'Astatine', group: ['metalloid'] },
    { id: 86, symbol: 'Rn', name: 'Radon', group: ['noble', 'nonmetal'] },
    { id: 87, symbol: 'Fr', name: 'Francium', group: ['alkali', 'metal'] },
    { id: 88, symbol: 'Ra', name: 'Radium', group: ['alkaline', 'metal'] },
    { id: 89, symbol: 'Ac', name: 'Actinium', group: ['actinoid', 'metal'] },
    { id: 90, symbol: 'Th', name: 'Thorium', group: ['actinoid', 'metal'] },
    { id: 91, symbol: 'Pa', name: 'Protactinium', group: ['actinoid', 'metal'] },
    { id: 92, symbol: 'U', name: 'Uranium', group: ['actinoid', 'metal'] },
    { id: 93, symbol: 'Np', name: 'Neptunium', group: ['actinoid', 'metal'] },
    { id: 94, symbol: 'Pu', name: 'Plutonium', group: ['actinoid', 'metal'] },
    { id: 95, symbol: 'Am', name: 'Americium', group: ['actinoid', 'metal'] },
    { id: 96, symbol: 'Cm', name: 'Curium', group: ['actinoid', 'metal'] },
    { id: 97, symbol: 'Bk', name: 'Berkelium', group: ['actinoid', 'metal'] },
    { id: 98, symbol: 'Cf', name: 'Californium', group: ['actinoid', 'metal'] },
    { id: 99, symbol: 'Es', name: 'Einsteinium', group: ['actinoid', 'metal'] },
    { id: 100, symbol: 'Fm', name: 'Fermium', group: ['actinoid', 'metal'] },
    { id: 101, symbol: 'Md', name: 'Mendelevium', group: ['actinoid', 'metal'] },
    { id: 102, symbol: 'No', name: 'Nobelium', group: ['actinoid', 'metal'] },
    { id: 103, symbol: 'Lr', name: 'Lawrencium', group: ['actinoid', 'metal'] },
    { id: 104, symbol: 'Rf', name: 'Rutherfordium', group: ['transition', 'metal'] },
    { id: 105, symbol: 'Db', name: 'Dubnium', group: ['transition', 'metal'] },
    { id: 106, symbol: 'Sg', name: 'Seaborgium', group: ['transition', 'metal'] },
    { id: 107, symbol: 'Bh', name: 'Bohrium', group: ['transition', 'metal'] },
    { id: 108, symbol: 'Hs', name: 'Hassium', group: ['transition', 'metal'] },
    { id: 109, symbol: 'Mt', name: 'Meitnerium', group: [''] },
    { id: 110, symbol: 'Ds', name: 'Darmstadtium', group: [''] },
    { id: 111, symbol: 'Rg', name: 'Roentgenium', group: [''] },
    { id: 112, symbol: 'Cn', name: 'Copernicium', group: [''] },
    { id: 113, symbol: 'Nh', name: 'Nihonium', group: [''] },
    { id: 114, symbol: 'Fl', name: 'Flerovium', group: [''] },
    { id: 115, symbol: 'Mc', name: 'Moscovium', group: [''] },
    { id: 116, symbol: 'Lv', name: 'Livermorium', group: [''] },
    { id: 117, symbol: 'Ts', name: 'Tennessine', group: [''] },
    { id: 118, symbol: 'Og', name: 'Oganesson', group: [''] },
    { id: '57-71', symbol: '', name: '', group: [''] },
    { id: '89-103', symbol: '', name: '', group: [''] }
  ]
  
  export default elements;