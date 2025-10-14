(function() {
  'use strict';

  function initAccordion() {
    // 「職務経歴」セクション内のh2見出しを取得
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    const jobHistoryHeading = Array.from(mainContent.querySelectorAll('h1')).find(
      h1 => h1.textContent.trim() === '職務経歴'
    );

    if (!jobHistoryHeading) return;

    // 職務経歴セクションのh2見出しを取得
    let currentElement = jobHistoryHeading.nextElementSibling;
    const jobSections = [];

    while (currentElement) {
      // 次のh1が来たら終了
      if (currentElement.tagName === 'H1') break;

      if (currentElement.tagName === 'H2') {
        jobSections.push(currentElement);
      }

      currentElement = currentElement.nextElementSibling;
    }

    // 各職務経歴セクションをアコーディオン化
    jobSections.forEach((h2, index) => {
      // h2の内容を取得
      const headingText = h2.textContent.trim();

      // h2の後の要素をコンテンツとして収集
      const contentElements = [];
      let nextEl = h2.nextElementSibling;

      while (nextEl && nextEl.tagName !== 'H2' && nextEl.tagName !== 'H1') {
        contentElements.push(nextEl);
        nextEl = nextEl.nextElementSibling;
      }

      // h2をdivに置き換え（クリック可能なヘッダー）
      const headerDiv = document.createElement('div');
      headerDiv.className = 'job-header';
      headerDiv.innerHTML = `<span class="arrow">▶</span><span>${headingText}</span>`;

      // 最初の項目は開いた状態にする
      if (index === 0) {
        headerDiv.classList.add('open');
      }

      // コンテンツをdivで囲む
      const contentDiv = document.createElement('div');
      contentDiv.className = 'job-content';

      // 最初の項目は開いた状態にする
      if (index === 0) {
        contentDiv.classList.add('open');
      }

      contentElements.forEach(el => {
        contentDiv.appendChild(el.cloneNode(true));
      });

      // 元のh2を置き換え
      h2.parentNode.insertBefore(headerDiv, h2);
      h2.parentNode.insertBefore(contentDiv, h2);
      h2.remove();

      // 元の要素を削除
      contentElements.forEach(el => el.remove());

      // クリックイベント
      headerDiv.addEventListener('click', function() {
        const isOpen = this.classList.contains('open');

        // すべてのアコーディオンを閉じる（オプション：複数開きたい場合はこの部分を削除）
        document.querySelectorAll('.job-header').forEach(header => {
          header.classList.remove('open');
        });
        document.querySelectorAll('.job-content').forEach(content => {
          content.classList.remove('open');
        });

        // クリックされた要素をトグル
        if (!isOpen) {
          this.classList.add('open');
          contentDiv.classList.add('open');
        }
      });
    });
  }

  // DOMの読み込みが完了したら実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordion);
  } else {
    initAccordion();
  }
})();
