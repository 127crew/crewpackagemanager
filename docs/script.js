function copyInstall() {
    navigator.clipboard.writeText("pip install crew-cli");
    const btn = document.querySelector('.primary-btn .cmd');
    const originalText = btn.innerText;

    btn.innerText = "Copied!";
    setTimeout(() => {
        btn.innerText = originalText;
    }, 2000);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        });
    });
});

// Library Data (Mock Registry)
const libraries = [
    { name: "nlohmann/json", url: "https://github.com/nlohmann/json.git", desc: "JSON for Modern C++ (Default for C++)", type: "cpp", default: true },
    { name: "nothings/stb", url: "https://github.com/nothings/stb.git", desc: "Single-file public domain libraries (Default for C)", type: "c", default: true },
    { name: "fmtlib/fmt", url: "https://github.com/fmtlib/fmt.git", desc: "A modern formatting library", type: "cpp" },
    { name: "gabime/spdlog", url: "https://github.com/gabime/spdlog.git", desc: "Fast C++ logging library", type: "cpp" },
    { name: "catchorg/Catch2", url: "https://github.com/catchorg/Catch2.git", desc: "A modern, C++-native, test framework", type: "cpp" },
    { name: "raysan5/raylib", url: "https://github.com/raysan5/raylib.git", desc: "A simple and easy-to-use library to enjoy videogames programming", type: "c" },
    { name: "ocornut/imgui", url: "https://github.com/ocornut/imgui.git", desc: "Dear ImGui: Bloat-free Immediate Mode Graphical User interface", type: "cpp" },
    { name: "google/googletest", url: "https://github.com/google/googletest.git", desc: "Google Testing and Mocking Framework", type: "cpp" },
    { name: "libsdl-org/SDL", url: "https://github.com/libsdl-org/SDL.git", desc: "Simple DirectMedia Layer", type: "c" }
];

function renderLibraries(libs) {
    const startList = document.getElementById('library-list');
    if (!startList) return; // Not on libraries page

    startList.innerHTML = libs.map(lib => `
        <div class="card library-card ${lib.default ? 'default-card' : ''}">
            <div class="lib-header">
                <h3>${lib.name.split('/')[1]} ${lib.default ? '⭐' : ''}</h3>
                <span class="badge ${lib.type}">${lib.type.toUpperCase()}</span>
            </div>
            <p class="author">${lib.name.split('/')[0]}</p>
            <p>${lib.desc}</p>
            <div class="code-block mini-code">
                <pre>crew install ${lib.url}</pre>
                <button class="copy-btn" onclick="navigator.clipboard.writeText('crew install ${lib.url}')">📋</button>
            </div>
        </div>
    `).join('');
}

// Search Logic
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    // Initial Render
    renderLibraries(libraries);

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = libraries.filter(lib =>
            lib.name.toLowerCase().includes(term) ||
            lib.desc.toLowerCase().includes(term)
        );
        renderLibraries(filtered);
    });
}
