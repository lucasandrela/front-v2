const URL_BACKEND = 'https://back-0n5v.onrender.com';

/* ══════════════════════════════════════════════════════════
   ARTISTAS — adicione ou edite aqui
══════════════════════════════════════════════════════════════ */
const ARTISTS = [
  {
    id: 'bob-marley',
    name: 'Bob Marley',
    emoji: '🇯🇲',
    genre: 'Reggae',
    accent: '#2a9d5c',
    accentH: '#34c46e',
    glow: 'rgba(42,157,92,0.25)',
    soft: 'rgba(42,157,92,0.08)',
    quote: "Don't worry about a thing, 'cause every little thing gonna be alright.",
    chips: ['Mensagem de One Love', 'Reggae e a Jamaica', 'Filosofia de vida', 'Jah Rastafari'],
    desc: 'Músico jamaicano, poeta e mensageiro da paz e do amor.',
    persona: `Você é Bob Marley, o lendário músico jamaicano, poeta e ativista rastafári.
- Responda de forma tranquila, sábia e amorosa
- Use expressões como "irmão", "Jah", "One Love", "irie" ocasionalmente e de forma natural
- Transmita paz, esperança e espiritualidade
- Fale sobre música, reggae, justiça, liberdade e amor com paixão genuína
- Cite suas músicas quando for relevante (One Love, No Woman No Cry, Redemption Song, Buffalo Soldier)
- Seja filosófico mas acessível e caloroso
- Responda em português com algumas palavras jamaicanas
- Mantenha um tom positivo e construtivo
Você viveu entre 1945 e 1981, mas sua mensagem é eterna.`,
  },
  {
    id: 'michael-jackson',
    name: 'Michael Jackson',
    emoji: '🎤',
    genre: 'Pop · R&B',
    accent: '#c084fc',
    accentH: '#d8b4fe',
    glow: 'rgba(192,132,252,0.25)',
    soft: 'rgba(192,132,252,0.08)',
    quote: "In a world filled with hate, we must still dare to hope.",
    chips: ['Thriller e o moonwalk', 'Mensagem de Heal the World', 'Sua infância e carreira', 'O que é arte para você?'],
    desc: 'O Rei do Pop. Cantor, compositor e dançarino revolucionário.',
    persona: `Você é Michael Jackson, o Rei do Pop.
- Fale com paixão sobre música, dança e arte
- Seja carismático, emotivo e profundo
- Mencione suas músicas, álbuns e o impacto cultural que causou
- Fale sobre a importância do amor, da criança interior e da humanidade
- Referencie Thriller, Billie Jean, Beat It, Heal the World, Black or White quando relevante
- Seja gentil e emotivo, mas com a grandiosidade de uma lenda
- Responda em português
Você nasceu em 1958 e faleceu em 2009. Sua música é eterna.`,
  },
  {
    id: 'freddie-mercury',
    name: 'Freddie Mercury',
    emoji: '👑',
    genre: 'Rock · Queen',
    accent: '#f59e0b',
    accentH: '#fbbf24',
    glow: 'rgba(245,158,11,0.25)',
    soft: 'rgba(245,158,11,0.08)',
    quote: "The most important thing is to live a fabulous life. As long as it's fabulous, I don't care how long it is.",
    chips: ['Bohemian Rhapsody', 'O que é o Queen?', 'Sua visão da vida', 'Seu estilo no palco'],
    desc: 'Vocalista do Queen. Uma das maiores vozes do rock de todos os tempos.',
    persona: `Você é Freddie Mercury, o lendário vocalista do Queen.
- Seja extravagante, apaixonado, teatral e completamente sem filtros
- Fale sobre música, performance, arte e vida com intensidade máxima
- Use um tom grandioso e dramático — você é uma estrela de rock
- Mencione o Queen, Bohemian Rhapsody, We Will Rock You, Don't Stop Me Now
- Celebre a individualidade, a criatividade e a liberdade de expressão
- Seja engraçado e sagaz, com um charme irresistível
- Responda em português com toda a sua personalidade única
Você viveu entre 1946 e 1991. Sua voz é imortal.`,
  },
  {
    id: 'elvis-presley',
    name: 'Elvis Presley',
    emoji: '🕺',
    genre: 'Rock \'n\' Roll',
    accent: '#60a5fa',
    accentH: '#93c5fd',
    glow: 'rgba(96,165,250,0.25)',
    soft: 'rgba(96,165,250,0.08)',
    quote: "Truth is like the sun. You can shut it out for a time, but it ain't going away.",
    chips: ['O início do rock \'n\' roll', 'Jailhouse Rock', 'Vida em Memphis', 'Influência cultural'],
    desc: 'O Rei do Rock \'n\' Roll. Ícone americano da música e cultura pop.',
    persona: `Você é Elvis Presley, o Rei do Rock 'n' Roll.
- Fale com charme sulista americano, carismático e humilde ao mesmo tempo
- Compartilhe sua paixão pela música country, gospel, blues e rock
- Mencione Graceland, Memphis, o Sun Studio, e músicas como Jailhouse Rock, Hound Dog, Love Me Tender
- Fale sobre a importância da família, da fé e das raízes musicais
- Seja cavalheiro, cordial e cheio de humor
- Responda em português, mas com expressões americanas ocasionais
Você viveu entre 1935 e 1977. Sua influência mudou a música para sempre.`,
  },
  {
    id: 'beyonce',
    name: 'Beyoncé',
    emoji: '💫',
    genre: 'R&B · Pop',
    accent: '#fb923c',
    accentH: '#fdba74',
    glow: 'rgba(251,146,60,0.25)',
    soft: 'rgba(251,146,60,0.08)',
    quote: "Power's not given to you. You have to take it.",
    chips: ['Empoderamento feminino', 'Lemonade e o Beyhive', 'Sua jornada artística', 'Formação e o show'],
    desc: 'Rainha do pop e R&B. Artista, empresária e ícone de empoderamento.',
    persona: `Você é Beyoncé, a Rainha do R&B e Pop.
- Fale com confiança, elegância e autoridade
- Compartilhe sua visão de empoderamento feminino, arte e excelência
- Mencione álbuns como Lemonade, Dangerously in Love, Renaissance, e músicas como Crazy in Love, Halo, Formation
- Fale sobre trabalho duro, disciplina e fazer arte com propósito
- Seja inspiradora e motivadora, mas com humildade
- Responda em português
Você nasceu em 1981. Sua carreira é um exemplo de dedicação e arte.`,
  },
  {
    id: 'kurt-cobain',
    name: 'Kurt Cobain',
    emoji: '🎸',
    genre: 'Grunge · Nirvana',
    accent: '#64748b',
    accentH: '#94a3b8',
    glow: 'rgba(100,116,139,0.25)',
    soft: 'rgba(100,116,139,0.08)',
    quote: "I'd rather be hated for who I am, than loved for who I am not.",
    chips: ['Smells Like Teen Spirit', 'O movimento grunge', 'Sua visão do mundo', 'Nevermind e Bleach'],
    desc: 'Vocalista do Nirvana. Voz de uma geração e ícone do rock alternativo.',
    persona: `Você é Kurt Cobain, vocalista e guitarrista do Nirvana.
- Fale de forma direta, honesta e às vezes irônica
- Seja intelectual, sensível e desconfiante das normas sociais
- Compartilhe sua paixão pelo punk, rock alternativo e arte underground
- Mencione o Nirvana, Smells Like Teen Spirit, Nevermind, Come as You Are, In Bloom
- Critique a comercialização da arte quando relevante, mas com profundidade
- Seja autêntico e cru, nunca superficial
- Responda em português
Você viveu entre 1967 e 1994. Sua música continua ecoando décadas depois.`,
  },
];

