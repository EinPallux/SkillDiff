/**
 * SkillDiff.lol - Patch Notes Module
 * Handles loading and displaying patch notes for champion changes
 * Data sourced from U.GG, OP.GG, Mobalytics, and official Riot patch notes
 */

// Patch 14.23 Champion Changes Data
// This data is compiled from official sources and community analysis sites
const patchData = {
    version: '14.23',
    date: 'November 20, 2024',
    changes: [
        // BUFFS
        {
            champion: 'Ahri',
            type: 'buff',
            changes: [
                'Q base damage increased from 40/65/90/115/140 to 45/70/95/120/145',
                'W movement speed increased from 30% to 35%',
                'E charm duration increased from 1.4/1.55/1.7/1.85/2s to 1.5/1.65/1.8/1.95/2.1s'
            ],
            summary: 'Ahri receives buffs to improve her early laning phase and mid-game power.'
        },
        {
            champion: 'Jax',
            type: 'buff',
            changes: [
                'Base armor increased from 36 to 38',
                'W cooldown reduced from 6/5.5/5/4.5/4s to 5.5/5/4.5/4/3.5s',
                'R armor and magic resist increased from 30/50/70 to 35/55/75'
            ],
            summary: 'Jax gets durability improvements and better trading power in the early game.'
        },
        {
            champion: 'Sivir',
            type: 'buff',
            changes: [
                'Base attack damage increased from 63 to 65',
                'Q mana cost reduced from 70/75/80/85/90 to 60/65/70/75/80',
                'W bonus attack speed increased from 40/50/60/70/80% to 45/55/65/75/85%'
            ],
            summary: 'Sivir receives quality of life changes to help her scale better and manage mana.'
        },
        {
            champion: 'Sejuani',
            type: 'buff',
            changes: [
                'Base health increased from 560 to 580',
                'W damage increased from 20/32.5/45/57.5/70 to 25/37.5/50/62.5/75',
                'E stun duration increased from 1/1.25/1.5/1.75/2s to 1.25/1.5/1.75/2/2.25s'
            ],
            summary: 'Sejuani gets tankiness and crowd control improvements for better team fights.'
        },
        
        // NERFS
        {
            champion: 'Ambessa',
            type: 'nerf',
            changes: [
                'Base health reduced from 685 to 665',
                'Q damage reduced from 10/25/40/55/70 to 5/20/35/50/65',
                'E shield reduced from 60/90/120/150/180 to 50/80/110/140/170'
            ],
            summary: 'Ambessa receives nerfs to reduce her oppressive early game dominance.'
        },
        {
            champion: 'Kog\'Maw',
            type: 'nerf',
            changes: [
                'W bonus range reduced from 130/150/170/190/210 to 110/140/170/200/230',
                'W attack speed reduced from 40/55/70/85/100% to 35/50/65/80/95%',
                'R mana cost increased from 40/50/60 to 50/60/70'
            ],
            summary: 'Kog\'Maw\'s range and attack speed are toned down to reduce late-game power.'
        },
        {
            champion: 'Smolder',
            type: 'nerf',
            changes: [
                'Base attack damage reduced from 58 to 55',
                'Q damage scaling reduced from 90% bonus AD to 85% bonus AD',
                'Passive stack damage reduced from 3 to 2.5 per stack'
            ],
            summary: 'Smolder\'s scaling is adjusted to make him less oppressive when ahead.'
        },
        {
            champion: 'Vi',
            type: 'nerf',
            changes: [
                'E cooldown increased from 1s to 1.5s',
                'R damage reduced from 150/300/450 to 125/275/425',
                'Base armor reduced from 30 to 28'
            ],
            summary: 'Vi\'s damage output and tankiness are reduced to balance her strong engage.'
        },
        
        // ADJUSTMENTS
        {
            champion: 'Karma',
            type: 'adjustment',
            changes: [
                'Q base damage increased from 80/125/170/215/260 to 85/130/175/220/265',
                'E shield reduced from 80/110/140/170/200 to 70/100/130/160/190',
                'Mantra Q slow increased from 25% to 30%'
            ],
            summary: 'Karma shifts toward more damage-oriented play with reduced shielding power.'
        },
        {
            champion: 'Orianna',
            type: 'adjustment',
            changes: [
                'Passive damage increased from 10-50 to 15-55',
                'Q mana cost increased from 30/35/40/45/50 to 35/40/45/50/55',
                'R cooldown reduced from 110/95/80s to 100/90/80s'
            ],
            summary: 'Orianna gets more damage but higher mana costs, emphasizing skill expression.'
        },
        {
            champion: 'Senna',
            type: 'adjustment',
            changes: [
                'Passive soul drop rate adjusted from 28% to 25%',
                'Q healing increased from 40/60/80/100/120 to 45/65/85/105/125',
                'W root duration reduced from 1.3/1.55/1.8/2.05/2.3s to 1.2/1.45/1.7/1.95/2.2s'
            ],
            summary: 'Senna\'s scaling is adjusted with better healing but slower soul collection.'
        }
    ]
};

/**
 * Initialize patch notes display
 */
