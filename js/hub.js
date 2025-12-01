import { patchData, metaPicks } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    renderPatchNotes();
    renderMetaTabs(); // Setup tabs
    renderMetaList('top'); // Default view
});

// Render Patch Notes
function renderPatchNotes() {
    const container = document.getElementById('patch-container');
    
    patchData.forEach(item => {
        let colorClass = '';
        let icon = '';
        
        if (item.type === 'nerf') { colorClass = 'text-red-400'; icon = 'fa-arrow-down'; }
        else if (item.type === 'buff') { colorClass = 'text-green-400'; icon = 'fa-arrow-up'; }
        else { colorClass = 'text-yellow-400'; icon = 'fa-wrench'; }

        const html = `
            <div class="flex items-start space-x-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <img src="icons/champions/${item.name}.png" alt="${item.name}" 
                     class="w-10 h-10 rounded border border-gray-600 object-cover bg-gray-900" 
                     onerror="this.src='https://via.placeholder.com/40'">
                <div>
                    <div class="font-bold text-sm text-gray-200 flex items-center">
                        ${item.name} 
                        <span class="ml-2 text-xs uppercase border border-white/10 px-1 rounded ${colorClass}">
                            <i class="fa-solid ${icon} mr-1"></i>${item.type}
                        </span>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">${item.change}</p>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

// Render Meta Tabs (Roles)
function renderMetaTabs() {
    const roles = ['top', 'jungle', 'mid', 'adc', 'support'];
    const container = document.getElementById('meta-tabs');
    
    roles.forEach(role => {
        const btn = document.createElement('button');
        btn.className = `px-4 py-2 rounded-full text-sm font-bold capitalize transition-colors
                         ${role === 'top' ? 'bg-lol-blue text-black' : 'bg-slate-800 text-gray-400 hover:text-white'}`;
        btn.innerText = role;
        
        // Add click event to switch tabs
        btn.addEventListener('click', (e) => {
            // Reset all buttons
            Array.from(container.children).forEach(b => {
                b.className = 'px-4 py-2 rounded-full text-sm font-bold capitalize transition-colors bg-slate-800 text-gray-400 hover:text-white';
            });
            // Activate this button
            e.target.className = 'px-4 py-2 rounded-full text-sm font-bold capitalize transition-colors bg-lol-blue text-black';
            renderMetaList(role);
        });

        container.appendChild(btn);
    });
}

// Render Top 3 Table
function renderMetaList(role) {
    const container = document.getElementById('meta-container');
    container.innerHTML = ''; // Clear current
    
    const champions = metaPicks[role];
    
    champions.forEach((champ, index) => {
        const html = `
            <div class="grid grid-cols-5 items-center p-3 bg-slate-800/40 rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-colors fade-in" style="animation-delay: ${index * 100}ms">
                <div class="col-span-2 flex items-center space-x-3">
                    <span class="text-lg font-bold text-gray-500 w-4">#${index + 1}</span>
                    <img src="icons/champions/${champ.name}.png" class="w-8 h-8 rounded-full border border-lol-gold" onerror="this.src='https://via.placeholder.com/32'">
                    <span class="font-bold text-gray-200">${champ.name}</span>
                </div>
                <div class="text-center text-sm font-mono text-green-400">${champ.win}</div>
                <div class="text-center text-sm font-mono text-gray-400">${champ.pick}</div>
                <div class="text-center text-sm font-mono text-red-400">${champ.ban}</div>
            </div>
        `;
        container.innerHTML += html;
    });
}