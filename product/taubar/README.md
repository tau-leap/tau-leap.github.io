# TauBar Website

Static landing page for TauBar.
本番 URL: [tauleap.com/product/taubar](https://tauleap.com/product/taubar/)
（ソースは [tau-leap.github.io/product/taubar](https://github.com/tau-leap/tau-leap.github.io/tree/main/product/taubar)）

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

ダウンロードと Sparkle 更新フィードは GitHub Releases の latest を使います。

`https://github.com/tau-leap/taubar/releases/latest/download/appcast.xml`

## Polar Checkout

Buy ボタンは Polar Checkout の直リンクへ遷移します。
既定の Checkout Link は `js/main.js` に設定済みです。
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

## Plans (LP copy)

- Trial: 10 days, all features
- Free (after trial): core taskbar only
- Monthly / Yearly / Lifetime: same Pro entitlements, up to 2 Macs
