const URL_BACKEND = 'https://back-1-95om.onrender.com';

document.addEventListener('DOMContentLoaded', () => {
  let socket = null;
  let msgCount = 0;

  // DOM refs
  const chatBox       = document.getElementById('chat-box');
  const messageInput  = document.getElementById('message-input');
  const sendButton    = document.getElementById('send-button');
  const iniciarBtn    = document.getElementById('iniciarBtn');
  const encerrarBtn   = document.getElementById('encerrarBtn');
  const limparBtn     = document.getElementById('limparBtn');
  const statusDot     = document.getElementById('status-dot');
  const statusLabel   = document.getElementById('status-label');
  const topbarStatus  = document.getElementById('topbar-status');
  const typingWrap    = document.getElementById('typing-wrap');
  const msgCountEl    = document.getElementById('msg-count');
  const welcomeScreen = document.getElementById('welcome-screen');

  // Chips de sugestão
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (socket && socket.connected) {
        messageInput.value = prompt;
        sendMessageToServer();
      } else {
        addStatus('Inicie uma sessão primeiro para usar as sugestões.', 'warn');
      }
    });
  });

  // ── Helpers ──────────────────────────────────────────────
  function setStatus(online) {
    if (online) {
      statusDot.className = 'status-dot status-dot--online';
      statusLabel.textContent = 'Conectado';
      topbarStatus.textContent = 'Online · sessão ativa';
    } else {
      statusDot.className = 'status-dot status-dot--offline';
      statusLabel.textContent = 'Desconectado';
      topbarStatus.textContent = 'Aguardando conexão...';
    }
  }

  function setChatEnabled(enabled) {
    messageInput.disabled = !enabled;
    sendButton.disabled   = !enabled;
    if (enabled) messageInput.focus();
  }

  function incrementCount() {
    msgCount++;
    msgCountEl.textContent = msgCount;
  }

  function removeWelcome() {
    if (welcomeScreen) welcomeScreen.remove();
  }

  function showTyping(show) {
    typingWrap.style.display = show ? 'flex' : 'none';
  }

  function addStatus(text, type = 'info') {
    removeWelcome();
    const row = document.createElement('div');
    row.className = 'message-row message-row--status';
    const bubble = document.createElement('div');
    bubble.className = type === 'error'
      ? 'msg-bubble msg-bubble--error'
      : 'msg-bubble msg-bubble--status';
    bubble.textContent = text;
    row.appendChild(bubble);
    chatBox.appendChild(row);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function addMessage(sender, text) {
    removeWelcome();
    incrementCount();

    const isUser = sender.toLowerCase() === 'user';
    const row    = document.createElement('div');
    row.className = `message-row message-row--${isUser ? 'user' : 'bot'}`;

    // Avatar
    const avatar = document.createElement('div');
    avatar.className = `msg-avatar msg-avatar--${isUser ? 'user' : 'bot'}`;
    avatar.textContent = isUser ? 'EU' : 'AI';

    // Bubble
    const bubble = document.createElement('div');
    bubble.className = `msg-bubble msg-bubble--${isUser ? 'user' : 'bot'}`;

    if (isUser) {
      bubble.textContent = text;
    } else {
      // Renderiza Markdown para o bot
      bubble.innerHTML = marked.parse(text);
    }

    if (isUser) {
      row.appendChild(bubble);
      row.appendChild(avatar);
    } else {
      row.appendChild(avatar);
      row.appendChild(bubble);
    }

    chatBox.appendChild(row);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Auto-resize textarea
  messageInput.addEventListener('input', () => {
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 140) + 'px';
  });

  // ── Conexão ──────────────────────────────────────────────
  function iniciarConversa() {
    if (socket && socket.connected) return;

    addStatus('⟳  Conectando ao servidor...', 'info');

    socket = io(URL_BACKEND);

    socket.on('connect', () => {
      setStatus(true);
      setChatEnabled(true);
      addStatus('✓  Sessão iniciada. Pode começar a conversar!', 'info');
    });

    socket.on('disconnect', () => {
      setStatus(false);
      setChatEnabled(false);
      showTyping(false);
      addStatus('Conexão encerrada.', 'info');
    });

    socket.on('status_conexao', (data) => {
      // session_id recebido (guardado internamente pelo servidor)
    });

    socket.on('nova_mensagem', (data) => {
      showTyping(false);
      addMessage(data.remetente, data.texto);
    });

    socket.on('erro', (data) => {
      showTyping(false);
      addStatus('⚠  ' + data.erro, 'error');
    });
  }

  function encerrarConversa() {
    if (socket && socket.connected) {
      socket.disconnect();
      setChatEnabled(false);
    }
  }

  function limparTela() {
    chatBox.innerHTML = '';
    msgCount = 0;
    msgCountEl.textContent = '0';
    addStatus('Conversa limpa.', 'info');
  }

  function sendMessageToServer() {
    const text = messageInput.value.trim();
    if (!text) return;

    if (!socket || !socket.connected) {
      addStatus('⚠  Não conectado. Inicie uma sessão primeiro.', 'error');
      return;
    }

    addMessage('user', text);
    socket.emit('enviar_mensagem', { mensagem: text });
    messageInput.value = '';
    messageInput.style.height = 'auto';
    showTyping(true);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // ── Eventos ───────────────────────────────────────────────
  iniciarBtn.addEventListener('click', iniciarConversa);
  encerrarBtn.addEventListener('click', encerrarConversa);
  limparBtn.addEventListener('click', limparTela);
  sendButton.addEventListener('click', sendMessageToServer);

  messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessageToServer();
    }
  });

  // Estado inicial
  setChatEnabled(false);
  setStatus(false);
});