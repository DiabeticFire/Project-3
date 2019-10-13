// import images
// import HeavySoldierImg from "../images/HeavySoldier.png";

const cards = {
  LordGeneralPozak: {
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
  },

  CedricTheMage: {
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
  },

  HumanSoldier: {
    name: "Human Soldier",
    type: "unit",
    power: 1,
    health: 4,
    ready: 4,
    faction: "human"
  },

  HeavySoldier: {
    name: "Heavy Soldier",
    type: "unit",
    power: 2,
    health: 5,
    ready: 6,
    faction: "human",
    abilities: {
      armor: 1
    },
    src: "/images/card-art/HeavySoldier.png"
  },

  Cavalier: {
    name: "Cavalier",
    type: "unit",
    power: 2,
    health: 5,
    ready: 6,
    faction: "human"
  },

  HeavyCavalier: {
    name: "Heavy Cavalier",
    type: "unit",
    power: 3,
    health: 6,
    ready: 8,
    abilities: {
      armor: 1
    }
  },

  PegasusKnight: {
    name: "Pegasus Knight",
    type: "unit",
    power: 2,
    health: 5,
    ready: 8,
    faction: "human",
    abilities: {
      flying: true
    }
  },

  WhiteDrake: {
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
  },

  WhiteDragon: {
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
  },

  LordOfLyn: {
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
  },

  Healer: {
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
  },

  ElvenArcher: {
    name: "Elven Archer",
    type: "unit",
    power: 2,
    health: 5,
    ready: 6,
    faction: "elven",
    abilities: {
      archery: true
    }
  },

  ElvishHealer: {
    name: "Elvish Healer",
    type: "unit",
    power: 0,
    health: 4,
    ready: 6,
    faction: "elven",
    abilities: {
      heal: 2
    }
  },

  Bear: {
    name: "Bear",
    type: "unit",
    power: 2,
    health: 6,
    faction: "elven",
    ready: 8,
    abilities: {
      rage: 1
    }
  },

  Boar: {
    name: "Boar",
    type: "unit",
    power: 2,
    health: 6,
    ready: 6,
    faction: "elven"
  },

  GreenDrake: {
    name: "Green Drake",
    type: "unit",
    power: 2,
    health: 8,
    ready: 6,
    faction: "elven",
    abilities: {
      poison: 1
    }
  },

  GreenDragon: {
    name: "Green Dragon",
    type: "unit",
    power: 3,
    health: 11,
    ready: 10,
    faction: "elven",
    abilities: {
      poison: 1
    }
  },

  ShortSword: {
    name: "Short Sword",
    type: "equipment",
    ready: 6,
    faction: "neutral",
    abilities: {
      "attack boost": 2
    }
  },

  SquareShield: {
    name: "Square Shield",
    type: "equipment",
    ready: 6,
    faction: "neutral",
    abilities: {
      armor: 1
    }
  },

  LightningBolt: {
    name: "Lightning Bolt",
    type: "spell",
    ready: 4,
    faction: "neutral",
    abilities: {
      "lightning bolt": 6
    }
  },

  LightningStorm: {
    name: "Lightning Storm",
    type: "spell",
    ready: 8,
    faction: "neutral",
    abilities: {
      "lightning bolt all": 4
    }
  }
};

export default cards;
