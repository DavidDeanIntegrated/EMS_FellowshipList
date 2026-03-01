// EMS Fellowship Finder — App Logic

(function () {
  'use strict';

  const searchInput = document.getElementById('searchInput');
  const tierFilter = document.getElementById('tierFilter');
  const sortBy = document.getElementById('sortBy');
  const programList = document.getElementById('programList');

  function getTierLabel(tier) {
    switch (tier) {
      case 'top': return 'Top Tier';
      case 'mid': return 'Mid Tier';
      case 'lower': return 'Lower Tier';
      default: return tier;
    }
  }

  function getBarClass(value) {
    if (value >= 4) return 'top';
    if (value >= 3) return 'mid';
    return 'lower';
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderScoreBars(scores) {
    const labels = {
      system_qi: 'System & QI',
      ops_autonomy: 'Ops & Field',
      cct_aviation: 'CCT / Aviation',
      austere_disaster: 'Austere / Disaster',
      lifestyle: 'Lifestyle Fit',
      economic: 'Economic'
    };
    return Object.entries(scores).map(function (entry) {
      var key = entry[0], val = entry[1];
      var pct = (val / 5) * 100;
      var cls = getBarClass(val);
      return '<div class="score-bar">' +
        '<span class="score-label">' + labels[key] + '</span>' +
        '<div class="bar-track"><div class="bar-fill ' + cls + '" style="width:' + pct + '%"></div></div>' +
        '<span class="score-value">' + val + '</span>' +
        '</div>';
    }).join('');
  }

  function renderTags(tags) {
    return tags.map(function (t) {
      return '<span class="highlight-tag">' + escapeHtml(t) + '</span>';
    }).join('');
  }

  function renderPdContact(pd) {
    if (!pd) return '';
    var html = '<div class="detail-block pd-block">';
    html += '<h4>Program Director & Contact</h4>';
    html += '<p class="pd-name">' + escapeHtml(pd.name) + '</p>';
    if (pd.title) html += '<p class="pd-title">' + escapeHtml(pd.title) + '</p>';
    var contactParts = [];
    if (pd.email) contactParts.push('<span>Email: ' + escapeHtml(pd.email) + '</span>');
    if (pd.phone) contactParts.push('<span>Phone: ' + escapeHtml(pd.phone) + '</span>');
    if (contactParts.length) html += '<p class="pd-contact">' + contactParts.join(' &nbsp;|&nbsp; ') + '</p>';
    if (pd.coordinator) html += '<p class="pd-coordinator">Coordinator: ' + escapeHtml(pd.coordinator) + '</p>';
    if (pd.deadline) html += '<p class="pd-deadline"><strong>Deadline:</strong> ' + escapeHtml(pd.deadline) + '</p>';
    if (pd.website) html += '<p class="pd-website">Website: ' + escapeHtml(pd.website) + '</p>';
    if (pd.bio) html += '<p class="pd-bio">' + escapeHtml(pd.bio) + '</p>';
    html += '</div>';
    return html;
  }

  function renderList(label, items, className) {
    if (!items || !items.length) return '';
    var html = '<div class="detail-block ' + className + '">';
    html += '<h4>' + escapeHtml(label) + '</h4>';
    html += '<ul>';
    items.forEach(function (item) {
      html += '<li>' + escapeHtml(item) + '</li>';
    });
    html += '</ul></div>';
    return html;
  }

  function renderProgramCard(p) {
    var overallScore = Object.values(p.scores).reduce(function (a, b) { return a + b; }, 0);
    var card = document.createElement('div');
    card.className = 'program-card';
    card.setAttribute('data-rank', p.rank);
    card.setAttribute('data-tier', p.tier);

    var html = '';
    // Header
    html += '<div class="program-header">';
    html += '<div class="program-rank ' + p.tier + '">#' + p.rank + '</div>';
    html += '<div class="program-info">';
    html += '<div class="program-name">' + escapeHtml(p.name) + '</div>';
    html += '<div class="program-location">' + escapeHtml(p.city + ', ' + p.state);
    if (p.positions) html += ' &nbsp;&bull;&nbsp; ' + p.positions + ' position' + (p.positions > 1 ? 's' : '') + '/year';
    if (p.hems_cct && p.hems_cct !== 'Limited') html += ' &nbsp;&bull;&nbsp; HEMS/CCT: ' + escapeHtml(p.hems_cct);
    html += '</div>';
    html += '</div>';
    html += '<span class="tier-badge ' + p.tier + '">' + getTierLabel(p.tier) + '</span>';
    html += '</div>';

    // Score bars
    html += '<div class="score-bars">' + renderScoreBars(p.scores) + '</div>';

    // Tags
    html += '<div class="program-highlights">' + renderTags(p.tags) + '</div>';

    // Overview (always visible as summary)
    if (p.overview) {
      html += '<div class="program-overview"><p>' + escapeHtml(p.overview) + '</p></div>';
    }

    // Expand hint
    html += '<div class="expand-hint">Click to expand details &#9662;</div>';

    // Expandable details
    html += '<div class="program-details">';

    // PD & Contact
    html += renderPdContact(p.pd);

    // Strengths
    html += renderList('Strengths', p.strengths, 'strengths-block');

    // Weaknesses
    html += renderList('Weaknesses', p.weaknesses, 'weaknesses-block');

    // Unique Aspects
    if (p.unique) {
      html += '<div class="detail-block unique-block">';
      html += '<h4>Unique Aspects</h4>';
      html += '<p>' + escapeHtml(p.unique) + '</p>';
      html += '</div>';
    }

    html += '</div>'; // end program-details

    card.innerHTML = html;

    card.addEventListener('click', function () {
      var wasExpanded = card.classList.contains('expanded');
      card.classList.toggle('expanded');
      var hint = card.querySelector('.expand-hint');
      if (hint) {
        hint.innerHTML = wasExpanded ? 'Click to expand details &#9662;' : 'Click to collapse &#9652;';
      }
    });

    return card;
  }

  function renderTimeline() {
    var section = document.getElementById('timelineSection');
    if (!section || typeof APPLICATION_TIMELINE === 'undefined') return;

    var html = '<div class="container">';
    html += '<h2>Application Timeline & Strategy</h2>';
    html += '<p class="timeline-subtitle">Target fellowship start: ' + APPLICATION_TIMELINE.targetStart + ' &nbsp;|&nbsp; Application cycle: ' + APPLICATION_TIMELINE.applicationCycle + '</p>';

    // Milestones
    html += '<div class="timeline-grid">';
    APPLICATION_TIMELINE.milestones.forEach(function (m) {
      var cls = m.highlight ? ' timeline-highlight' : '';
      html += '<div class="timeline-item' + cls + '">';
      html += '<div class="timeline-date">' + escapeHtml(m.date) + '</div>';
      html += '<div class="timeline-event">' + escapeHtml(m.event) + '</div>';
      html += '</div>';
    });
    html += '</div>';

    // Requirements
    html += '<div class="timeline-requirements">';
    html += '<h3>Standard Application Requirements</h3>';
    html += '<ul>';
    APPLICATION_TIMELINE.requirements.forEach(function (r) {
      html += '<li>' + escapeHtml(r) + '</li>';
    });
    html += '</ul>';
    html += '</div>';

    // Strongest fit programs
    html += '<div class="strong-fit">';
    html += '<h3>Strongest Fit Programs for Your Profile</h3>';
    html += '<div class="strong-fit-grid">';
    APPLICATION_TIMELINE.strongFitPrograms.forEach(function (p) {
      html += '<div class="strong-fit-card">';
      html += '<div class="strong-fit-rank">#' + p.rank + '</div>';
      html += '<div class="strong-fit-info">';
      html += '<div class="strong-fit-name">' + escapeHtml(p.name) + '</div>';
      html += '<div class="strong-fit-reason">' + escapeHtml(p.reason) + '</div>';
      html += '</div></div>';
    });
    html += '</div>';
    html += '</div>';

    html += '</div>'; // container
    section.innerHTML = html;
  }

  function filterAndSort() {
    var query = searchInput.value.toLowerCase().trim();
    var tier = tierFilter.value;
    var sort = sortBy.value;

    var filtered = PROGRAMS.filter(function (p) {
      if (tier !== 'all' && p.tier !== tier) return false;
      if (query) {
        var searchable = [p.name, p.city, p.state, p.overview || '', p.unique || '']
          .concat(p.tags)
          .concat(p.strengths || [])
          .join(' ').toLowerCase();
        if (p.pd) searchable += ' ' + p.pd.name.toLowerCase();
        if (searchable.indexOf(query) === -1) return false;
      }
      return true;
    });

    if (sort === 'overall') {
      filtered.sort(function (a, b) { return a.rank - b.rank; });
    } else {
      filtered.sort(function (a, b) {
        return (b.scores[sort] || 0) - (a.scores[sort] || 0) || a.rank - b.rank;
      });
    }

    programList.innerHTML = '';
    if (filtered.length === 0) {
      programList.innerHTML = '<div class="no-results"><p>No programs match your search.</p><p>Try a different search term or filter.</p></div>';
      return;
    }
    filtered.forEach(function (p) {
      programList.appendChild(renderProgramCard(p));
    });
  }

  // Event listeners
  searchInput.addEventListener('input', filterAndSort);
  tierFilter.addEventListener('change', filterAndSort);
  sortBy.addEventListener('change', filterAndSort);

  // Initial render
  filterAndSort();
  renderTimeline();

  // Comparison table
  var tableSection = document.getElementById('comparisonTable');
  if (tableSection) {
    var thtml = '<div class="container">';
    thtml += '<h2>Program Comparison Summary</h2>';
    thtml += '<div class="table-wrapper"><table class="comparison-table">';
    thtml += '<thead><tr><th>Rank</th><th>Program</th><th>Location</th><th>Pos/Year</th><th>Program Director</th><th>HEMS/CCT</th><th>Key Niche</th></tr></thead>';
    thtml += '<tbody>';
    PROGRAMS.forEach(function (p) {
      thtml += '<tr>';
      thtml += '<td class="rank-cell ' + p.tier + '">' + p.rank + '</td>';
      thtml += '<td>' + escapeHtml(p.name) + '</td>';
      thtml += '<td>' + escapeHtml(p.city + ', ' + p.state) + '</td>';
      thtml += '<td>' + (p.positions || '?') + '</td>';
      thtml += '<td>' + (p.pd ? escapeHtml(p.pd.name) : 'N/A') + '</td>';
      thtml += '<td>' + escapeHtml(p.hems_cct || 'Limited') + '</td>';
      thtml += '<td>' + escapeHtml(p.tags.slice(0, 2).join(', ')) + '</td>';
      thtml += '</tr>';
    });
    thtml += '</tbody></table></div>';
    thtml += '</div>';
    tableSection.innerHTML = thtml;
  }

})();
