import { adcList, supportSynergies } from './data.js';

// DOM Elements
const searchInput = document.getElementById('adc-search');
const adcGrid = document.getElementById('adc-grid');
const searchSection = document.getElementById('search-section');
const resultsSection = document.getElementById('results-section');
const selectedAdcImg = document.getElementById('selected-adc-img');
const selectedAdcName = document.getElementById('selected-adc-name');
const generalTip = document.getElementById('general-tip');
const tierListContainer = document.getElementById('tier-list-container');
const runeModal = document.getElementById('rune-modal');

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderAdcGrid(adcList);
});

// Search Filter
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = adcList.filter(name => name.toLowerCase().includes(term));
    renderAdcGrid(filtered);
});

// Render the Grid of ADCs
function renderAdcGrid(list) {
    adcGrid.innerHTML = '';
    list.forEach(name => {
        const div = document.createElement('div');
        div.className = 'champ-img-container cursor-pointer bg-slate-800 rounded-lg p-2 hover:bg-slate-700 border border-transparent hover:border-lol-gold transition-all';
        div.onclick = () => selectAdc(name);
        
        div.innerHTML = `
            <img src="icons/champions/${name}.png" class="champ-img w-full rounded mb-2 bg-black aspect-square object-cover" onerror="this.src='https://via.placeholder.com/80?text=${name}'">
            <div class="text-center text-xs font-bold text-gray-300">${name}</div>
        `;
        adcGrid.appendChild(div);
    });
}

// Select Logic
window.selectAdc = (adcName) => {
    // 1. Check if we have data (for this demo, we check if key exists)
    if (!supportSynergies[adcName]) {
        alert(`Demo Data missing for ${adcName}. Please try Ezreal or Kai'Sa!`);
        return;
    }

    const data = supportSynergies[adcName];

    // 2. Hide search, Show results
    searchSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    // 3. Populate Header
    selectedAdcName.innerText = adcName;
    selectedAdcImg.src = `icons/champions/${adcName}.png`;
    selectedAdcImg.onerror = function() { this.src = 'https://via.placeholder.com/64'; }; // fallback
    generalTip.innerText = data.tip;

    // 4. Render Tiers
    renderTiers(data);
};

// Reset Logic
window.resetTool = () => {
    searchSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    searchInput.value = '';
    renderAdcGrid(adcList);
};

function renderTiers(data) {
    tierListContainer.innerHTML = '';
    const tiers = ['S', 'A', 'B', 'C'];
    const colors = { S: 'text-tier-s border-tier-s', A: 'text-tier-a border-tier-a', B: 'text-tier-b border-tier-b', C: 'text-tier-c border-tier-c' };

    tiers.forEach(tier => {
        if (!data[tier]) return; // Skip if empty

        const section = document.createElement('div');
        section.className = 'bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700';

        // Tier Header
        section.innerHTML = `
            <div class="px-6 py-3 bg-slate-900/80 border-l-4 ${colors[tier]} flex items-center">
                <span class="text-2xl font-display font-bold mr-4 w-8">${tier}</span>
                <span class="text-xs uppercase text-gray-500 font-bold tracking-wider">Tier</span>
            </div>
        `;

        // List of Champions in this Tier
        const listDiv = document.createElement('div');
        listDiv.className = 'divide-y divide-gray-700';

        data[tier].forEach(champ => {
            const row = document.createElement('div');
            row.className = 'p-4 flex flex-col md:flex-row items-start md:items-center gap-4 hover:bg-slate-700/30 transition-colors cursor-pointer group';
            // Click to open rune modal
            row.onclick = () => openRuneModal(champ);

            // Role Badge Logic
            let roleBadge = 'bg-gray-700';
            if(champ.role.includes('Enchanter')) roleBadge = 'bg-purple-900/50 text-purple-300 border-purple-500/30';
            if(champ.role.includes('Engage')) roleBadge = 'bg-orange-900/50 text-orange-300 border-orange-500/30';
            if(champ.role.includes('Mage')) roleBadge = 'bg-blue-900/50 text-blue-300 border-blue-500/30';

            row.innerHTML = `
                <div class="flex items-center min-w-[150px]">
                    <img src="icons/champions/${champ.name}.png" class="w-10 h-10 rounded border border-gray-600 group-hover:border-lol-gold transition-colors" onerror="this.src='https://via.placeholder.com/40'">
                    <div class="ml-3">
                        <div class="font-bold text-gray-200 group-hover:text-lol-gold">${champ.name}</div>
                        <div class="text-[10px] uppercase px-2 py-0.5 rounded border ${roleBadge} inline-block mt-1">${champ.role}</div>
                    </div>
                </div>

                <div class="flex-1 text-sm text-gray-400">
                    <ul class="list-disc list-inside">
                        <li>${champ.reason}</li>
                    </ul>
                </div>

                <div class="hidden md:block text-xs text-gray-600 group-hover:text-lol-blue">
                    View Runes <i class="fa-solid fa-chevron-right ml-1"></i>
                </div>
            `;
            listDiv.appendChild(row);
        });

        section.appendChild(listDiv);
        tierListContainer.appendChild(section);
    });
}

// Modal Logic
window.openRuneModal = (champData) => {
    document.getElementById('modal-title').innerText = `${champData.name} Build`;
    document.getElementById('modal-rune-name').innerText = champData.rune;
    
    // Attempt to load rune image (Simulated path)
    const img = document.getElementById('modal-rune-img');
    img.src = `icons/runes/${champData.rune.replace(/\s+/g, '')}.png`; 
    img.onerror = function() { this.src = 'https://via.placeholder.com/80?text=Rune'; };

    runeModal.classList.remove('hidden');
    runeModal.classList.add('flex');
};

window.closeModal = () => {
    runeModal.classList.add('hidden');
    runeModal.classList.remove('flex');
};

// Close on outside click
runeModal.addEventListener('click', (e) => {
    if (e.target === runeModal) closeModal();
});