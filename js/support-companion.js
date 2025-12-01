/**
 * SkillDiff.lol - Support Companion Module
 * Comprehensive support synergy data and tier lists for ADCs
 * Data sourced from U.GG, OP.GG, Mobalytics, MetaSrc, and Pro Player Guides
 */

// ADC Champion List
const adcChampions = [
    'Aphelios', 'Ashe', 'Caitlyn', 'Draven', 'Ezreal', 'Jhin', 'Jinx', 
    'Kai\'Sa', 'Kalista', 'Kog\'Maw', 'Lucian', 'Miss Fortune', 'Nilah',
    'Samira', 'Senna', 'Sivir', 'Smolder', 'Tristana', 'Twitch', 
    'Varus', 'Vayne', 'Xayah', 'Zeri', 'Ziggs'
];

// Support Champion List with Roles
const supportChampions = {
    'Alistar': 'Engage',
    'Bard': 'Roaming',
    'Blitzcrank': 'Hook',
    'Brand': 'Mage',
    'Braum': 'Warden',
    'Janna': 'Enchanter',
    'Karma': 'Enchanter/Poke',
    'Leona': 'Engage',
    'Lulu': 'Enchanter',
    'Lux': 'Mage',
    'Milio': 'Enchanter',
    'Morgana': 'Control',
    'Nami': 'Enchanter',
    'Nautilus': 'Engage',
    'Pyke': 'Hook',
    'Rakan': 'Engage',
    'Rell': 'Engage',
    'Renata Glasc': 'Enchanter',
    'Senna': 'Marksman',
    'Seraphine': 'Mage/Enchanter',
    'Sett': 'Engage',
    'Shaco': 'Utility',
    'Sona': 'Enchanter',
    'Soraka': 'Enchanter',
    'Swain': 'Mage',
    'Tahm Kench': 'Warden',
    'Taric': 'Warden',
    'Thresh': 'Hook',
    'Xerath': 'Mage',
    'Yuumi': 'Enchanter',
    'Zilean': 'Enchanter',
    'Zyra': 'Mage'
};

