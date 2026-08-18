// ===== PRODUTOS DATA =====
const produtos = [
    {
        id: 1,
        nome: "Whey Protein Isolado",
        categoria: "proteinas",
        descricao: "25g de proteína isolada por dose. Absorção rápida e baixa lactose.",
        preco: 189.90,
        precoAntigo: 229.90,
        icone: "fa-flask",
        badge: "Mais Vendido"
    },
    {
        id: 2,
        nome: "Creatina Monohidratada",
        categoria: "creatina",
        descricao: "300g de creatina pura. Aumenta força e performance nos treinos.",
        preco: 79.90,
        precoAntigo: null,
        icone: "fa-dumbbell",
        badge: null
    },
    {
        id: 3,
        nome: "Pré-Treino Explosive",
        categoria: "pre-treino",
        descricao: "Fórmula com cafeína, beta-alanina e citrulina. Energia máxima.",
        preco: 119.90,
        precoAntigo: 149.90,
        icone: "fa-bolt",
        badge: "Promoção"
    },
    {
        id: 4,
        nome: "BCAA 2:1:1",
        categoria: "aminoacidos",
        descricao: "Aminoácidos essenciais para recuperação muscular e anti-catabolismo.",
        preco: 89.90,
        precoAntigo: null,
        icone: "fa-capsules",
        badge: null
    },
    {
        id: 5,
        nome: "Multivitamínico Complete",
        categoria: "vitaminas",
        descricao: "Complexo completo de vitaminas e minerais para atletas.",
        preco: 59.90,
        precoAntigo: null,
        icone: "fa-pills",
        badge: "Novo"
    },
    {
        id: 6,
        nome: "Whey Concentrado",
        categoria: "proteinas",
        descricao: "Proteína de alto valor biológico. Ideal custo-benefício.",
        preco: 129.90,
        precoAntigo: 159.90,
        icone: "fa-flask",
        badge: null
    },
    {
        id: 7,
        nome: "Creatina Creapure®",
        categoria: "creatina",
        descricao: "Creatina alemã de pureza superior. Resultados comprovados.",
        preco: 149.90,
        precoAntigo: null,
        icone: "fa-dumbbell",
        badge: "Premium"
    },
    {
        id: 8,
        nome: "Glutamina Pure",
        categoria: "aminoacidos",
        descricao: "Recuperação muscular e fortalecimento do sistema imunológico.",
        preco: 69.90,
        precoAntigo: null,
        icone: "fa-capsules",
        badge: null
    },
    {
        id: 9,
        nome: "Ômega 3 Fish Oil",
        categoria: "vitaminas",
        descricao: "Ácidos graxos essenciais para saúde cardiovascular e articulações.",
        preco: 49.90,
        precoAntigo: 64.90,
        icone: "fa-pills",
        badge: "Promoção"
    },
    {
        id: 10,
        nome: "Pré-Treino Night",
        categoria: "pre-treino",
        descricao: "Fórmula sem cafeína. Ideal para treinos noturnos.",
        preco: 99.90,
        precoAntigo: null,
        icone: "fa-moon",
        badge: "Novo"
    },
    {
        id: 11,
        nome: "Albumina Pura",
        categoria: "proteinas",
        descricao: "Proteína de absorção lenta. Perfeita para antes de dormir.",
        preco: 54.90,
        precoAntigo: null,
        icone: "fa-egg",
        badge: null
    },
    {
        id: 12,
        nome: "Vitamina D3 + K2",
        categoria: "vitaminas",
        descricao: "Suporte ósseo, imunidade e performance hormonal.",
        preco: 39.90,
        precoAntigo: null,
        icone: "fa-sun",
        badge: null
    }
];

// ===== RENDER PRODUTOS =====
function formatPrice(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderProdutos(filter = 'all') {
    const grid = document.getElementById('produtos-grid');
    const filtered = filter === 'all' 
        ? produtos 
        : produtos.filter(p => p.categoria === filter);

    grid.innerHTML = filtered.map(produto => `
        <div class="produto-card" data-categoria="${produto.categoria}">
            ${produto.badge ? `<span class="produto-badge ${produto.badge === 'Novo' ? 'novo' : ''}">${produto.badge}</span>` : ''}
            <div class="produto-img">
                <i class="fas ${produto.icone}"></i>
            </div>
            <div class="produto-info">
                <span class="produto-categoria">${produto.categoria.replace('-', ' ')}</span>
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="produto-footer">
                    <div class="produto-preco">
                        ${produto.precoAntigo ? `<small>${formatPrice(produto.precoAntigo)}</small>` : ''}
                        ${formatPrice(produto.preco)}
                    </div>
                    <button class="produto-btn" aria-label="Ver detalhes" onclick="alert('Visite nossa loja física ou fale conosco no WhatsApp para comprar!')">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== FILTER BUTTONS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProdutos(btn.dataset.filter);
    });
});

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderProdutos();
});