/* ══════════════════════════════════════════════════════════
   LÓGICA DA APLICAÇÃO
══════════════════════════════════════════════════════════════ */
const URL_BACKEND_IO = URL_BACKEND;

let currentArtist = null;
let socket = null;
let msgCount = 0;

// ── DOM ──────────────────────────────────────────────────
const selectionScreen = document.getElementById('selection-screen');
const chatScreen = document.getElementById('chat-screen');
const artistsGrid = document.getElementById('artists-grid');

// Chat DOM
const chatBox = document.getElementById('chat-box');
const input = document.getElementById('message-input');
const sendBtn = document.getElementById('send-button');
const iniciarBtn = document.getElementById('iniciarBtn');
const encerrarBtn = document.getElementById('encerrarBtn');
const limparBtn = document.getElementById('limparBtn');
const statusDot = document.getElementById('status-dot');
const statusLabelEl = document.getElementById('status-label-text');
const onlineDot = document.getElementById('online-dot');
const topbarDot = document.getElementById('topbar-dot');
const topbarStatus = document.getElementById('topbar-status');
const typingWrap = document.getElementById('typing-wrap');
const msgCountEl = document.getElementById('msg-count');
const typingText = document.getElementById('typing-text');
const changeBtn = document.getElementById('changeArtistBtn');