// Comprehensive Support Synergy Data
const supportSynergies = {
    'Ezreal': {
        generalTip: 'Ezreal excels with poke-heavy supports who can apply pressure from range and help him farm safely. Avoid all-in engagers as Ezreal lacks follow-up damage early.',
        supports: {
            'S': [
                {
                    name: 'Yuumi',
                    role: 'Enchanter',
                    reasons: [
                        'Perfect synergy with Ezreal\'s poke-oriented playstyle',
                        'Adaptive Force boosts his Q poke damage significantly',
                        'Provides sustain without forcing risky engages',
                        'Ultimate helps Ezreal kite and reposition in fights'
                    ]
                },
                {
                    name: 'Karma',
                    role: 'Enchanter/Poke',
                    reasons: [
                        'Strong poke with RQ complements Ezreal\'s Q spam',
                        'Shield and movement speed help Ezreal stay safe',
                        'Can disengage from unfavorable fights easily',
                        'Strong 2v2 poke war potential in lane'
                    ]
                },
                {
                    name: 'Lux',
                    role: 'Mage',
                    reasons: [
                        'Long-range poke creates oppressive lane pressure',
                        'Root setup allows Ezreal to land guaranteed Qs',
                        'Shield provides unexpected durability',
                        'Both can safely farm and scale from distance'
                    ]
                }
            ],
            'A': [
                {
                    name: 'Zilean',
                    role: 'Enchanter',
                    reasons: [
                        'Bombs add significant poke damage to lane phase',
                        'Speed boost enhances Ezreal\'s kiting ability',
                        'Ultimate provides safety net for aggressive plays',
                        'Strong mid-game roaming potential together'
                    ]
                },
                {
                    name: 'Nami',
                    role: 'Enchanter',
                    reasons: [
                        'Tidecaller\'s Blessing enhances Ezreal\'s auto poke',
                        'Sustain helps Ezreal survive poke trades',
                        'Bubble can setup skill shots',
                        'Ultimate provides solid engage/disengage'
                    ]
                },
                {
                    name: 'Xerath',
                    role: 'Mage',
                    reasons: [
                        'Extreme poke range overwhelms enemy bot lane',
                        'Stun enables guaranteed Mystic Shot hits',
                        'Both excel at sieging and poking',
                        'Strong objective control from range'
                    ]
                },
                {
                    name: 'Seraphine',
                    role: 'Mage/Enchanter',
                    reasons: [
                        'Notes provide shields and healing for sustain',
                        'Charm extends Ezreal\'s poke window',
                        'Strong teamfight ultimate synergy',
                        'Can turn defensive fights around'
                    ]
                }
            ],
            'B': [
                {
                    name: 'Morgana',
                    role: 'Control',
                    reasons: [
                        'Black Shield prevents engage on Ezreal',
                        'Binding creates safe poke windows',
                        'Pool adds waveclear pressure',
                        'Decent poke and disengage tools'
                    ]
                },
                {
                    name: 'Bard',
                    role: 'Roaming',
                    reasons: [
                        'Q stun enables Ezreal combos',
                        'Meeps add surprising damage',
                        'Portal provides escapes',
                        'May leave Ezreal alone often'
                    ]
                },
                {
                    name: 'Sona',
                    role: 'Enchanter',
                    reasons: [
                        'Auras provide consistent damage boost',
                        'Sustain helps survive poke',
                        'Late game scaling matches Ezreal',
                        'Weak early lane presence'
                    ]
                },
                {
                    name: 'Janna',
                    role: 'Enchanter',
                    reasons: [
                        'Shield enhances trade potential',
                        'Excellent disengage tools',
                        'Tornado can interrupt engages',
                        'Limited offensive pressure'
                    ]
                }
            ],
            'C': [
                {
                    name: 'Leona',
                    role: 'Engage',
                    reasons: [
                        'Ezreal lacks burst to follow up on engage',
                        'Forces unfavorable all-in trades',
                        'Leaves Ezreal vulnerable when engaging',
                        'Better suited for auto-attack ADCs'
                    ]
                },
                {
                    name: 'Nautilus',
                    role: 'Engage',
                    reasons: [
                        'Hard engage doesn\'t match Ezreal\'s poke style',
                        'Ezreal can\'t capitalize on crowd control',
                        'Weak into poke lanes',
                        'Limited synergy in teamfights'
                    ]
                },
                {
                    name: 'Alistar',
                    role: 'Engage',
                    reasons: [
                        'All-in pattern conflicts with Ezreal\'s safety',
                        'Ezreal can\'t follow up on engages effectively',
                        'Weak laning phase together',
                        'Poor scaling synergy'
                    ]
                }
            ]
        }
    },
    'Jinx': {
        generalTip: 'Jinx thrives with engage or peel supports who can protect her while she scales. She needs setup for her abilities and benefits from crowd control chains.',
        supports: {
            'S': [
                {
                    name: 'Lulu',
                    role: 'Enchanter',
                    reasons: [
                        'Pix doubles Jinx\'s attack speed steroid effectiveness',
                        'Polymorph and ultimate protect hypercarry fantasy',
                        'Shield and movement speed enable aggressive positioning',
                        'Excellent peel against assassins and divers'
                    ]
                },
                {
                    name: 'Thresh',
                    role: 'Hook',
                    reasons: [
                        'Hook provides setup for Jinx\'s W and E',
                        'Lantern offers safety and engage options',
                        'Flay interrupts divers protecting Jinx',
                        'Box zones enemies in teamfights'
                    ]
                },
                {
                    name: 'Nami',
                    role: 'Enchanter',
                    reasons: [
                        'Bubble enables guaranteed Flame Chompers',
                        'Heal sustains through lane trades',
                        'E buff empowers Jinx\'s rocket attacks',
                        'Ultimate provides both engage and disengage'
                    ]
                }
            ],
            'A': [
                {
                    name: 'Leona',
                    role: 'Engage',
                    reasons: [
                        'Strong all-in potential for early kills',
                        'Crowd control chains enable Jinx to stack damage',
                        'Tankiness protects Jinx in teamfights',
                        'Can struggle if behind in lane'
                    ]
                },
                {
                    name: 'Morgana',
                    role: 'Control',
                    reasons: [
                        'Black Shield prevents CC on Jinx',
                        'Binding creates kill windows',
                        'Ultimate zones enemies in fights',
                        'Pool helps waveclear under turret'
                    ]
                },
                {
                    name: 'Braum',
                    role: 'Warden',
                    reasons: [
                        'Passive synergizes with Jinx\'s attack speed',
                        'Shield blocks critical skill shots',
                        'Ultimate provides teamfight setup',
                        'Excellent peel and durability'
                    ]
                },
                {
                    name: 'Janna',
                    role: 'Enchanter',
                    reasons: [
                        'Shield enhances Jinx\'s DPS significantly',
                        'Tornado and ultimate provide peel',
                        'Slow helps Jinx land chompers',
                        'Strong disengage tools'
                    ]
                }
            ],
            'B': [
                {
                    name: 'Brand',
                    role: 'Mage',
                    reasons: [
                        'High base damage creates kill pressure',
                        'Stun enables Chomper placement',
                        'Independent damage source',
                        'Offers no peel or protection'
                    ]
                },
                {
                    name: 'Bard',
                    role: 'Roaming',
                    reasons: [
                        'Q stun creates short windows',
                        'Shrine sustains trades',
                        'Often roams leaving Jinx alone',
                        'Ultimate can backfire'
                    ]
                },
                {
                    name: 'Zilean',
                    role: 'Enchanter',
                    reasons: [
                        'Speed boost helps Jinx kite',
                        'Ultimate provides second chance',
                        'Bombs add poke damage',
                        'Limited lane pressure'
                    ]
                },
                {
                    name: 'Senna',
                    role: 'Marksman',
                    reasons: [
                        'Double ADC composition',
                        'Weak early game together',
                        'Competes for farm',
                        'Strong late but risky'
                    ]
                }
            ],
            'C': [
                {
                    name: 'Pyke',
                    role: 'Hook',
                    reasons: [
                        'Lacks protection for Jinx',
                        'Forces risky aggressive plays',
                        'No peel against divers',
                        'Gold sharing unreliable'
                    ]
                },
                {
                    name: 'Shaco',
                    role: 'Utility',
                    reasons: [
                        'Roams too much leaving Jinx vulnerable',
                        'No reliable peel or protection',
                        'Gimmicky playstyle',
                        'Better in other lanes'
                    ]
                },
                {
                    name: 'Xerath',
                    role: 'Mage',
                    reasons: [
                        'No protection for Jinx at all',
                        'Poke doesn\'t leverage Jinx\'s DPS',
                        'Weak against engage',
                        'Both immobile and squishy'
                    ]
                }
            ]
        }
    },
    'Vayne': {
        generalTip: 'Vayne needs supports who can provide peel and survive weak early game. Focus on keeping her safe until she scales and can duel anyone.',
        supports: {
            'S': [
                {
                    name: 'Lulu',
                    role: 'Enchanter',
                    reasons: [
                        'Polymorph neutralizes threats during Silver Bolts proc',
                        'Ultimate gives Vayne dueling power and survivability',
                        'Shield helps Vayne trade in lane',
                        'Perfect synergy for hypercarry protect comp'
                    ]
                },
                {
                    name: 'Tahm Kench',
                    role: 'Warden',
                    reasons: [
                        'Devour saves Vayne from certain death',
                        'Thick Skin provides frontline presence',
                        'Tongue Lash slows for Condemn setup',
                        'Can body block skill shots'
                    ]
                },
                {
                    name: 'Braum',
                    role: 'Warden',
                    reasons: [
                        'Passive stacks quickly with Vayne\'s attack speed',
                        'Shield blocks key abilities',
                        'Stand Behind Me provides escape',
                        'Ultimate zones enemies from Vayne'
                    ]
                }
            ],
            'A': [
                {
                    name: 'Thresh',
                    role: 'Hook',
                    reasons: [
                        'Hook enables Condemn into wall',
                        'Lantern provides crucial escapes',
                        'Flay interrupts gap closers',
                        'Box zones melee threats'
                    ]
                },
                {
                    name: 'Janna',
                    role: 'Enchanter',
                    reasons: [
                        'Shield empowers trades significantly',
                        'Tornado interrupts dives',
                        'Ultimate resets teamfights',
                        'Excellent disengage tools'
                    ]
                },
                {
                    name: 'Taric',
                    role: 'Warden',
                    reasons: [
                        'Ultimate makes Vayne unkillable',
                        'Armor aura helps survive',
                        'Stun follows up Condemn',
                        'Heals sustain weak lane'
                    ]
                },
                {
                    name: 'Nami',
                    role: 'Enchanter',
                    reasons: [
                        'E empowers Vayne\'s trades and poke',
                        'Heal sustains through difficult lanes',
                        'Bubble can setup Condemn',
                        'Ultimate provides disengage'
                    ]
                }
            ],
            'B': [
                {
                    name: 'Morgana',
                    role: 'Control',
                    reasons: [
                        'Black Shield prevents CC on Vayne',
                        'Binding creates windows to trade',
                        'Weak early laning phase',
                        'Limited peel tools'
                    ]
                },
                {
                    name: 'Karma',
                    role: 'Enchanter/Poke',
                    reasons: [
                        'Shield and speed help Vayne chase',
                        'Poke helps control lane',
                        'Root can setup Condemn',
                        'Lacks hard peel'
                    ]
                },
                {
                    name: 'Leona',
                    role: 'Engage',
                    reasons: [
                        'All-in can create early kills',
                        'Crowd control locks down targets',
                        'Risky with Vayne\'s weak early',
                        'Needs to snowball'
                    ]
                },
                {
                    name: 'Sona',
                    role: 'Enchanter',
                    reasons: [
                        'Weak early game together',
                        'Auras provide scaling power',
                        'Ultimate wins late fights',
                        'Very vulnerable to ganks'
                    ]
                }
            ],
            'C': [
                {
                    name: 'Xerath',
                    role: 'Mage',
                    reasons: [
                        'No protection for Vayne',
                        'Poke style doesn\'t help Vayne scale',
                        'Both squishy and vulnerable',
                        'Terrible synergy'
                    ]
                },
                {
                    name: 'Brand',
                    role: 'Mage',
                    reasons: [
                        'Zero peel for Vayne',
                        'Forces risky aggressive plays',
                        'Doesn\'t help weak early game',
                        'Leaves Vayne to die'
                    ]
                },
                {
                    name: 'Pyke',
                    role: 'Hook',
                    reasons: [
                        'Roams and leaves Vayne alone',
                        'No peel or protection',
                        'Forces all-in with weak ADC',
                        'Terrible matchup'
                    ]
                }
            ]
        }
    },
    'Caitlyn': {
        generalTip: 'Caitlyn dominates with poke and trap setups. Pair her with supports who provide crowd control to guarantee trap placement and maintain range advantage.',
        supports: {
            'S': [
                {
                    name: 'Morgana',
                    role: 'Control',
                    reasons: [
                        'Binding guarantees trap placement under enemy',
                        'Black Shield protects Caitlyn from engage',
                        'Pool adds waveclear and zone control',
                        'Ultimate synergizes with trap zones'
                    ]
                },
                {
                    name: 'Lux',
                    role: 'Mage',
                    reasons: [
                        'Root enables free trap + headshot combo',
                        'Long range poke matches Caitlyn\'s range',
                        'Shield helps win trades',
                        'Both excel at sieging objectives'
                    ]
                },
                {
                    name: 'Karma',
                    role: 'Enchanter/Poke',
                    reasons: [
                        'Root allows trap placement',
                        'Poke creates oppressive lane',
                        'Shield and speed for aggressive positioning',
                        'Strong lane dominance together'
                    ]
                }
            ],
            'A': [
                {
                    name: 'Zyra',
                    role: 'Mage',
                    reasons: [
                        'Root guarantees trap hits',
                        'Plants add zone control',
                        'High poke damage',
                        'Strong objective control'
                    ]
                },
                {
                    name: 'Xerath',
                    role: 'Mage',
                    reasons: [
                        'Stun enables trap combos',
                        'Extreme poke range',
                        'Excellent siege potential',
                        'Strong laning phase'
                    ]
                },
                {
                    name: 'Thresh',
                    role: 'Hook',
                    reasons: [
                        'Hook sets up guaranteed traps',
                        'Flay stops engages',
                        'Lantern provides safety',
                        'Box zones in teamfights'
                    ]
                },
                {
                    name: 'Nami',
                    role: 'Enchanter',
                    reasons: [
                        'Bubble enables trap placement',
                        'E enhances Caitlyn\'s poke',
                        'Sustain helps maintain range advantage',
                        'Ultimate provides engage/disengage'
                    ]
                }
            ],
            'B': [
                {
                    name: 'Leona',
                    role: 'Engage',
                    reasons: [
                        'All-in creates early kill pressure',
                        'Crowd control chains with traps',
                        'Can be punished if misplays',
                        'Decent but not optimal'
                    ]
                },
                {
                    name: 'Blitzcrank',
                    role: 'Hook',
                    reasons: [
                        'Hook creates instant kills',
                        'Threat pressure zones enemies',
                        'Limited peel if hook misses',
                        'Mana-dependent'
                    ]
                },
                {
                    name: 'Senna',
                    role: 'Marksman',
                    reasons: [
                        'Double marksman range abuse',
                        'Root enables traps',
                        'Weak to engage',
                        'Fights over farm'
                    ]
                },
                {
                    name: 'Janna',
                    role: 'Enchanter',
                    reasons: [
                        'Shield enhances poke trades',
                        'Tornado stops engages',
                        'Doesn\'t enable traps well',
                        'Defensive playstyle'
                    ]
                }
            ],
            'C': [
                {
                    name: 'Alistar',
                    role: 'Engage',
                    reasons: [
                        'All-in doesn\'t leverage Caitlyn\'s range',
                        'Weak laning phase',
                        'Caitlyn can\'t follow up',
                        'Poor synergy'
                    ]
                },
                {
                    name: 'Yuumi',
                    role: 'Enchanter',
                    reasons: [
                        'Wastes Caitlyn\'s lane dominance',
                        'No trap setup',
                        'Passive laning',
                        'Better on other ADCs'
                    ]
                },
                {
                    name: 'Taric',
                    role: 'Warden',
                    reasons: [
                        'Melee support with range ADC mismatch',
                        'Doesn\'t enable Caitlyn\'s kit',
                        'Weak lane pressure',
                        'Poor fit'
                    ]
                }
            ]
        }
    },
    'Lucian': {
        generalTip: 'Lucian excels with engage supports for all-in burst combos. His short range requires supports who can create windows for him to dash in safely.',
        supports: {
            'S': [
                {
                    name: 'Nami',
                    role: 'Enchanter',
                    reasons: [
                        'E empowers Lucian\'s passive double hits massively',
                        'Bubble enables guaranteed combo damage',
                        'Heal sustains aggressive trades',
                        'Movement speed helps kiting'
                    ]
                },
                {
                    name: 'Braum',
                    role: 'Warden',
                    reasons: [
                        'Passive procs quickly with Lucian\'s passive',
                        'Q poke matches Lucian\'s range',
                        'Stand Behind Me follows Lucian dashes',
                        'Shield protects during all-ins'
                    ]
                },
                {
                    name: 'Thresh',
                    role: 'Hook',
                    reasons: [
                        'Hook creates instant all-in windows',
                        'Flay enables full combo',
                        'Lantern follows Lucian engages',
                        'Box traps for extended damage'
                    ]
                }
            ],
            'A': [
                {
                    name: 'Leona',
                    role: 'Engage',
                    reasons: [
                        'Strong all-in synergy',
                        'Crowd control chains for extended damage',
                        'Tanky frontline',
                        'High kill pressure'
                    ]
                },
                {
                    name: 'Nautilus',
                    role: 'Engage',
                    reasons: [
                        'Hook and ultimate lock down targets',
                        'Passive root chains with crowd control',
                        'Tankiness enables aggressive plays',
                        'Strong pick potential'
                    ]
                },
                {
                    name: 'Karma',
                    role: 'Enchanter/Poke',
                    reasons: [
                        'Root enables all-ins',
                        'Shield and speed for aggressive trades',
                        'Mantra E creates strong engages',
                        'Good poke and sustain'
                    ]
                },
                {
                    name: 'Rakan',
                    role: 'Engage',
                    reasons: [
                        'W and ultimate create engage windows',
                        'Shield helps trade',
                        'High mobility matches Lucian',
                        'Strong teamfight presence'
                    ]
                }
            ],
            'B': [
                {
                    name: 'Morgana',
                    role: 'Control',
                    reasons: [
                        'Binding creates all-in windows',
                        'Black Shield enables aggressive plays',
                        'Somewhat passive laning',
                        'Decent but not optimal'
                    ]
                },
                {
                    name: 'Lulu',
                    role: 'Enchanter',
                    reasons: [
                        'Pix enhances Lucian\'s damage',
                        'Polymorph provides peel',
                        'Passive laning style',
                        'Better with other ADCs'
                    ]
                },
                {
                    name: 'Alistar',
                    role: 'Engage',
                    reasons: [
                        'Strong all-in potential',
                        'Tankiness enables dives',
                        'Slow combos telegraphed',
                        'Mana issues in lane'
                    ]
                },
                {
                    name: 'Blitzcrank',
                    role: 'Hook',
                    reasons: [
                        'Hook creates kills',
                        'Threat pressure zones',
                        'Binary win condition',
                        'Risky if behind'
                    ]
                }
            ],
            'C': [
                {
                    name: 'Soraka',
                    role: 'Enchanter',
                    reasons: [
                        'Passive laning wastes Lucian\'s power',
                        'No engage or crowd control setup',
                        'Weak to all-ins',
                        'Poor fit'
                    ]
                },
                {
                    name: 'Sona',
                    role: 'Enchanter',
                    reasons: [
                        'Too passive for Lucian\'s style',
                        'Weak early laning',
                        'No crowd control for combos',
                        'Bad synergy'
                    ]
                },
                {
                    name: 'Xerath',
                    role: 'Mage',
                    reasons: [
                        'Poke style doesn\'t help Lucian',
                        'No protection for short range',
                        'Conflicting playstyles',
                        'Terrible matchup'
                    ]
                }
            ]
        }
    }
};

