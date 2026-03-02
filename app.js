// EMS Fellowship Finder — App Logic
// Renders program cards from PROGRAMS array (defined in programs.js)

(function () {
  'use strict';

  // Tier configuration
  var TIERS = {
    t1: { class: 't1', pill: 'Tier 1', title: 'Best Fit — Highest Confidence', range: '#1 – #11' },
    t2: { class: 't2', pill: 'Tier 2', title: 'Strong Fit — Good Confidence', range: '#12 – #22' },
    t3: { class: 't3', pill: 'Tier 3', title: 'Viable Fit — Worth Exploring', range: '#23 – #33' },
    t4: { class: 't4', pill: 'Tier 4', title: 'Lower Confidence Matches', range: '#34 – #42' },
    t5: { class: 't5', pill: 'Tier 5', title: 'Lifestyle Fit Below Threshold (< 3/5)', range: '#43 – #84' }
  };

  var SCORE_LABELS = {
    system_qi: 'System/QI',
    ops_autonomy: 'Ops/Autonomy',
    cct_aviation: 'CCT/Aviation',
    austere_disaster: 'Austere/Disaster',
    lifestyle: 'Lifestyle',
    economic: 'Economic'
  };

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderScoreBar(label, value) {
    var pct = (value / 5) * 100;
    var color = value >= 4 ? '#27ae60' : value >= 3 ? '#f39c12' : '#e74c3c';
    return '<div class="score-row">' +
      '<span class="score-label">' + escapeHtml(label) + '</span>' +
      '<div class="score-bar-track">' +
      '<div class="score-bar-fill" style="width:' + pct + '%;background:' + color + '"></div>' +
      '</div>' +
      '<span class="score-value">' + value + '/5</span>' +
      '</div>';
  }

  function computeAvgScore(scores) {
    if (!scores) return null;
    var keys = Object.keys(SCORE_LABELS);
    var sum = 0;
    var count = 0;
    keys.forEach(function (k) {
      if (scores[k] !== undefined) {
        sum += scores[k];
        count++;
      }
    });
    return count > 0 ? (sum / count) : null;
  }

  function renderCard(p) {
    var rank = String(p.rank).padStart(2, '0');
    var location = escapeHtml(p.city + ', ' + p.state);
    var searchData = [p.name, p.city, p.state, p.description || '', p.overview || '']
      .concat(p.tags || [])
      .concat(p.strengths || [])
      .join(' ').toLowerCase();
    var hasRichContent = !!(p.overview || p.pd || p.scores || p.strengths || p.weaknesses || p.unique);
    var avgScore = computeAvgScore(p.scores);

    var html = '<div class="program-card' + (hasRichContent ? ' top25' : '') + '" data-search="' + escapeHtml(searchData) + '">';

    // Card header
    html += '<div class="card-header" onclick="toggleCard(this)">';
    html += '<span class="rank-badge">' + rank + '</span>';
    html += '<div class="card-vline"></div>';
    html += '<span class="card-name">' + escapeHtml(p.name) + '</span>';
    html += '<div class="card-meta">';
    html += '<span class="meta-tag location">' + location + '</span>';
    if (p.positions) html += '<span class="meta-tag">' + p.positions + ' position' + (p.positions > 1 ? 's' : '') + '/yr</span>';
    if (p.acgme) html += '<span class="meta-tag">ACGME</span>';
    if (p.hems_cct) html += '<span class="meta-tag hems">' + escapeHtml(p.hems_cct) + '</span>';
    if (p.warn) html += '<span class="meta-tag warn">' + escapeHtml(p.warn) + '</span>';
    html += '</div>';
    if (avgScore !== null) {
      var badgeColor = avgScore >= 4 ? 'fit-high' : avgScore >= 3 ? 'fit-mid' : 'fit-low';
      html += '<span class="fit-badge ' + badgeColor + '">' + avgScore.toFixed(1) + '</span>';
    }
    html += '<span class="expand-icon">&#9662;</span>';
    html += '</div>';

    // Card body (expandable)
    html += '<div class="card-body">';

    // --- Rich content (any program with detailed data) ---
    if (hasRichContent) {
      // Overview
      if (p.overview) {
        html += '<div class="rich-section overview-section">';
        html += '<h4>Overview</h4>';
        html += '<p>' + escapeHtml(p.overview) + '</p>';
        html += '</div>';
      }

      // Program Director & Contact
      if (p.pd) {
        html += '<div class="rich-section pd-section">';
        html += '<h4>Program Director & Contact</h4>';
        html += '<div class="pd-name">' + escapeHtml(p.pd.name) + '</div>';
        if (p.pd.title) html += '<div class="pd-title">' + escapeHtml(p.pd.title) + '</div>';
        var contactParts = [];
        if (p.pd.email) contactParts.push('<a href="mailto:' + escapeHtml(p.pd.email) + '">' + escapeHtml(p.pd.email) + '</a>');
        if (p.pd.phone) contactParts.push(escapeHtml(p.pd.phone));
        if (contactParts.length) html += '<div class="pd-contact">' + contactParts.join(' | ') + '</div>';
        if (p.pd.coordinator) html += '<div class="pd-coordinator">Coordinator: ' + escapeHtml(p.pd.coordinator) + '</div>';
        if (p.pd.deadline) html += '<div class="pd-deadline">Deadline: ' + escapeHtml(p.pd.deadline) + '</div>';
        if (p.pd.bio) html += '<div class="pd-bio">' + escapeHtml(p.pd.bio) + '</div>';
        if (p.pd.website) html += '<div class="pd-website">Web: ' + escapeHtml(p.pd.website) + '</div>';
        html += '</div>';
      }

      // Scores
      if (p.scores) {
        html += '<div class="rich-section scores-section">';
        html += '<h4>Fit Scores</h4>';
        html += '<div class="scores-grid">';
        Object.keys(SCORE_LABELS).forEach(function (key) {
          if (p.scores[key] !== undefined) {
            html += renderScoreBar(SCORE_LABELS[key], p.scores[key]);
          }
        });
        html += '</div></div>';
      }

      // Strengths
      if (p.strengths && p.strengths.length) {
        html += '<div class="rich-section strengths-section">';
        html += '<h4>Strengths</h4>';
        html += '<ul class="pro-con-list strengths-list">';
        p.strengths.forEach(function (s) {
          html += '<li>' + escapeHtml(s) + '</li>';
        });
        html += '</ul></div>';
      }

      // Weaknesses
      if (p.weaknesses && p.weaknesses.length) {
        html += '<div class="rich-section weaknesses-section">';
        html += '<h4>Weaknesses</h4>';
        html += '<ul class="pro-con-list weaknesses-list">';
        p.weaknesses.forEach(function (w) {
          html += '<li>' + escapeHtml(w) + '</li>';
        });
        html += '</ul></div>';
      }

      // Unique Aspects
      if (p.unique) {
        html += '<div class="rich-section unique-section">';
        html += '<h4>What Makes It Unique</h4>';
        html += '<div class="unique-box">' + escapeHtml(p.unique) + '</div>';
        html += '</div>';
      }
    } else {
      // --- Standard content for programs without rich data ---
      if (p.description) {
        html += '<p class="program-description">' + escapeHtml(p.description) + '</p>';
      }
    }

    // Details grid (both Top 25 and others)
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
        html += '<a class="' + cls + '" href="' + escapeHtml(link.url) + '" target="_blank">↗ ' + escapeHtml(link.label) + '</a>';
      });
      html += '</div>';
    }

    html += '</div>'; // end card-body
    html += '</div>'; // end program-card
    return html;
  }

  function renderComparisonTable() {
    var el = document.getElementById('comparison-table');
    if (!el || typeof PROGRAMS === 'undefined') return;

    var html = '<h2>All Programs Comparison</h2>';
    html += '<div class="table-wrap"><table class="comparison-tbl">';
    html += '<thead><tr>';
    html += '<th>Rank</th><th>Program</th><th>Location</th><th>Pos/Yr</th><th>Program Director</th><th>Avg Fit</th><th>Lifestyle</th><th>Key Niche</th>';
    html += '</tr></thead><tbody>';

    PROGRAMS.forEach(function (p) {
      var niche = '';
      if (p.tags && p.tags.length) niche = p.tags.slice(0, 2).join(', ');
      var pdName = p.pd ? p.pd.name.split(',')[0] : '';
      var lifestyleScore = p.scores && p.scores.lifestyle ? p.scores.lifestyle + '/5' : '—';
      var avg = computeAvgScore(p.scores);
      var avgDisplay = avg !== null ? avg.toFixed(1) : '—';
      html += '<tr>';
      html += '<td class="rank-cell rank-' + (p.rank <= 5 ? 'top5' : p.rank <= 10 ? 'top10' : p.rank <= 25 ? 'top25' : '') + '">' + p.rank + '</td>';
      html += '<td class="prog-name-cell">' + escapeHtml(p.name) + '</td>';
      html += '<td>' + escapeHtml(p.city + ', ' + p.state) + '</td>';
      html += '<td class="center-cell">' + (p.positions || '—') + '</td>';
      html += '<td>' + escapeHtml(pdName) + '</td>';
      html += '<td class="center-cell">' + avgDisplay + '</td>';
      html += '<td class="center-cell">' + lifestyleScore + '</td>';
      html += '<td>' + escapeHtml(niche) + '</td>';
      html += '</tr>';
    });

    html += '</tbody></table></div>';
    el.innerHTML = html;
  }

  function renderTimeline() {
    var el = document.getElementById('timeline-section');
    if (!el || typeof TIMELINE === 'undefined') return;

    var html = '<h2>Application Timeline & Strategy</h2>';
    html += '<p class="timeline-subtitle">Target fellowship start: <strong>' + TIMELINE.targetStart + '</strong> (Application cycle: ' + TIMELINE.applicationCycle + ')</p>';

    // Milestones
    html += '<div class="timeline-milestones">';
    TIMELINE.milestones.forEach(function (m, i) {
      var isLast = i === TIMELINE.milestones.length - 1;
      html += '<div class="milestone' + (isLast ? ' milestone-final' : '') + '">';
      html += '<div class="milestone-dot"></div>';
      html += '<div class="milestone-content">';
      html += '<div class="milestone-date">' + escapeHtml(m.date) + '</div>';
      html += '<div class="milestone-event">' + escapeHtml(m.event) + '</div>';
      html += '</div></div>';
    });
    html += '</div>';

    // Requirements
    html += '<h3>Standard Application Requirements</h3>';
    html += '<ul class="requirements-list">';
    TIMELINE.requirements.forEach(function (r) {
      html += '<li>' + escapeHtml(r) + '</li>';
    });
    html += '</ul>';

    // Strongest Fit
    html += '<h3>Strongest Fit Programs Based on Your Profile</h3>';
    html += '<p class="fit-subtitle">Systems-building, critical-care-oriented, tech/data-inclined, drawn to austere/deployable/global environments, warm-weather/outdoor preference</p>';
    html += '<div class="fit-grid">';
    TIMELINE.strongestFitPrograms.forEach(function (f) {
      var prog = PROGRAMS.find(function (p) { return p.rank === f.rank; });
      if (!prog) return;
      html += '<div class="fit-card">';
      html += '<div class="fit-rank">#' + prog.rank + '</div>';
      html += '<div class="fit-name">' + escapeHtml(prog.name) + '</div>';
      html += '<div class="fit-loc">' + escapeHtml(prog.city + ', ' + prog.state) + '</div>';
      html += '<div class="fit-reason">' + escapeHtml(f.reason) + '</div>';
      html += '</div>';
    });
    html += '</div>';

    el.innerHTML = html;
  }

  function renderAll() {
    var mainEl = document.querySelector('.main');
    if (!mainEl || typeof PROGRAMS === 'undefined') return;

    // Group programs by tier
    var groups = { t1: [], t2: [], t3: [], t4: [], t5: [] };
    PROGRAMS.forEach(function (p) {
      var tier = p.tier || 't5';
      if (groups[tier]) groups[tier].push(p);
    });

    var html = '<div class="empty-state" id="empty-state">No programs match your search.</div>';

    ['t1', 't2', 't3', 't4', 't5'].forEach(function (tierKey) {
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

    // Render additional sections
    renderComparisonTable();
    renderTimeline();
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