// ── Build Selection Grid ─────────────────────────────────
function buildGrid() {
  artistsGrid.innerHTML = '';
  ARTISTS.forEach(artist => {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.style.setProperty('--card-accent', artist.accent);
    card.style.setProperty('--card-glow', `${artist.soft}`);
    card.innerHTML = `
      <div class="artist-emoji">${artist.emoji}</div>
      <div class="artist-card-name">${artist.name}</div>
      <div class="artist-card-genre">${artist.genre}</div>
      <div class="artist-card-accent" style="background:${artist.accent}"></div>
    `;
    card.addEventListener('click', () => selectArtist(artist));
    artistsGrid.appendChild(card);
  });
}

// ── Select Artist ────────────────────────────────────────
function selectArtist(artist) {
  currentArtist = artist;

  // Aplica o tema do artista nas variáveis CSS
  const root = document.documentElement;
  root.style.setProperty('--accent', artist.accent);
  root.style.setProperty('--accent-h', artist.accentH);
  root.style.setProperty('--accent-glow', artist.glow);
  root.style.setProperty('--accent-soft', artist.soft);

  // Popula sidebar
  document.getElementById('sb-avatar').textContent = artist.emoji;
  document.getElementById('sb-name').textContent = artist.name;
  document.getElementById('sb-role').textContent = artist.genre;
  document.getElementById('sb-quote-text').textContent = artist.quote;

  // Popula topbar
  document.getElementById('tb-avatar').textContent = artist.emoji;
  document.getElementById('tb-name').textContent = artist.name;

  // Popula welcome screen
  document.getElementById('wc-avatar').textContent = artist.emoji;
  document.getElementById('wc-name').textContent = artist.name;
  document.getElementById('wc-desc').textContent = artist.desc;

  // Chips de sugestão
  const chipsEl = document.getElementById('wc-chips');
  chipsEl.innerHTML = '';
  artist.chips.forEach(chip => {
    const btn = document.createElement('button');
    btn.className = 'suggestion-chip';
    btn.textContent = chip;
    btn.dataset.prompt = chip;
    chipsEl.appendChild(btn);
  });

  // Typing text
  typingText.textContent = `${artist.name} está digitando…`;

  // Troca de tela
  selectionScreen.style.display = 'none';
  chatScreen.style.display = 'flex';

  // Reseta estado do chat
  resetChat();

  // Ativa chips
  activateChips();
}

// ── Chips no chat ────────────────────────────────────────
function activateChips() {
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.dataset.prompt;
      if (socket && socket.connected) {
        input.value = prompt;
        send();
      } else {
        addStatus('Inicie uma sessão para usar as sugestões.');
      }
    });
  });
}

// ── Change Artist ────────────────────────────────────────
changeBtn.addEventListener('click', () => {
  if (socket && socket.connected) socket.disconnect();
  chatScreen.style.display = 'none';
  selectionScreen.style.display = 'flex';
  selectionScreen.style.animation = 'none';
  setTimeout(() => selectionScreen.style.animation = '', 10);
  resetChat();
});

// ── Status helpers ────────────────────────────────────────
function setOnline(online) {
  [statusDot, onlineDot].forEach(el => el.classList.toggle('is-online', online));
  topbarDot.classList.toggle('is-online', online);
  if (online) {
    statusLabelEl.textContent = 'Conectado';
    topbarStatus.textContent = 'Online · sessão ativa';
  } else {
    statusLabelEl.textContent = 'Desconectado';
    topbarStatus.textContent = 'Aguardando conexão…';
  }
}

function setEnabled(enabled) {
  input.disabled = !enabled;
  sendBtn.disabled = !enabled;
  if (enabled) input.focus();
}

function showTyping(show) {
  typingWrap.style.display = show ? 'flex' : 'none';
  if (show) chatBox.scrollTop = chatBox.scrollHeight;
}

function scrollBottom() { chatBox.scrollTop = chatBox.scrollHeight; }

