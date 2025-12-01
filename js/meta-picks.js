/**
 * SkillDiff.lol - Meta Picks Module
 * Displays top 3 champions for each role with statistics
 * Data sourced from U.GG, OP.GG, Mobalytics (Patch 14.23)
 */

// Meta picks data for Patch 14.23
// Statistics are based on Platinum+ ranked games
const metaPicksData = {
    patch: '14.23',
    lastUpdated: 'November 20, 2024',
    roles: {
        top: {
            name: 'Top Lane',
            icon: 'Top.png',
            champions: [
                {
                    name: 'Ambessa',
                    tier: 'S',
                    winRate: 52.8,
                    pickRate: 12.4,
                    banRate: 28.6,
                    trend: 'up',
                    description: 'Dominant lane bully with exceptional scaling and team fight presence.'
                },
                {
                    name: 'Garen',
                    tier: 'S',
                    winRate: 52.1,
                    pickRate: 8.9,
                    banRate: 5.2,
                    trend: 'stable',
                    description: 'Simple yet effective juggernaut with strong sustain and execution power.'
                },
                {
                    name: 'Mordekaiser',
                    tier: 'S',
                    winRate: 51.6,
                    pickRate: 9.7,
                    banRate: 15.3,
                    trend: 'up',
                    description: 'Powerful duelist who can isolate and eliminate priority targets.'
                }
            ]
        },
        jungle: {
            name: 'Jungle',
            icon: 'Jungle.png',
            champions: [
                {
                    name: 'Amumu',
                    tier: 'S',
                    winRate: 52.9,
                    pickRate: 11.2,
                    banRate: 8.7,
                    trend: 'up',
                    description: 'Game-changing ultimate with consistent damage and tankiness.'
                },
                {
                    name: 'Warwick',
                    tier: 'S',
                    winRate: 52.4,
                    pickRate: 7.8,
                    banRate: 4.3,
                    trend: 'stable',
                    description: 'High sustain and strong dueling make him a solo queue menace.'
                },
                {
                    name: 'Nocturne',
                    tier: 'S',
                    winRate: 51.8,
                    pickRate: 13.5,
                    banRate: 12.1,
                    trend: 'up',
                    description: 'Excellent map pressure and assassination potential with global ultimate.'
                }
            ]
        },
        mid: {
            name: 'Mid Lane',
            icon: 'Mid.png',
            champions: [
                {
                    name: 'Aurora',
                    tier: 'S',
                    winRate: 52.3,
                    pickRate: 10.8,
                    banRate: 22.4,
                    trend: 'up',
                    description: 'High burst damage and mobility make her a priority pick.'
                },
                {
                    name: 'Syndra',
                    tier: 'S',
                    winRate: 51.9,
                    pickRate: 9.2,
                    banRate: 6.8,
                    trend: 'stable',
                    description: 'Lane dominant control mage with one-shot potential.'
                },
                {
                    name: 'Malzahar',
                    tier: 'S',
                    winRate: 51.7,
                    pickRate: 6.4,
                    banRate: 18.9,
                    trend: 'stable',
                    description: 'Safe scaling pick with reliable point-and-click crowd control.'
                }
            ]
        },
        adc: {
            name: 'ADC',
            icon: 'ADC.png',
            champions: [
                {
                    name: 'Kog\'Maw',
                    tier: 'S',
                    winRate: 52.6,
                    pickRate: 8.9,
                    banRate: 9.7,
                    trend: 'down',
                    description: 'Hypercarry with exceptional DPS in extended fights (recently nerfed).'
                },
                {
                    name: 'Jinx',
                    tier: 'S',
                    winRate: 51.8,
                    pickRate: 14.3,
                    banRate: 7.2,
                    trend: 'stable',
                    description: 'Strong teamfight carry with snowball potential and global ultimate.'
                },
                {
                    name: 'Jhin',
                    tier: 'A',
                    winRate: 51.4,
                    pickRate: 16.7,
                    banRate: 4.8,
                    trend: 'stable',
                    description: 'Versatile marksman with high burst and catch potential.'
                }
            ]
        },
        support: {
            name: 'Support',
            icon: 'Support.png',
            champions: [
                {
                    name: 'Lux',
                    tier: 'S',
                    winRate: 52.1,
                    pickRate: 13.6,
                    banRate: 11.4,
                    trend: 'up',
                    description: 'High damage poke with strong shield and pick potential.'
                },
                {
                    name: 'Xerath',
                    tier: 'S',
                    winRate: 51.9,
                    pickRate: 7.8,
                    banRate: 8.3,
                    trend: 'up',
                    description: 'Long-range artillery support who can control teamfights.'
                },
                {
                    name: 'Nami',
                    tier: 'S',
                    winRate: 51.6,
                    pickRate: 9.4,
                    banRate: 3.2,
                    trend: 'stable',
                    description: 'Versatile enchanter with strong laning and team utility.'
                }
            ]
        }
    }
};

/**
 * Initialize meta picks display
 */
function initMetaPicks() {
    const container = document.getElementById('meta-picks-container');
    if (!container) return;
    
    const roles = ['top', 'jungle', 'mid', 'adc', 'support'];
    
    container.innerHTML = roles.map(role => createRoleSection(role)).join('');
    
    // Add animation on scroll
    observeMetaCards();
}

/**
 * Create role section with top 3 champions
 * @param {string} roleKey - Role identifier
 * @returns {string} HTML string for role section
 */