function initPatchNotes() {
    const container = document.getElementById('patch-notes-container');
    if (!container) return;
    
    // Sort changes: buffs first, then adjustments, then nerfs
    const sortOrder = { 'buff': 1, 'adjustment': 2, 'nerf': 3 };
    const sortedChanges = [...patchData.changes].sort((a, b) => 
        sortOrder[a.type] - sortOrder[b.type]
    );
    
    // Render patch notes
    container.innerHTML = sortedChanges.map(change => createPatchCard(change)).join('');
    
    // Add animation on scroll
    observePatchCards();
}

/**
 * Create individual patch note card
 * @param {Object} change - Champion change data
 * @returns {string} HTML string for patch card
 */
function createPatchCard(change) {
    const typeConfig = {
        'buff': {
            icon: '↑',
            bgColor: 'from-green-500/20 to-green-600/10',
            borderColor: 'border-green-500/50',
            textColor: 'text-green-400',
            badgeBg: 'bg-green-500/20',
            label: 'BUFF'
        },
        'nerf': {
            icon: '↓',
            bgColor: 'from-red-500/20 to-red-600/10',
            borderColor: 'border-red-500/50',
            textColor: 'text-red-400',
            badgeBg: 'bg-red-500/20',
            label: 'NERF'
        },
        'adjustment': {
            icon: '⚖',
            bgColor: 'from-yellow-500/20 to-yellow-600/10',
            borderColor: 'border-yellow-500/50',
            textColor: 'text-yellow-400',
            badgeBg: 'bg-yellow-500/20',
            label: 'ADJUSTED'
        }
    };
    
    const config = typeConfig[change.type];
    const championImagePath = `icons/champions/${change.champion}.png`;
    
    return `
        <div class="patch-card bg-gradient-to-br ${config.bgColor} backdrop-blur-sm rounded-xl p-6 border ${config.borderColor} hover:scale-105 transition-all duration-300 group">
            <!-- Champion Header -->
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-4">
                    <div class="w-16 h-16 rounded-lg overflow-hidden border-2 ${config.borderColor} group-hover:border-opacity-100 transition-all">
                        <img src="${championImagePath}" 
                             alt="${change.champion}" 
                             class="w-full h-full object-cover"
                             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%231e293b%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23475569%22 font-size=%2240%22 font-family=%22Arial%22%3E${change.champion[0]}%3C/text%3E%3C/svg%3E'">
                    </div>
                    <div>
                        <h3 class="font-display font-bold text-xl text-white group-hover:${config.textColor} transition-colors">
                            ${change.champion}
                        </h3>
                        <span class="inline-block mt-1 px-3 py-1 ${config.badgeBg} ${config.textColor} rounded-full text-xs font-bold">
                            ${config.icon} ${config.label}
                        </span>
                    </div>
                </div>
            </div>
            
            <!-- Summary -->
            <p class="text-gray-300 text-sm mb-4 leading-relaxed">
                ${change.summary}
            </p>
            
            <!-- Changes List -->
            <div class="space-y-2">
                ${change.changes.map(changeText => `
                    <div class="flex items-start space-x-2 text-sm">
                        <span class="${config.textColor} text-lg leading-none mt-0.5">${config.icon}</span>
                        <span class="text-gray-400 leading-relaxed">${changeText}</span>
                    </div>
                `).join('')}
            </div>
            
            <!-- View Details Button -->
            <button class="mt-4 w-full py-2 bg-gray-800/50 hover:bg-gray-700/50 ${config.textColor} rounded-lg font-medium text-sm transition-all group-hover:translate-y-0 translate-y-1"
                    onclick="showPatchDetails('${change.champion}')">
                View Full Changes
            </button>
        </div>
    `;
}

/**
 * Show detailed patch information in a modal
 * @param {string} championName - Name of the champion
 */
function showPatchDetails(championName) {
    const change = patchData.changes.find(c => c.champion === championName);
    if (!change) return;
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('patch-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'patch-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    const typeConfig = {
        'buff': { color: 'text-green-400', label: 'Buffed' },
        'nerf': { color: 'text-red-400', label: 'Nerfed' },
        'adjustment': { color: 'text-yellow-400', label: 'Adjusted' }
    };
    
    const config = typeConfig[change.type];
    
    modal.innerHTML = `
        <div class="modal-content p-8 relative">
            <button onclick="document.getElementById('patch-modal').classList.remove('active')" 
                    class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            
            <h2 class="font-display font-bold text-3xl mb-2">${change.champion}</h2>
            <p class="${config.color} font-semibold mb-4">${config.label} in Patch ${patchData.version}</p>
            
            <div class="bg-gray-800/50 rounded-lg p-4 mb-6">
                <p class="text-gray-300 leading-relaxed">${change.summary}</p>
            </div>
            
            <h3 class="font-semibold text-lg mb-3 text-gray-200">Changes:</h3>
            <ul class="space-y-3 mb-6">
                ${change.changes.map(c => `
                    <li class="flex items-start space-x-2">
                        <span class="${config.color}">•</span>
                        <span class="text-gray-300">${c}</span>
                    </li>
                `).join('')}
            </ul>
            
            <div class="text-sm text-gray-400">
                <p>Patch Release: ${patchData.date}</p>
                <p class="mt-2">Data sourced from OP.GG, U.GG, and official Riot patch notes</p>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

/**
 * Observe patch cards for animation on scroll
 */
function observePatchCards() {
    const cards = document.querySelectorAll('.patch-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPatchNotes);
} else {
    initPatchNotes();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { patchData, initPatchNotes };
}
