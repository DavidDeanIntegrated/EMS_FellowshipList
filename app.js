// EMS Fellowship Finder — App Logic
// Renders program cards from PROGRAMS array (defined in programs.js)

(function () {
  'use strict';

  // Tier configuration
  var TIERS = {
    t1: { class: 't1', pill: 'Tier 1', title: 'Best Fit \u2014 Highest Confidence', range: '#1 \u2013 #25' },
    t2: { class: 't2', pill: 'Tier 2', title: 'Strong Fit \u2014 Good Confidence', range: '#26 \u2013 #50' },
    t3: { class: 't3', pill: 'Tier 3', title: 'Viable Fit \u2014 Worth Exploring', range: '#51 \u2013 #70' },
    t4: { class: 't4', pill: 'Tier 4', title: 'Lower Confidence Matches', range: '#71 \u2013 #85' }
  };

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderCard(p) {
    var rank = String(p.rank).padStart(2, '0');
    var location = escapeHtml(p.city + ', ' + p.state);
    var searchData = [p.name, p.city, p.state, p.description || ''].concat(p.tags || []).join(' ').toLowerCase();

    var html = '<div class="program-card" data-search="' + escapeHtml(searchData) + '">';

    // Card header
    html += '<div class="card-header" onclick="toggleCard(this)">';
    html += '<span class="rank-badge">' + rank + '</span>';
    html += '<div class="card-vline"></div>';
    html += '<span class="card-name">' + escapeHtml(p.name) + '</span>';
    html += '<div class="card-meta">';
    html += '<span class="meta-tag location">' + location + '</span>';
    if (p.positions) html += '<span class="meta-tag">' + p.positions + ' position' + (p.positions > 1 ? 's' : '') + '</span>';
    if (p.acgme) html += '<span class="meta-tag">ACGME</span>';
    if (p.warn) html += '<span class="meta-tag warn">' + escapeHtml(p.warn) + '</span>';
    html += '</div>';
    html += '<span class="expand-icon">\u25be</span>';
    html += '</div>';

    // Card body (expandable)
    html += '<div class="card-body">';
    if (p.description) {
      html += '<p class="program-description">' + escapeHtml(p.description) + '</p>';
    }

    // Details grid
    if (p.details && p.details.length) {
      html += '<div class="details-grid">';
      p.details.forEach(function (d) {
        html += '<div class="detail-item">';
        html += '<div class="detail-key">' + escapeHtml(d.key) + '</div>';
        html += '<div class="detail-val">' + escapeHtml(d.val) + '</div>';
        html += '</div>';
      });
      html += '</div>';
    }

    // Highlight tags
    if (p.tags && p.tags.length) {
      html += '<div class="highlights">';
      p.tags.forEach(function (t) {
        html += '<span class="highlight-tag">' + escapeHtml(t) + '</span>';
      });
      html += '</div>';
    }

    // Action links
    if (p.links && p.links.length) {
      html += '<div class="card-actions">';
      p.links.forEach(function (link, i) {
        var cls = i === 0 ? 'action-link primary' : 'action-link';
        html += '<a class="' + cls + '" href="' + escapeHtml(link.url) + '" target="_blank">\u2197 ' + escapeHtml(link.label) + '</a>';
      });
      html += '</div>';
    }

    html += '</div>'; // end card-body
    html += '</div>'; // end program-card
    return html;
  }

  function renderAll() {
    var mainEl = document.querySelector('.main');
    if (!mainEl || typeof PROGRAMS === 'undefined') return;

    // Group programs by tier
    var groups = { t1: [], t2: [], t3: [], t4: [] };
    PROGRAMS.forEach(function (p) {
      var tier = p.tier || 't4';
      if (groups[tier]) groups[tier].push(p);
    });

    var html = '<div class="empty-state" id="empty-state">No programs match your search.</div>';

    ['t1', 't2', 't3', 't4'].forEach(function (tierKey) {
      var programs = groups[tierKey];
      if (!programs.length) return;
      var cfg = TIERS[tierKey];

      html += '<div class="tier-section ' + cfg.class + '" data-tier="' + tierKey + '">';
      html += '<div class="tier-header">';
      html += '<span class="tier-pill">' + cfg.pill + '</span>';
      html += '<span class="tier-title">' + cfg.title + '</span>';
      html += '<span class="tier-count">' + cfg.range + '</span>';
      html += '</div>';

      programs.forEach(function (p) {
        html += renderCard(p);
      });

      html += '</div>';
    });

    mainEl.innerHTML = html;
  }

  // Render on load
  renderAll();
})();

// UI interaction functions (global scope for onclick handlers)
function toggleCard(header) {
  var card = header.parentElement;
  card.classList.toggle('open');
}

function filterTier(tier, btn) {
  document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.tier-section').forEach(function (s) {
    if (tier === 'all' || s.dataset.tier === tier) {
      s.style.display = '';
    } else {
      s.style.display = 'none';
    }
  });
  updateCount();
}

function searchPrograms(q) {
  q = q.toLowerCase().trim();
  var clearBtn = document.getElementById('search-clear');
  clearBtn.classList.toggle('show', q.length > 0);

  var visibleCount = 0;
  document.querySelectorAll('.program-card').forEach(function (card) {
    var text = (card.dataset.search || '') + ' ' + card.querySelector('.card-name').textContent.toLowerCase();
    var show = !q || text.indexOf(q) !== -1;
    card.style.display = show ? '' : 'none';
    if (show) visibleCount++;
  });
  document.querySelectorAll('.tier-section').forEach(function (section) {
    var visible = Array.from(section.querySelectorAll('.program-card')).some(function (c) { return c.style.display !== 'none'; });
    section.style.display = visible ? '' : 'none';
  });
  document.getElementById('empty-state').style.display = visibleCount === 0 ? 'block' : 'none';
  updateCount(q ? visibleCount : null);
}

function clearSearch() {
  var input = document.getElementById('search-input');
  input.value = '';
  searchPrograms('');
  input.focus();
}

function updateCount(count) {
  var el = document.getElementById('result-count');
  if (count !== null && count !== undefined) {
    el.textContent = count + ' result' + (count !== 1 ? 's' : '');
    el.classList.add('show');
  } else {
    el.classList.remove('show');
  }
}

function toggleMethod(el) {
  el.classList.toggle('open');
  document.getElementById('method-panel').classList.toggle('show');
}

// Back to top visibility
window.addEventListener('scroll', function () {
  document.getElementById('back-top').classList.toggle('show', window.scrollY > 500);
}, { passive: true });

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') clearSearch();
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    document.getElementById('search-input').focus();
  }
});
