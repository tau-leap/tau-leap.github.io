const STRINGS = {
  en: {
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.feedback': 'Feedback',
    'nav.menu': 'Open menu',
    'nav.menuClose': 'Close menu',
    'a11y.skip': 'Skip to content',
    'a11y.language': 'Switch to Japanese',
    'cta.download': 'Download',
    'cta.trial': 'Try all features for 10 days',
    'cta.explore': 'Explore features',
    'hero.eyebrow': 'For Windows users on Mac',
    'hero.title': 'The taskbar you know,\nnow on Mac.',
    'hero.lead': 'Miss switching by window title?\nTauBar brings a Windows-style taskbar to MacOS.',
    'hero.note1': 'No account required',
    'hero.note2': 'Apple Silicon',
    'hero.note3': 'MacOS Tahoe 26+',
    'hero.callout': 'Window-level switching',
    'feat.taskbar': 'Switch by window — not just by app',
    'feat.taskbarBody': 'Dock groups everything by app.\nTauBar puts each open window on the bar, so you can find it by its title.\nChrome profiles are shown too.',
    'feat.pin': 'Pin apps to the taskbar',
    'feat.pinBody': 'Pin apps on the right too.\nReach them the moment the idea hits.',
    'feat.shortcuts': 'System shortcuts on the bar',
    'feat.shortcutsBody': 'Launch Siri, Spotlight, Mission Control, and Show Desktop from icons on the taskbar.',
    'feat.switcher': 'Window Switcher',
    'feat.switcherBody': 'Press ⌥Tab — like Alt+Tab — to browse every window across every Space, with titles and previews.',
    'feat.start': 'Start menu where you expect it',
    'feat.startBody': 'Launch apps, search, and open settings from the Start button — right on the taskbar, where you left it on Windows.',
    'feat.media': 'Media & system controls',
    'feat.mediaBody': 'Adjust volume, brightness, and media playback right from the tray.',
    'feat.calendar': 'Clock & calendar',
    'feat.calendarBody': 'Check the time and events from the clock, and see your next event in the menu bar — no other app needed.',
    'feat.dragShelf': 'Temporary storage',
    'feat.dragShelfBody': 'Park files on the taskbar while you switch apps or Spaces, then drop them where you need them.',
    'feat.highlight': 'Active window highlight',
    'feat.highlightBody': 'A clear border marks the focused window, so you always know which one is active.',
    'productShot.title': 'The taskbar that feels familiar',
    'privacy.body': 'TauBar has no usage telemetry.\nAccessibility is used only to identify and focus windows.\nScreen Recording is needed only when you choose to show preview thumbnails.',
    'pricing.kicker': 'Simple pricing',
    'pricing.title': 'Pick the plan that fits',
    'pricing.sub': 'Try every feature for 10 days.\nKeep everything with Pro.\nStay on Free and the core taskbar remains yours.',
    'compare.title': 'Free vs Pro',
    'compare.freeLabel': 'Free plan',
    'compare.freeNote': 'After the trial ends, without a purchase. Core taskbar stays available.',
    'compare.free1': 'Taskbar, window switching, pin & reorder',
    'compare.free2': 'Window titles / icon-only mode',
    'compare.free3': 'Taskbar auto-hide',
    'compare.free4': 'Start menu',
    'compare.free5': 'Clock, date, month calendar',
    'compare.free6': 'Multi-display',
    'compare.free7': 'Launch at login',
    'compare.free8': 'Japanese / English UI, update checks',
    'compare.proLabel': 'Pro plan',
    'compare.proNote': 'During the trial, and with Monthly / Yearly / Lifetime. Same Pro rights on every paid plan.',
    'compare.pro1': 'Everything in Free',
    'compare.pro2': 'System action icons',
    'compare.pro3': 'Unread badges, Chrome profiles',
    'compare.pro4': 'Media controls',
    'compare.pro5': 'Volume & brightness controls',
    'compare.pro6': 'Window Switcher (⌥Tab)',
    'compare.pro7': 'Drag shelf',
    'compare.pro8': 'Active window highlight',
    'compare.pro9': 'Calendar events, menu bar event display',
    'compare.pro10': 'Bar height / width and layout options',
    'pricing.monthly': 'Pro Monthly',
    'pricing.yearly': 'Pro Yearly',
    'pricing.lifetime': 'Pro Lifetime',
    'pricing.best': 'Best value',
    'pricing.mo': '/mo',
    'pricing.yr': '/yr',
    'pricing.monthlyNote': 'Flexible, cancel anytime',
    'pricing.yearlyNote': 'Two months free every year',
    'pricing.lifetimeNote': 'One payment, yours forever',
    'pricing.buy': 'Buy monthly',
    'pricing.buyYearly': 'Buy yearly',
    'pricing.buyLifetime': 'Buy lifetime',
    'pricing.foot': 'Paid plans unlock Pro on up to 2 Macs. License keys are delivered by Polar after checkout.',
    'pricing.checkoutMissing': 'Checkout links are not configured yet. Please email info@tauleap.com.',
    'faq.kicker': 'FAQ',
    'faq.title': 'Good to know',
    'faq.sub': 'Key points for people who switched from Windows.',
    'faq.q1': 'Does TauBar replace the Dock?',
    'faq.a1': 'We recommend using it alongside the Dock.\nOr hide the Dock on the left or right and make the taskbar your home base.',
    'faq.q2': 'Why are Accessibility permissions needed?',
    'faq.a2': 'MacOS requires this permission for TauBar to read window titles, focus windows, and restore minimized windows.',
    'faq.q3': 'Is Screen Recording required?',
    'faq.a3': 'Only for preview thumbnails in Window Switcher.\nWithout it, TauBar shows app icons and titles instead.',
    'faq.q4': 'What happens after the trial?',
    'faq.a4': 'After 10 days you stay on Free with the core taskbar. Pro features need Monthly, Yearly, or Lifetime. Your preferences remain saved on your Mac.',
    'faq.q5': 'How many Macs can I use?',
    'faq.a5': 'Each license can be activated on up to two Macs for your personal use.',
    'faq.q6': 'Does TauBar work with multiple displays?',
    'faq.a6': 'Yes. Choose the display for your taskbar, and Window Switcher opens on the display under your pointer.',
    'faq.q7': 'What is included in Free vs Pro?',
    'faq.a7': 'Free covers switching, pinning, Start menu, and clock. Pro adds Window Switcher, drag shelf, calendar events, media controls, badges, and more — see Pricing.',
    'trust.privacy': 'Privacy policy',
    'footer.tagline': 'A Mac taskbar for people who came from Windows.',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
  },
  ja: {
    'nav.features': '機能',
    'nav.pricing': '価格',
    'nav.faq': 'よくある質問',
    'nav.feedback': '要望',
    'nav.menu': 'メニューを開く',
    'nav.menuClose': 'メニューを閉じる',
    'a11y.skip': '本文へ移動',
    'a11y.language': '英語に切り替え',
    'cta.download': 'ダウンロード',
    'cta.trial': '全機能を10日間試す',
    'cta.explore': '機能を見る',
    'hero.eyebrow': 'WindowsからMacへ',
    'hero.title': '使い慣れたタスクバーをMacにも。',
    'hero.lead': 'Dockの切替操作に戸惑ったら。\nWindows風タスクバーで、タイトルを見てウィンドウを切り替え。',
    'hero.note1': 'アカウント登録不要',
    'hero.note2': 'Apple Silicon',
    'hero.note3': 'MacOS Tahoe 26以降',
    'hero.callout': 'ウィンドウ単位で切り替え',
    'feat.taskbar': 'アプリではなく、ウィンドウで切り替え',
    'feat.taskbarBody': 'Dockはアプリ単位にまとめてしまいます。\nTauBarは開いているウィンドウごとにバーへ置き、タイトルで探せます。\nChromeのプロファイルを表示します。',
    'feat.pin': 'タスクバーへピン留め',
    'feat.pinBody': 'アプリを右側にもピン留め。\nそのアイデアにもすぐにアクセス。',
    'feat.shortcuts': 'システム操作をアイコンから',
    'feat.shortcutsBody': 'Siri、Spotlight、Mission Control、デスクトップ表示をタスクバーのアイコンから実行できます。',
    'feat.switcher': 'Window Switcher',
    'feat.switcherBody': '⌥Tabは Alt+Tab の感覚。全Spaceのウィンドウをタイトルとプレビュー付きで一覧できます。',
    'feat.start': 'スタートメニューも、いつもの場所に',
    'feat.startBody': 'アプリ起動、検索、設定をスタートボタンから。Windowsのときと同じく、タスクバーの手元にあります。',
    'feat.media': 'メディアとシステム操作',
    'feat.mediaBody': '音量、明るさ、再生コントロールをトレイからすぐに調整できます。',
    'feat.calendar': '時計とカレンダー',
    'feat.calendarBody': '時刻と予定を時計から確認。次の予定はメニューバーでも確認できます。',
    'feat.dragShelf': '一時保管',
    'feat.dragShelfBody': 'ファイルをタスクバーに一時置き。アプリやSpaceを切り替えてから、必要な場所へドロップできます。',
    'feat.highlight': 'アクティブウィンドウ強調',
    'feat.highlightBody': 'フォーカス中のウィンドウを枠線で強調。今どれが前面か、一目で分かります。',
    'productShot.title': 'Windowsで慣れた、あのバー',
    'privacy.body': 'TauBarは利用状況の収集や送信をしません。\nアクセシビリティはウィンドウの識別と切り替えだけに使用。\n画面収録はプレビュー画像を表示する場合にのみ必要です。',
    'pricing.kicker': 'シンプルな価格',
    'pricing.title': '使い方に合ったプランを',
    'pricing.sub': 'まずは、すべての機能を10日間お試しください。\nPro ですべての機能を使い続けます。\n無料使用のままでも基本のタスクバーはそのまま。',
    'compare.title': 'Free と Pro',
    'compare.freeLabel': 'Freeプラン',
    'compare.freeNote': 'トライアル終了後・未購入でも、基本のタスクバーは継続利用できます。',
    'compare.free1': 'タスクバー、ウィンドウ切替、ピン留め・並べ替え',
    'compare.free2': 'ウィンドウタイトル表示／アイコンのみ',
    'compare.free3': 'タスクバー自動非表示',
    'compare.free4': 'スタートメニュー',
    'compare.free5': '時計・日付・月カレンダー',
    'compare.free6': 'マルチディスプレイ',
    'compare.free7': 'ログイン時起動',
    'compare.free8': '日本語／英語 UI',
    'compare.proLabel': 'Proプラン',
    'compare.proNote': 'トライアル中および月額・年額・買い切りで利用可能。有料プランの権利はすべて同一です。',
    'compare.pro1': 'Free の内容すべて',
    'compare.pro2': 'システム操作アイコン',
    'compare.pro3': '未読バッジ、Chrome プロファイル',
    'compare.pro4': 'メディアコントロール',
    'compare.pro5': '音量、明るさ調整',
    'compare.pro6': 'Window Switcher（⌥Tab）',
    'compare.pro7': 'ドラッグシェルフ',
    'compare.pro8': 'アクティブウィンドウ強調',
    'compare.pro9': 'カレンダー予定、メニューバー予定表示',
    'compare.pro10': 'バーの高さ・幅などレイアウト調整',
    'pricing.monthly': 'Pro月額',
    'pricing.yearly': 'Pro年額',
    'pricing.lifetime': 'Pro買い切り',
    'pricing.best': 'おすすめ',
    'pricing.mo': '/月',
    'pricing.yr': '/年',
    'pricing.monthlyNote': 'いつでもキャンセル可能',
    'pricing.yearlyNote': '毎年2か月分お得',
    'pricing.lifetimeNote': '一度の購入でずっと使える',
    'pricing.buy': '月額で購入',
    'pricing.buyYearly': '年額で購入',
    'pricing.buyLifetime': '買い切りで購入',
    'pricing.foot': '有料プランは最大2台の Mac で Pro を利用できます。ライセンスキーは Polar から届きます。',
    'pricing.checkoutMissing': '購入リンクがまだ設定されていません。info@tauleap.com までご連絡ください。',
    'faq.kicker': 'よくある質問',
    'faq.title': '試す前に知っておきたいこと',
    'faq.sub': 'Windowsから乗り換えた人向けのポイント',
    'faq.q1': 'TauBarはDockの代わりになりますか？',
    'faq.a1': 'Dockとの併用を推奨しています。\nDockを右や左に隠してタスクバー中心にできます。',
    'faq.q2': 'アクセシビリティ権限はなぜ必要ですか？',
    'faq.a2': 'ウィンドウタイトルの取得、前面への切り替え、最小化したウィンドウの復元にMacOSの許可が必要です。',
    'faq.q3': '画面収録権限は必須ですか？',
    'faq.a3': 'Window Switcherでプレビュー画像を表示する場合のみ必要です。\n許可しなくてもアイコンとタイトルで利用できます。',
    'faq.q4': 'トライアル終了後はどうなりますか？',
    'faq.a4': '10日後は Free プランになり、基本のタスクバーは継続利用できます。Pro 機能は月額・年額・買い切りで有効化してください。設定内容は Mac にそのまま保存されます。',
    'faq.q5': '何台のMacで使えますか？',
    'faq.a5': '1つのライセンスを、個人利用のMac最大2台で有効化できます。',
    'faq.q6': '複数ディスプレイでも使えますか？',
    'faq.a6': 'はい。タスクバーを表示する画面を選べ、Window Switcherはポインタのある画面に開きます。',
    'faq.q7': 'Free と Pro の違いは？',
    'faq.a7': 'Free は切替・ピン留め・スタートメニュー・時計など基本機能。Pro は Window Switcher、シェルフ、予定、メディア操作、バッジなどを追加します（詳細は価格セクション）。',
    'trust.privacy': 'プライバシーポリシー',
    'footer.tagline': 'Windowsから来た人のための、Macタスクバー。',
    'footer.product': '製品',
    'footer.support': 'サポート',
    'footer.contact': 'お問い合わせ',
  },
};

function pageLang() {
  const fromHtml = document.documentElement.getAttribute('data-lang');
  if (fromHtml === 'ja' || fromHtml === 'en') return fromHtml;
  if (location.pathname.includes('/ja/') || location.pathname.endsWith('/ja')) return 'ja';
  return 'en';
}

let currentLang = pageLang();

export function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (STRINGS[lang]?.[key]) el.textContent = STRINGS[lang][key];
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = lang === 'ja' ? 'JA' : 'EN';
    toggle.setAttribute('aria-label', STRINGS[lang]['a11y.language']);
  }
}

export function getLang() {
  return currentLang;
}

export function translate(key, lang = currentLang) {
  return STRINGS[lang]?.[key] || key;
}

function otherLangPath(lang) {
  // EN page lives at .../taubar/ ; JA at .../taubar/ja/
  if (lang === 'en') {
    return new URL('ja/', location.href).href;
  }
  return new URL('../', location.href).href;
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(pageLang());
  document.getElementById('langToggle')?.addEventListener('click', () => {
    const next = currentLang === 'en' ? 'ja' : 'en';
    try {
      localStorage.setItem('taubar-lang', next);
    } catch (_) { /* ignore */ }
    location.assign(otherLangPath(currentLang));
  });
});
