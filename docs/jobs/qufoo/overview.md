---
layout: default
title: 検索連動型広告サービス
---

[← 職務経歴書に戻る](../../index.md)

## 概要

検索連動型広告サービスの開発・運用に従事。
収益の柱である広告配信サーバ（秒間 6,000 リクエスト）のモジュールオーナーとして、前任から引き継いだ配信基盤の立て直しと収益改善の施策を一貫して担った。

期間中は株式会社 Matataki（業務委託）と並行して稼働。

## 雇用形態

正社員

## チーム構成

CTO 1 名、SWE 5 名、DS 5 名、基盤チーム（SRE）2 名。

## 主な実績

- 配信基盤の安定化と収益の保護：月約 20 万 imp を回復し、モデル読み込み失敗による収益減を防止
  → [詳細](ad.md)
- 収益改善の A/B テスト：ビジネスチームと施策を立て、実装から A/B テスト、SQL での効果分析まで一貫して担当
  → [詳細](kpi.md)
- 形態素解析 gRPC サーバの構築：複数サービスで重複していた形態素解析を共通化するため、Python と Java を性能比較して 3 週間で構築
  → [詳細](grpc.md)

## 使用技術

フロントエンド：TypeScript、Vue.js、JavaScript

バックエンド：Go、Python

インフラ：Google Cloud（GKE、BigQuery、Cloud Functions、Cloud Storage、Cloud SQL）、Terraform

データベース：MySQL、Redis

モニタリング：New Relic、Cloud Logging、Slack

---

[← 職務経歴書に戻る](../../index.md)
