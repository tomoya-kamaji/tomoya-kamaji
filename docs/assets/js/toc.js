(function () {
  'use strict';

  var ACTIVE_OFFSET = 120;

  // 目次が空のページ（詳細ページ）は h2 / h3 から生成する
  function buildFromHeadings(list, main) {
    var headings = main.querySelectorAll('h2, h3');
    headings.forEach(function (heading, index) {
      if (!heading.id) {
        heading.id = 'heading-' + index;
      }
      var a = document.createElement('a');
      a.href = '#' + heading.id;
      a.textContent = heading.textContent;
      a.dataset.target = heading.id;
      if (heading.tagName === 'H3') {
        a.className = 'is-sub';
      }
      list.appendChild(a);
    });
  }

  function init() {
    var list = document.getElementById('toc-list');
    var main = document.querySelector('.main-content');
    if (!list || !main) {
      return;
    }

    if (!list.querySelector('a')) {
      buildFromHeadings(list, main);
    }

    var links = Array.prototype.slice.call(list.querySelectorAll('a[data-target]'));
    var targets = links
      .map(function (link) { return document.getElementById(link.dataset.target); })
      .filter(Boolean);

    if (targets.length === 0) {
      return;
    }

    function highlight() {
      var current = targets[0].id;
      targets.forEach(function (el) {
        if (el.getBoundingClientRect().top < ACTIVE_OFFSET) {
          current = el.id;
        }
      });
      links.forEach(function (link) {
        if (link.dataset.target === current) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    highlight();
    window.addEventListener('scroll', highlight, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