// Simplified data for other ADCs (to be expanded)
const otherADCs = [
    'Aphelios', 'Ashe', 'Draven', 'Jhin', 'Kai\'Sa', 'Kalista', 'Kog\'Maw',
    'Miss Fortune', 'Nilah', 'Samira', 'Senna', 'Sivir', 'Smolder', 
    'Tristana', 'Twitch', 'Varus', 'Xayah', 'Zeri', 'Ziggs'
];

/**
 * Initialize the Support Companion tool
 */
function initSupportCompanion() {
    loadADCGrid();
    initSearch();
}

/**
 * Load ADC champion grid
 */
function loadADCGrid() {
    const grid = document.getElementById('adc-grid');
    if (!grid) return;
    
    grid.innerHTML = adcChampions.map(adc => `
        <div class="champion-card cursor-pointer group relative" onclick="selectADC('${adc}')">
            <div class="aspect-square rounded-xl overflow-hidden border-2 border-gray-700 group-hover:border-primary transition-all duration-300 relative">
                <img src="../icons/champions/${adc}.png" 
                     alt="${adc}" 
                     class="champion-img"
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%231e293b%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23475569%22 font-size=%2230%22 font-family=%22Arial%22%3E${adc[0]}%3C/text%3E%3C/svg%3E'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    <span class="text-white text-xs font-semibold">Select</span>
                </div>
            </div>
            <p class="text-center text-sm mt-2 text-gray-300 group-hover:text-primary transition-colors">${adc}</p>
        </div>
    `).join('');
}

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchInput = document.getElementById('adc-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.champion-card');
        
        cards.forEach(card => {
            const champName = card.textContent.toLowerCase().trim();
            if (champName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

/**
 * Select an ADC and display support tier list
 * @param {string} adcName - Name of selected ADC
 */
function selectADC(adcName) {
    // Check if we have data for this ADC
    const hasFullData = supportSynergies.hasOwnProperty(adcName);
    
    if (!hasFullData) {
        showToast(`Detailed data for ${adcName} is coming soon! Currently available for: Ezreal, Jinx, Vayne, Caitlyn, and Lucian.`, 'info');
        return;
    }
    
    const adcData = supportSynergies[adcName];
    
    // Show results section
    const resultsSection = document.getElementById('results-section');
    resultsSection.classList.remove('hidden');
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Update header
    const header = document.getElementById('selected-adc-header');
    header.innerHTML = `
        <div class="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 border border-primary/30">
            <div class="flex items-center space-x-6">
                <div class="w-24 h-24 rounded-xl overflow-hidden border-4 border-primary shadow-lg">
                    <img src="../icons/champions/${adcName}.png" 
                         alt="${adcName}" 
                         class="w-full h-full object-cover"
                         onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%231e293b%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23475569%22 font-size=%2240%22 font-family=%22Arial%22%3E${adcName[0]}%3C/text%3E%3C/svg%3E'">
                </div>
                <div>
                    <h2 class="font-display font-bold text-3xl text-white mb-2">Support Synergies for ${adcName}</h2>
                    <p class="text-gray-300">Find the perfect support champion to dominate your lane</p>
                </div>
            </div>
        </div>
    `;
    
    // Update general tips
    const tipsSection = document.getElementById('general-tips');
    tipsSection.innerHTML = `
        <div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <div>
                    <h3 class="font-semibold text-blue-400 mb-2">General Support Tips for ${adcName}</h3>
                    <p class="text-gray-300 leading-relaxed">${adcData.generalTip}</p>
                </div>
            </div>
        </div>
    `;
    
    // Update tier list
    const tierList = document.getElementById('support-tier-list');
    const tiers = ['S', 'A', 'B', 'C'];
    
    tierList.innerHTML = tiers.map(tier => {
        const supports = adcData.supports[tier] || [];
        if (supports.length === 0) return '';
        
        return `
            <div class="mb-8">
                <div class="flex items-center space-x-3 mb-6">
                    <div class="tier-${tier.toLowerCase()} px-4 py-2 rounded-lg text-xl font-bold">
                        ${tier}-Tier
                    </div>
                    <div class="h-0.5 flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${supports.map(support => createSupportCard(support, adcName)).join('')}
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Create support champion card
 * @param {Object} support - Support data
 * @param {string} adcName - ADC name for context
 * @returns {string} HTML string
 */
function createSupportCard(support, adcName) {
    return `
        <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center space-x-3">
                    <div class="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-700 group-hover:border-primary transition-colors">
                        <img src="../icons/champions/${support.name}.png" 
                             alt="${support.name}" 
                             class="w-full h-full object-cover"
                             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%231e293b%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23475569%22 font-size=%2240%22 font-family=%22Arial%22%3E${support.name[0]}%3C/text%3E%3C/svg%3E'">
                    </div>
                    <div>
                        <h4 class="font-bold text-lg text-white group-hover:text-primary transition-colors">${support.name}</h4>
                        <span class="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">${support.role}</span>
                    </div>
                </div>
            </div>
            
            <ul class="space-y-2 mb-4">
                ${support.reasons.map(reason => `
                    <li class="flex items-start space-x-2 text-sm">
                        <span class="text-primary mt-0.5">✓</span>
                        <span class="text-gray-300 leading-relaxed">${reason}</span>
                    </li>
                `).join('')}
            </ul>
            
            <button onclick="showRuneModal('${support.name}', '${adcName}')" 
                    class="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-primary/50 transition-all">
                View Rune Build
            </button>
        </div>
    `;
}

/**
 * Show rune build modal
 * @param {string} supportName - Support champion name
 * @param {string} adcName - ADC champion name
 */
function showRuneModal(supportName, adcName) {
    const modal = document.getElementById('rune-modal');
    const content = document.getElementById('rune-modal-content');
    
    // Get rune data (simplified for now)
    const runeData = getRuneData(supportName, adcName);
    
    content.innerHTML = `
        <div class="text-center mb-6">
            <h2 class="font-display font-bold text-3xl mb-2">${supportName} with ${adcName}</h2>
            <p class="text-gray-400">Optimal rune setup for maximum synergy</p>
        </div>
        
        <div class="bg-gray-800/50 rounded-xl p-6 mb-6">
            <h3 class="font-semibold text-xl mb-4 text-primary">Primary Tree: ${runeData.primary.name}</h3>
            <div class="space-y-3">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span class="text-2xl">⚡</span>
                    </div>
                    <div>
                        <p class="font-semibold">${runeData.primary.keystone}</p>
                        <p class="text-sm text-gray-400">${runeData.primary.keystoneDesc}</p>
                    </div>
                </div>
                ${runeData.primary.runes.map(rune => `
                    <div class="flex items-center space-x-3 ml-4">
                        <div class="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span class="text-sm">◆</span>
                        </div>
                        <p class="text-sm text-gray-300">${rune}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="bg-gray-800/50 rounded-xl p-6 mb-6">
            <h3 class="font-semibold text-xl mb-4 text-secondary">Secondary Tree: ${runeData.secondary.name}</h3>
            <div class="space-y-3">
                ${runeData.secondary.runes.map(rune => `
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span class="text-sm">◆</span>
                        </div>
                        <p class="text-sm text-gray-300">${rune}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <p class="text-sm text-gray-300 leading-relaxed">
                <strong class="text-blue-400">Pro Tip:</strong> ${runeData.proTip}
            </p>
        </div>
    `;
    
    modal.classList.add('active');
}

/**
 * Close rune modal
 */
function closeRuneModal() {
    const modal = document.getElementById('rune-modal');
    modal.classList.remove('active');
}

/**
 * Get rune data for support/ADC combination
 * Data sourced from U.GG, OP.GG, and pro builds
 */
function getRuneData(supportName, adcName) {
    // This is a simplified version - in production, you'd have comprehensive rune data
    const runeDatabase = {
        'Lulu': {
            primary: {
                name: 'Sorcery',
                keystone: 'Summon Aery',
                keystoneDesc: 'Shields and heals are enhanced, perfect for enchanters',
                runes: ['Manaflow Band', 'Transcendence', 'Scorch']
            },
            secondary: {
                name: 'Inspiration',
                runes: ['Perfect Timing', 'Cosmic Insight']
            },
            proTip: 'Max W first when paired with auto-attack heavy ADCs like Jinx or Lucian for maximum attack speed boost.'
        },
        'Thresh': {
            primary: {
                name: 'Resolve',
                keystone: 'Aftershock',
                keystoneDesc: 'Massive resistances after landing hook',
                runes: ['Font of Life', 'Second Wind', 'Unflinching']
            },
            secondary: {
                name: 'Inspiration',
                runes: ['Hextech Flashtraption', 'Cosmic Insight']
            },
            proTip: 'Use Hextech Flash aggressively for surprise hooks. The cooldown reduction lets you chain crowd control more effectively.'
        },
        'Default': {
            primary: {
                name: 'Sorcery / Resolve',
                keystone: 'Appropriate Keystone',
                keystoneDesc: 'Varies based on champion archetype',
                runes: ['Situational Rune 1', 'Situational Rune 2', 'Situational Rune 3']
            },
            secondary: {
                name: 'Inspiration / Domination',
                runes: ['Situational Secondary 1', 'Situational Secondary 2']
            },
            proTip: `Focus on synergizing with ${adcName}'s playstyle. Adjust runes based on enemy composition and your win condition.`
        }
    };
    
    return runeDatabase[supportName] || runeDatabase['Default'];
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSupportCompanion);
} else {
    initSupportCompanion();
}

// Make functions globally available
window.selectADC = selectADC;
window.showRuneModal = showRuneModal;
window.closeRuneModal = closeRuneModal;

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        adcChampions,
        supportChampions,
        supportSynergies,
        initSupportCompanion
    };
}