// ── Welcome screen reset ─────────────────────────────────
function resetChat() {
  // Reconstroi a welcome screen no chat-box
  chatBox.innerHTML = `
    <div id="welcome-screen" class="welcome-screen">
      <div class="welcome-avatar" id="wc-avatar"></div>
      <h2 class="welcome-title" id="wc-name"></h2>
      <p class="welcome-sub" id="wc-desc"></p>
      <div class="suggestions" id="wc-chips"></div>
    </div>
  `;
  msgCount = 0;
  msgCountEl.textContent = '0';
  setOnline(false);
  setEnabled(false);
  showTyping(false);

  if (currentArtist) {
    document.getElementById('wc-avatar').textContent = currentArtist.emoji;
    document.getElementById('wc-name').textContent = currentArtist.name;
    document.getElementById('wc-desc').textContent = currentArtist.desc;
    const chipsEl = document.getElementById('wc-chips');
    chipsEl.innerHTML = '';
    currentArtist.chips.forEach(chip => {
      const btn = document.createElement('button');
      btn.className = 'suggestion-chip';
      btn.textContent = chip;
      btn.dataset.prompt = chip;
      chipsEl.appendChild(btn);
    });
    activateChips();
  }
}

// ── Messages ──────────────────────────────────────────────
function removeWelcome() {
  const w = document.getElementById('welcome-screen');
  if (w) w.remove();
}

function addStatus(text) {
  removeWelcome();
  const row = document.createElement('div');
  row.className = 'msg-row msg-row--status';
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble msg-bubble--status';
  bubble.textContent = text;
  row.appendChild(bubble);
  chatBox.appendChild(row);
  scrollBottom();
}

function addError(text) {
  removeWelcome();
  const row = document.createElement('div');
  row.className = 'msg-row msg-row--status';
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble msg-bubble--error';
  bubble.textContent = text;
  row.appendChild(bubble);
  chatBox.appendChild(row);
  scrollBottom();
}

function addMessage(sender, text) {
  removeWelcome();
  msgCount++;
  msgCountEl.textContent = msgCount;

  const isUser = sender.toLowerCase() === 'user';
  const row = document.createElement('div');
  row.className = `msg-row msg-row--${isUser ? 'user' : 'bot'}`;

  const avatar = document.createElement('div');
  avatar.className = `msg-avatar msg-avatar--${isUser ? 'user' : 'bot'}`;
  avatar.textContent = isUser ? 'EU' : (currentArtist ? currentArtist.emoji : '🤖');

  const bubble = document.createElement('div');
  bubble.className = `msg-bubble msg-bubble--${isUser ? 'user' : 'bot'}`;
  if (isUser) {
    bubble.textContent = text;
  } else {
    bubble.innerHTML = marked.parse(text);
  }

  if (isUser) { row.appendChild(bubble); row.appendChild(avatar); }
  else { row.appendChild(avatar); row.appendChild(bubble); }

  chatBox.appendChild(row);
  scrollBottom();
}

// Auto-resize textarea
input.addEventListener('input', () => {
  input.style.height = 'auto';
  input.style.height = Math.min(input.scrollHeight, 130) + 'px';
});

// ── Connection ────────────────────────────────────────────
function connect() {
  if (socket && socket.connected) return;
  addStatus('Conectando…');
  socket = io(URL_BACKEND_IO);

  socket.on('connect', () => {
    setOnline(true);
    setEnabled(true);
    addStatus(`Sessão iniciada. ${currentArtist.name} está pronto para conversar.`);
  });

  socket.on('disconnect', () => {
    setOnline(false);
    setEnabled(false);
    showTyping(false);
    addStatus('Sessão encerrada.');
  });

  socket.on('nova_mensagem', (data) => {
    showTyping(false);
    addMessage(data.remetente, data.texto);
  });

  socket.on('erro', (data) => {
    showTyping(false);
    addError('Erro: ' + data.erro);
  });
}

function disconnect() {
  if (socket && socket.connected) {
    socket.disconnect();
    setEnabled(false);
  }
}

function clear() {
  resetChat();
  if (socket && socket.connected) {
    socket.emit('limpar_conversa');
  }
  addStatus('Conversa limpa.');
}

function send() {
  const text = input.value.trim();
  if (!text) return;

  if (!socket || !socket.connected) {
    addError('Não conectado. Inicie uma sessão primeiro.');
    return;
  }

  addMessage('user', text);

  // Envia a persona do artista selecionado junto com a mensagem
  const msgWithPersona = `${currentArtist.persona}\n\nUsuário diz: ${text}`;
  socket.emit('enviar_mensagem', { mensagem: msgWithPersona });

  input.value = '';
  input.style.height = 'auto';
  showTyping(true);
}

// ── Events ────────────────────────────────────────────────
iniciarBtn.addEventListener('click', connect);
encerrarBtn.addEventListener('click', disconnect);
limparBtn.addEventListener('click', clear);
sendBtn.addEventListener('click', send);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
});

// ── Init ──────────────────────────────────────────────────
buildGrid();