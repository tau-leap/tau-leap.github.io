# TauBar Website

Static landing page for TauBar.
本番 URL: [tauleap.com/product/taubar](https://tauleap.com/product/taubar/)
（ソースは [tau-leap.github.io/product/taubar](https://tau-leap.github.io/product/taubar/)）

## Local preview

```bash
cd product/taubar
python3 -m http.server 8080
# open http://localhost:8080
```

ES modules require a local server (not `file://`).

## Deploy

This directory is part of the `tau-leap.github.io` GitHub Pages site.
Push changes to that repository to publish.

Place release artifacts at:

- `/product/taubar/downloads/TauBar.dmg`（LP 用の手動ダウンロード）

Sparkle の更新フィードは GitHub Releases の latest を使う:

`https://github.com/tau-leap/taubar/releases/latest/download/appcast.xml`

（このディレクトリの `appcast.xml` はレガシー。本番アプリは Releases 側を参照）

## Polar Checkout

Buy ボタンは Polar Checkout の直リンクへ遷移します。
本番デプロイ前に、ページ先頭で URL を設定してください。

既定値は `js/main.js` の Checkout Link（3プラン共通）です。
プラン別にプリセレクトする場合は Product ID を付けます。

```text
https://buy.polar.sh/polar_cl_...?product_id=<PRODUCT_UUID>
```

HTML で上書きする場合は `js/main.js` より前に置きます。

```html
<script>
window.TAUBAR_POLAR_CHECKOUT = {
  monthly: 'https://buy.polar.sh/...?product_id=...',
  yearly: 'https://buy.polar.sh/...?product_id=...',
  lifetime: 'https://buy.polar.sh/...?product_id=...',
};
</script>
```

未設定のときは購入ボタンで案内アラートを出します。

## Plans (LP copy)

- Trial: 10 days, all features
- Free (after trial): core taskbar only
- Monthly / Yearly / Lifetime: same Pro entitlements, up to 2 Macs
