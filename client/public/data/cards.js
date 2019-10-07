const LordGeneralPozak = {
  name: "Lord General Pozak",
  type: "comander",
  power: 3,
  health: 8,
  ready: 8,
  army: {
    units: 6,
    equipment: 0,
    spells: 0
  },
  faction: "human"
};

const CedricTheMage = {
  name: "Cedric the Mage",
  type: "comander",
  power: 1,
  health: 6,
  ready: 8,
  army: {
    units: 4,
    equipment: 1,
    spells: 1
  },
  faction: "human",
  abilities: {
    frostbolt: 2
  }
};
const HumanSoldier = {
  name: "Human Soldier",
  type: "unit",
  power: 1,
  health: 4,
  ready: 4,
  faction: "human"
};
const HeavySoldier = {
  name: "Heavy Soldier",
  type: "unit",
  power: 2,
  health: 5,
  ready: 6,
  faction: "human",
  abilities: {
    armor: 1
  }
};
const Cavalier = {
  name: "Cavalier",
  type: "unit",
  power: 2,
  health: 5,
  ready: 6,
  faction: "human"
};
const HeavyCavalier = {
  name: "Heavy Cavalier",
  type: "unit",
  power: 3,
  health: 6,
  ready: 8,
  abilities: {
    armor: 1
  }
};
const PegasusKnight = {
  name: "Pegasus Knight",
  type: "unit",
  power: 2,
  health: 5,
  ready: 8,
  faction: "human",
  abilities: {
    flying: true
  }
};
const WhiteDrake = {
  name: "White Drake",
  type: "unit",
  power: 1,
  health: 4,
  ready: 6,
  faction: "human",
  abilities: {
    frostbolt: 1,
    flying: true
  }
};
const WhiteDragon = {
  name: "White Dragon",
  type: "unit",
  power: 2,
  health: 6,
  ready: 10,
  faction: "human",
  abilities: {
    frostbolt: 2,
    flying: true
  }
};
const LordOfLyn = {
  name: "??? Lord of Lyn",
  type: "comander",
  power: 3,
  health: 7,
  ready: 8,
  faction: "elven",
  abilities: {
    archery: true
  },
  army: {
    units: 5,
    equipment: 1,
    spells: 0
  }
};
const Healer = {
  name: "??? Healer",
  type: "comander",
  power: 2,
  health: 6,
  ready: 8,
  faction: "elven",
  abilities: {
    heal: 2
  },
  army: {
    units: 5,
    spells: 1,
    equipment: 0
  }
};
const ElvenArcher = {
  name: "Elven Archer",
  type: "unit",
  power: 2,
  health: 5,
  ready: 6,
  faction: "elven",
  abilities: {
    archery: true
  }
};
const ElvishHealer = {
  name: "Elvish Healer",
  type: "unit",
  power: 0,
  health: 4,
  ready: 6,
  faction: "elven",
  abilities: {
    heal: 2
  }
};
const Bear = {
  name: "Bear",
  type: "unit",
  power: 2,
  health: 6,
  faction: "elven",
  ready: 8,
  abilities: {
    rage: 1
  }
};
const Boar = {
  name: "Boar",
  type: "unit",
  power: 2,
  health: 6,
  ready: 6,
  faction: "elven"
};
const GreenDrake = {
  name: "Green Drake",
  type: "unit",
  power: 2,
  health: 8,
  ready: 6,
  faction: "elven",
  abilities: {
    poison: 1
  }
};
const GreenDragon = {
  name: "Green Dragon",
  type: "unit",
  power: 3,
  health: 11,
  ready: 10,
  faction: "elven",
  abilities: {
    poison: 1
  }
};
const ShortSword = {
  name: "Short Sword",
  type: "equipment",
  ready: 6,
  faction: "neutral",
  abilities: {
    "attack boost": 2
  }
};
const SquareShield = {
  name: "Square Shield",
  type: "equipment",
  ready: 6,
  faction: "neutral",
  abilities: {
    armor: 1
  }
};
const LightningBolt = {
  name: "Lightning Bolt",
  type: "spell",
  ready: 4,
  faction: "neutral",
  abilities: {
    "lightning bolt": 6
  }
};
const LightningStorm = {
  name: "Lightning Storm",
  type: "spell",
  ready: 8,
  faction: "neutral",
  abilities: {
    "lightning bolt all": 4
  }
};
