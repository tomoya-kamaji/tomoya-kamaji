---
layout: default
title: プロフィール
---

## 基本情報

| 項目     | 内容                                              |
| -------- | ------------------------------------------------- |
| 名前     | 釜地智也（Kamaji Tomoya）                         |
| 生年月日 | 1995/05/21                                        |
| 居住地   | 大阪府                                            |
| 最終学歴 | 2018 年卒 京都産業大学 情報理工学部               |
| GitHub   | [tomoya-kamaji](https://github.com/tomoya-kamaji) |

## 得意とする分野・スキル

サーバサイド領域（TypeScript、Golang、Ruby on Rails）を中心に、要件・デザインからシステムを設計し、適切な粒度のタスクに分解することができます。

特に、TypeScript/Golang を用いたバックエンド開発とアーキテクチャ設計において、一定の規律を定めてチームに定着させることができます。

秒間 6,000 リクエスト発生する広告配信サービスの運用経験があるため、サーバー負荷を削減するためのノウハウも一定量保有しています。

得意とまでは言えないですが、シンプルなアプリケーションであれば IaC を用いてインフラを構築することもできます。

## 経歴

### 正社員

<details class="job-history" open markdown="1">
<summary>2024年3月～現在 医療系 SaaS サービス</summary>

### サマリー

医療 SaaS の開発・運用に従事しています。機能開発の設計支援とレビュー、運用基盤（監視・アラート・セキュリティ）強化、開発プロセスの最適化を推進するテックリードとして従事してきました。メンバーの 1on1 も担当し、チーム全体の品質向上に注力しています。

商談では、システムに関わる部分について Biz メンバーと共に参加し、システム的な観点からの提案を行っています。

### 雇用形態

正社員

### 事業内容

医療系 DX サービスの開発・運用

### チーム構成

PdM 1 名

テックリード 1 名

エンジニア 3 名

デザイナー 1 名

### 主な実績

開発プロセスの最適化を推進 → [詳細](jobs/con/process.md)

医療向け説明動画配信機能の再設計と基盤刷新について、設計支援とデータ構造整理をリードし、期日内リリースに貢献

オブザーバビリティ強化（ログ・トレーシング・監視・アラート）を推進し、インシデント検知や原因特定の即時性を向上。品質 KPI の可視化を進め、運用安定性を改善

入退院プロセス支援機能群の設計リードとリリース推進

LINE 連携を含むユーザー中心のアカウント設計を推進。多役割モデルと認証要件の見直しにより、認可と表示制御の整合性を向上

### 使用技術

フロントエンド：TypeScript、Nuxt.js

バックエンド：TypeScript、Express

インフラ：Google Cloud Platform（Cloud Run、Cloud SQL、Cloud Storage、Cloud Functions）

データベース：MySQL（Cloud SQL）

モニタリング：Cloud Logging、Sentry、Slack

ドキュメント：Notion

</details>

<details class="job-history" open markdown="1">
<summary>2023年1月～12月 検索連動型広告サービス</summary>

### 雇用形態

正社員

### 事業内容

検索連動型広告サービスの開発・運用

### チーム構成

CTO 1 名

SWE（ソフトウェアエンジニア）5 名

DS（データサイエンスエンジニア）5 名

基盤チーム（SRE）2 名

### 役割

広告配信サーバーのモジュールオーナー

### 主な実績

広告配信サーバのモジュールオーナーとして、秒間 6,000 リクエスト発生する広告配信システムの運用・改善を担当。
サーバー負荷を削減するためのパフォーマンス・チューニングを実施しました。 → [詳細](jobs/qufoo/ad.md)

A/B テストの施策立案・実装・データ分析を BigQuery を活用して行い、効果測定とレポート作成を実施。 → [詳細](jobs/qufoo/kpi.md)

### 使用技術

フロントエンド：TypeScript、Vue.js、JavaScript

バックエンド：Golang、Python

インフラ：Google Cloud Platform（Kubernetes（GKE）、BigQuery、Cloud Functions、Cloud Storage、Cloud SQL）

データベース：MySQL、Redis

モニタリング：NewRelic、Cloud Logging、Slack

ドキュメント：Notion

</details>

<details class="job-history" markdown="1">
<summary>2021年6月～2022年12月 複業マッチングプラットフォーム</summary>

### 雇用形態

正社員

### 事業内容

複業マッチングプラットフォームの開発・運用

### チーム構成

CTO 1 名

CDO 1 名

PdM 1 名

フロントエンド 2 名

サーバサイド 1 名

デザイナー 1 名

### 役割

専任サーバサイドエンジニア

### 主な実績

専任のサーバサイドエンジニアとして、複業マッチングプラットフォームの機能開発を担当。

Rails から Node.js (TypeScript)への DDD 設計でのリプレイスを実施。
ドメインモデル図の作成、アーキテクチャ設計、テーブル設計、API 設計、実装を担当。 → [詳細](jobs/another/ddd.md)

ユーザ検索機能の全文検索エンジン実装とパフォーマンス・チューニング → [詳細](jobs/another/elastic-search.md)

### 使用技術

フロントエンド：TypeScript、React、Next.js、StyledComponent、Redux

バックエンド：TypeScript、Node.js、Express、TypeORM、Ruby on Rails

インフラ：AWS（ECS、RDS、S3、CloudFront、Route 53、Lambda、API Gateway、CloudWatch、CloudTrail）

データベース：MySQL

</details>

<details class="job-history" markdown="1">
<summary>2018年4月～2021年5月 大手 SIer（新卒入社）</summary>

### 概要

大手メーカー向け基幹システムの開発に従事。

3 年間で 10 案件以上に参画し、要件定義からテストまでの工程を担当。業務効率化ツールの開発や Notion の導入など、チーム全体の生産性向上にも貢献。

### 使用技術

Oracle、Java、Excel、SVN、Redmine、Notion、Jenkins、AWS

[→ 詳細を見る](jobs/2018-sier.md)

</details>

### 複業・業務委託

<details class="job-history" markdown="1">
<summary>2023年1月～現在 営業マッチングプラットフォームの開発</summary>

### 雇用形態

業務委託

### 事業内容

営業マッチングプラットフォームの開発

### チーム構成

プロダクトオーナー 1 名

PdM 1 名

エンジニア 3 名

デザイナー 1 名

### 役割

サーバサイド開発、インフラ構築

### 主な担当業務

フロントエンドからインフラまで一気通貫しての開発を担当。

PdM との連携を中心に、プロジェクトの進行を担当。（チーム全体の進捗管理、進捗の可視化、進捗の調整、進捗の改善）

AWS CDK によるインフラリソースの構築、サーバサイドのアーキテクチャ設計、Nest.js でのサーバサイド開発、テスト環境の整備、CI/CD の構築を担当。
（フロントエンドのアーキテクチャ選定や技術選定は他メンバーに任せる）

### 使用技術

フロントエンド：TypeScript、React、Next.js、TailwindCSS、Jotai、Radix UI

バックエンド：TypeScript、Nest.js、Prisma

インフラ：AWS（ECS、S3、CloudFront、Route 53、Lambda、API Gateway、CloudWatch、CloudTrail）、AWS CDK、Vercel

データベース：MySQL（PlanetScale）

</details>

<details class="job-history" markdown="1">
<summary>2022年1月～6月 新卒向け適性検査サービス</summary>

### 雇用形態

業務委託（月稼働 40〜50 時間）

### 事業内容

相性がわかる適性検査サービス

### 主な担当業務

Nest.js による API 作成、設計からテストまでを担当。ベトナム人メンバーがいたためドキュメントは英語で作成し、仕様について齟齬が発生しないようにドキュメントに残すことを徹底しました。

また、稼働時間が短くバグが起きるとリリースにリードタイムが発生してしまうため、テストを手厚く書くことでリリースのリードタイムを短縮しました。

### 使用技術

TypeScript, Nest.js

</details>

## 業務外活動

### 技術書執筆

**技術書展 15（2023 年 11 月）にて書籍を発売**

約 700 冊を販売

[Twitter (X) での告知](https://x.com/tomoya_sakusaku/status/1723167574983356558?s=20)

## 人柄

- 好奇心旺盛

- 素直
