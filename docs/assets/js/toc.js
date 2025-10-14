(function() {
  'use strict';

  // 目次を自動生成する関数
  function generateTOC() {
    const tocList = document.getElementById('toc-list');
    const mainContent = document.querySelector('.main-content');

    if (!tocList || !mainContent) {
      return;
    }

    // h2, h3, h4の見出しを取得
    const headings = mainContent.querySelectorAll('h2, h3, h4');

    if (headings.length === 0) {
      return;
    }

    let currentLevel = 2;
    let currentList = tocList;
    const listStack = [tocList];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent;

      // 見出しにIDがない場合は自動生成
      if (!heading.id) {
        heading.id = 'heading-' + index;
      }

      // リストアイテムとリンクを作成
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + heading.id;
      a.textContent = text;
      a.dataset.target = heading.id;
      li.appendChild(a);

      // 階層構造を処理
      if (level > currentLevel) {
        // より深い階層に入る
        const newList = document.createElement('ul');
        if (currentList.lastElementChild) {
          currentList.lastElementChild.appendChild(newList);
        } else {
          currentList.appendChild(newList);
        }
        listStack.push(newList);
        currentList = newList;
      } else if (level < currentLevel) {
        // 浅い階層に戻る
        const diff = currentLevel - level;
        for (let i = 0; i < diff; i++) {
          listStack.pop();
          currentList = listStack[listStack.length - 1];
        }
      }

      currentList.appendChild(li);
      currentLevel = level;
    });

    // スムーススクロールを追加
    tocList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // URLを更新（履歴に追加せず）
          history.replaceState(null, null, '#' + targetId);
        }
      });
    });

    // スクロール時に現在のセクションをハイライト
    highlightCurrentSection();
    window.addEventListener('scroll', highlightCurrentSection);
  }

  // 現在表示中のセクションをハイライトする関数
  function highlightCurrentSection() {
    const tocLinks = document.querySelectorAll('#toc-list a');
    const mainContent = document.querySelector('.main-content');

    if (!mainContent) {
      return;
    }

    const headings = mainContent.querySelectorAll('h2, h3, h4');
    const scrollPosition = window.scrollY + 100; // オフセット

    let currentHeading = null;

    headings.forEach(heading => {
      if (heading.offsetTop <= scrollPosition) {
        currentHeading = heading;
      }
    });

    // すべてのリンクからactiveクラスを削除
    tocLinks.forEach(link => {
      link.classList.remove('active');
    });

    // 現在のセクションに対応するリンクにactiveクラスを追加
    if (currentHeading) {
      const activeLink = document.querySelector(`#toc-list a[data-target="${currentHeading.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }

  // DOMの読み込みが完了したら実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateTOC);
  } else {
    generateTOC();
  }
})();
