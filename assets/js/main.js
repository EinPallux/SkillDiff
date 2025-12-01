/**
 * Main Application Logic for LeagueComps
 * Handles dynamic rendering, search, and interactions for all lane pages.
 */

// Global State
let currentLane = null;
let currentChampion = null;

/**
 * Initializes the page logic for a specific lane.
 * @param {string} lane - The key corresponding to data in LEAGUE_DATA (e.g., 'toplane', 'midlane', 'support')
 */
function renderLanePage(lane) {
    currentLane = lane;
    const laneData = LEAGUE_DATA[lane];

    if (!laneData) {
        console.error(`No data found for lane: ${lane}`);
        return;
    }

    // 1. Render the Champion Grid
    const gridContainer = document.getElementById('championGrid');
    const searchInput = document.getElementById('championSearch');
    
    // Determine which list to use (Support page uses 'adcs', others use 'champions' or 'midlaners'/'toplaners')
    // We standardized LEAGUE_DATA keys in data.js to 'champions' for top/mid and 'adcs' for support.
    // Let's normalize this access.
    let championList = laneData.champions || laneData.adcs || laneData.midlaners || laneData.toplaners;

    if (!championList) {
        console.error("Could not find champion list in data.");
        return;
    }

    // Clear existing content
    gridContainer.innerHTML = '';

    championList.forEach(champ => {
        const card = createChampionCard(champ);
        gridContainer.appendChild(card);
    });

    // 2. Setup Search Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.champion-card').forEach(card => {
                const name = card.dataset.name;
                if (name.includes(term)) {
                    card.classList.remove('hidden');
                    // Add a tiny fade-in animation for filtered items
                    card.classList.add('animate-fade-in');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('animate-fade-in');
                }
            });
        });
    }
}

/**
 * Creates the HTML for a single champion selection card.
 */
function createChampionCard(champion) {
    const div = document.createElement('div');
    div.className = 'champion-card group relative aspect-square bg-lol-darker border border-slate-700 rounded-xl overflow-hidden cursor-pointer hover:border-lol-gold transition-all duration-300 hover:shadow-[0_0_15px_rgba(200,170,110,0.3)] hover:-translate-y-1';
    div.dataset.name = champion.name.toLowerCase();
    
    div.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <img src="${champion.icon}" alt="${champion.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy">
        <div class="absolute bottom-0 left-0 right-0 p-2 z-20 text-center">
            <span class="text-sm font-bold text-slate-300 group-hover:text-white tracking-wide transition-colors">${champion.name}</span>
        </div>
    `;

    div.addEventListener('click', () => selectChampion(champion));
    return div;
}

/**
 * Handles the logic when a champion is clicked.
 */
function selectChampion(champion) {
    currentChampion = champion;
    const laneData = LEAGUE_DATA[currentLane];
    const resultsSection = document.getElementById('resultsSection');
    const nameSpan = document.getElementById('selectedChampionName');
    const strategyText = document.getElementById('strategyText');
    const tierContainer = document.getElementById('tierContainer');

    // 1. Update UI Text
    if (nameSpan) nameSpan.textContent = champion.name;

    // 2. Update Strategy
    // Check for strategies object, handle different naming conventions from data.js consistency
    const strategies = laneData.counterStrategies || laneData.strategies || laneData.recommendations;
    
    if (strategyText) {
        if (strategies && strategies[champion.name]) {
            strategyText.innerHTML = strategies[champion.name];
        } else {
            strategyText.textContent = "No specific strategy available for this champion yet.";
        }
    }

    // 3. Render Tiers (Counters or Synergies)
    if (tierContainer) {
        tierContainer.innerHTML = '';
        const dataMap = laneData.counters || laneData.synergies;
        const champData = dataMap[champion.name];

        if (champData) {
            // Render S, A, B, C, D tiers
            ['tierS', 'tierA', 'tierB', 'tierC', 'tierD'].forEach(tierKey => {
                if (champData[tierKey] && champData[tierKey].length > 0) {
                    const tierRow = createTierRow(tierKey, champData[tierKey]);
                    tierContainer.appendChild(tierRow);
                }
            });
        } else {
            tierContainer.innerHTML = `<div class="p-6 text-center text-slate-500">No data available for ${champion.name} yet.</div>`;
        }
    }

    // 4. Show Results with Smooth Scroll
    resultsSection.classList.remove('hidden');
    
    // Add animation class to restart animation
    resultsSection.classList.remove('animate-fade-in-up');
    void resultsSection.offsetWidth; // Trigger reflow
    resultsSection.classList.add('animate-fade-in-up');

    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

/**
 * Creates a tier row (e.g., "S Tier" header + list of champions).
 */
function createTierRow(tierKey, champions) {
    const tierConfig = {
        tierS: { label: 'S Tier', color: 'text-tier-s', border: 'border-tier-s', bg: 'bg-tier-s/10' },
        tierA: { label: 'A Tier', color: 'text-tier-a', border: 'border-tier-a', bg: 'bg-tier-a/10' },
        tierB: { label: 'B Tier', color: 'text-tier-b', border: 'border-tier-b', bg: 'bg-tier-b/10' },
        tierC: { label: 'C Tier', color: 'text-tier-c', border: 'border-tier-c', bg: 'bg-tier-c/10' },
        tierD: { label: 'D Tier', color: 'text-tier-d', border: 'border-tier-d', bg: 'bg-tier-d/10' },
    };

    const config = tierConfig[tierKey];
    const section = document.createElement('div');
    section.className = 'space-y-3';

    // Header
    section.innerHTML = `
        <div class="flex items-center gap-3 border-b border-slate-700/50 pb-2">
            <span class="px-3 py-1 rounded text-sm font-bold tracking-wider ${config.bg} ${config.color} border ${config.border}">
                ${config.label}
            </span>
            <div class="h-px bg-gradient-to-r from-${config.border}/50 to-transparent flex-grow"></div>
        </div>
    `;

    // Grid of Results
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';

    champions.forEach(champ => {
        grid.appendChild(createResultCard(champ));
    });

    section.appendChild(grid);
    return section;
}

/**
 * Creates a detailed card for a result (Counter/Synergy).
 */
function createResultCard(champ) {
    const card = document.createElement('div');
    card.className = 'bg-lol-darker border border-slate-800 rounded-lg p-4 flex gap-4 hover:border-slate-600 transition-colors group';
    
    // Determine icon path - Use standardized path from data.js or fallback
    const iconPath = champ.icon ? champ.icon : `icons/champions/${champ.name}.png`;

    // Generate reasons list
    const reasonsHtml = champ.reasons 
        ? `<ul class="text-xs text-slate-400 space-y-1 mt-1 list-disc list-inside">
            ${champ.reasons.map(r => `<li>${r}</li>`).join('')}
           </ul>`
        : '';

    card.innerHTML = `
        <div class="shrink-0">
            <img src="${iconPath}" alt="${champ.name}" class="w-14 h-14 rounded border border-slate-700 shadow-sm object-cover">
        </div>
        <div class="flex-grow min-w-0">
            <div class="flex justify-between items-start">
                <h4 class="text-white font-bold text-sm group-hover:text-lol-gold transition-colors">${champ.name}</h4>
                <span class="text-[10px] uppercase font-bold text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">${champ.role || 'Pick'}</span>
            </div>
            ${reasonsHtml}
        </div>
    `;

    return card;
}

// Animation Helper Classes (Add to Tailwind config or style tag if needed, 
// but standard Tailwind animate-pulse etc are good. I'll add custom ones via style tag in HTML)
// "animate-fade-in-up" is referenced in selectChampion.