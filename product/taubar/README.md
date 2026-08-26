# TauBar Website

Static landing page for TauBar.
Hosted under [tau-leap.github.io/product/taubar](https://tau-leap.github.io/product/taubar/).

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
- `/product/taubar/appcast.xml`（Sparkle フィード。enclosure は GitHub Releases の ZIP）

Sparkle の `SUFeedURL` が `https://taubar.app/appcast.xml` の場合は、
カスタムドメインまたはリダイレクトでこのファイルへ届けること。

## Checkout API

Buy buttons call `https://api.taubar.app/api/checkout/session`.
Override for staging:

```html
<script>window.TAUBAR_API_URL = 'http://localhost:8787';</script>
```

before `js/main.js`.
