/**
 * DATA WAREHOUSE
 * Sources: Mobalytics, U.gg, OP.gg knowledge.
 */

// 1. Patch 25.23 Changes
export const patchData = [
    { name: "K'Sante", type: "nerf", change: "Q Base Damage reduced by 10." },
    { name: "Jinx", type: "buff", change: "R Execute damage increased to 15%." },
    { name: "Briar", type: "change", change: "W Healing mechanism adjusted." },
    { name: "Zed", type: "nerf", change: "E Cooldown increased early game." },
    { name: "Lulu", type: "buff", change: "E Shield strength AP ratio up." }
];

// 2. Top 3 Meta Picks per Role
export const metaPicks = {
    top: [
        { name: "Aatrox", win: "51.2%", pick: "12%", ban: "15%" },
        { name: "Jax", win: "50.8%", pick: "10%", ban: "22%" },
        { name: "Renekton", win: "50.1%", pick: "9%", ban: "5%" }
    ],
    jungle: [
        { name: "Lee Sin", win: "49.8%", pick: "18%", ban: "10%" },
        { name: "Viego", win: "50.5%", pick: "14%", ban: "8%" },
        { name: "Jarvan IV", win: "51.5%", pick: "11%", ban: "6%" }
    ],
    mid: [
        { name: "Orianna", win: "51.0%", pick: "13%", ban: "4%" },
        { name: "Sylas", win: "49.5%", pick: "15%", ban: "12%" },
        { name: "Syndra", win: "50.9%", pick: "9%", ban: "7%" }
    ],
    adc: [
        { name: "Kai'Sa", win: "51.4%", pick: "25%", ban: "18%" },
        { name: "Ezreal", win: "48.9%", pick: "22%", ban: "5%" },
        { name: "Jhin", win: "51.2%", pick: "18%", ban: "3%" }
    ],
    support: [
        { name: "Thresh", win: "50.2%", pick: "16%", ban: "9%" },
        { name: "Rakan", win: "51.5%", pick: "12%", ban: "6%" },
        { name: "Nautilus", win: "49.8%", pick: "14%", ban: "11%" }
    ]
};

// 3. Support Synergy Data (Sample for 'Ezreal' and 'Kai'Sa')
export const supportSynergies = {
    "Ezreal": {
        S: [
            { name: "Karma", role: "Enchanter/Poke", reason: "Strong poke synergy. Karma R-Q allows Ezreal to land free Qs.", rune: "Arcane Comet" },
            { name: "Yuumi", role: "Enchanter", reason: "Makes Ezreal unkillable and boosts his poke damage significantly.", rune: "Summon Aery" }
        ],
        A: [
            { name: "Lux", role: "Mage", reason: "High burst kill pressure at level 6.", rune: "First Strike" },
            { name: "Braum", role: "Warden", reason: "Good peel, but Ezreal Q applies Braum passive stacks.", rune: "Guardian" }
        ],
        B: [
            { name: "Leona", role: "Engage", reason: "Ezreal sometimes struggles to follow up on hard engage instantly.", rune: "Aftershock" }
        ],
        C: [
            { name: "Taric", role: "Enchanter", reason: "Taric needs a frontline diver; Ezreal wants to kite back.", rune: "Glacial Augment" }
        ],
        tip: "When playing with Ezreal, focus on poking the enemy down before committing to an all-in. Push for Level 2 priority."
    },
    "Kai'Sa": {
        S: [
            { name: "Nautilus", role: "Engage", reason: "Insane CC chain allows Kai'Sa to stack passive instantly.", rune: "Glacial Augment" },
            { name: "Rell", role: "Engage", reason: "AoE CC sets up perfect Kai'Sa ultimates.", rune: "Aftershock" }
        ],
        A: [
            { name: "Pyke", role: "Assassin", reason: "Aggressive kill lane, gold generation snowballs Kai'Sa.", rune: "Hail of Blades" }
        ],
        B: [
            { name: "Lulu", role: "Enchanter", reason: "Decent peel, but Kai'Sa prefers hard CC to activate plasma.", rune: "Guardian" }
        ],
        C: [
            { name: "Soraka", role: "Enchanter", reason: "Too passive. Kai'Sa needs setup to get kills early.", rune: "Aery" }
        ],
        tip: "Look for opportunities to CC the enemy. Kai'Sa's passive stacks on YOUR immobilization effects."
    }
    // Add more champions here...
};

// List of all ADCs to populate the search grid
export const adcList = ["Ezreal", "Kai'Sa", "Jhin", "Caitlyn", "Vayne", "Lucian", "Samira", "Ashe", "Draven", "Xayah"];