function createRoleSection(roleKey) {
    const roleData = metaPicksData.roles[roleKey];
    
    return `
        <div class="meta-role-section">
            <!-- Role Header -->
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <img src="icons/roles/${roleData.icon}" 
                             alt="${roleData.name}" 
                             class="w-8 h-8"
                             onerror="this.style.display='none'">
                    </div>
                    <h3 class="font-display font-bold text-2xl text-white">${roleData.name}</h3>
                </div>
                <span class="text-sm text-gray-400">Top 3 Champions</span>
            </div>
            
            <!-- Champions Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${roleData.champions.map((champion, index) => createChampionCard(champion, index + 1)).join('')}
            </div>
        </div>
    `;
}

/**
 * Create individual champion card
 * @param {Object} champion - Champion data
 * @param {number} rank - Champion rank (1-3)
 * @returns {string} HTML string for champion card
 */
function createChampionCard(champion, rank) {
    const championImagePath = `icons/champions/${champion.name}.png`;
    const trendIcons = {
        'up': '📈',
        'down': '📉',
        'stable': '➡️'
    };
    const trendColors = {
        'up': 'text-green-400',
        'down': 'text-red-400',
        'stable': 'text-gray-400'
    };
    
    const rankBadges = {
        1: 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black',
        2: 'bg-gradient-to-br from-gray-300 to-gray-400 text-black',
        3: 'bg-gradient-to-br from-orange-600 to-yellow-700 text-white'
    };
    
    return `
        <div class="meta-champion-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
            <!-- Rank Badge -->
            <div class="absolute top-4 left-4 w-10 h-10 ${rankBadges[rank]} rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                ${rank}
            </div>
            
            <!-- Champion Image -->
            <div class="relative h-48 overflow-hidden">
                <img src="${championImagePath}" 
                     alt="${champion.name}" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%231e293b%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%22100%22 y=%22100%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23475569%22 font-size=%2260%22 font-family=%22Arial%22%3E${champion.name[0]}%3C/text%3E%3C/svg%3E'">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                <!-- Tier Badge -->
                <div class="absolute top-4 right-4 px-3 py-1 tier-${champion.tier.toLowerCase()} rounded-full text-sm font-bold shadow-lg">
                    ${champion.tier}-Tier
                </div>
            </div>
            
            <!-- Champion Info -->
            <div class="p-6">
                <h4 class="font-display font-bold text-xl mb-2 text-white group-hover:text-primary transition-colors">
                    ${champion.name}
                </h4>
                <p class="text-gray-400 text-sm mb-4 leading-relaxed">
                    ${champion.description}
                </p>
                
                <!-- Statistics -->
                <div class="space-y-3">
                    <!-- Win Rate -->
                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-sm text-gray-400">Win Rate</span>
                            <span class="text-sm font-semibold ${champion.winRate >= 52 ? 'text-green-400' : 'text-gray-300'}">
                                ${champion.winRate.toFixed(1)}%
                            </span>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-bar-fill bg-gradient-to-r from-green-500 to-green-600" 
                                 style="width: ${champion.winRate}%"></div>
                        </div>
                    </div>
                    
                    <!-- Pick Rate -->
                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-sm text-gray-400">Pick Rate</span>
                            <span class="text-sm font-semibold text-gray-300">
                                ${champion.pickRate.toFixed(1)}%
                            </span>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-bar-fill bg-gradient-to-r from-blue-500 to-blue-600" 
                                 style="width: ${Math.min(champion.pickRate * 5, 100)}%"></div>
                        </div>
                    </div>
                    
                    <!-- Ban Rate -->
                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-sm text-gray-400">Ban Rate</span>
                            <span class="text-sm font-semibold ${champion.banRate >= 20 ? 'text-red-400' : 'text-gray-300'}">
                                ${champion.banRate.toFixed(1)}%
                            </span>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-bar-fill bg-gradient-to-r from-red-500 to-red-600" 
                                 style="width: ${Math.min(champion.banRate * 3, 100)}%"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Trend Indicator -->
                <div class="mt-4 pt-4 border-t border-gray-700/50 flex items-center justify-between">
                    <span class="text-xs text-gray-500">Trend</span>
                    <span class="${trendColors[champion.trend]} text-sm font-medium flex items-center space-x-1">
                        <span>${trendIcons[champion.trend]}</span>
                        <span class="capitalize">${champion.trend}</span>
                    </span>
                </div>
            </div>
        </div>
    `;
}

/**
 * Observe meta cards for animation on scroll
 */
function observeMetaCards() {
    const sections = document.querySelectorAll('.meta-role-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate champion cards within the section
                    const cards = entry.target.querySelectorAll('.meta-champion-card');
                    cards.forEach((card, cardIndex) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, cardIndex * 150);
                    });
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        
        const cards = section.querySelectorAll('.meta-champion-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
        });
        
        observer.observe(section);
    });
}

/**
 * Get role statistics summary
 * @param {string} roleKey - Role identifier
 * @returns {Object} Statistics summary
 */
function getRoleStats(roleKey) {
    const roleData = metaPicksData.roles[roleKey];
    const avgWinRate = roleData.champions.reduce((sum, c) => sum + c.winRate, 0) / roleData.champions.length;
    const avgPickRate = roleData.champions.reduce((sum, c) => sum + c.pickRate, 0) / roleData.champions.length;
    const avgBanRate = roleData.champions.reduce((sum, c) => sum + c.banRate, 0) / roleData.champions.length;
    
    return {
        avgWinRate: avgWinRate.toFixed(1),
        avgPickRate: avgPickRate.toFixed(1),
        avgBanRate: avgBanRate.toFixed(1),
        totalChampions: roleData.champions.length
    };
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMetaPicks);
} else {
    initMetaPicks();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { metaPicksData, initMetaPicks, getRoleStats };
}
