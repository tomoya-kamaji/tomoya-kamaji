# プロフィール

- 名前: 釜地智也
- 生年月日: 1995/05/21 生まれ (20代後半)
- 居住地: 大阪府

## 得意とする分野・スキル

- サーバサイド領域（TypeScript、Golang、Ruby on Rails）
- 要件、デザインからシステムを設計し、適切な粒度のタスクに分解する
- 保守性が高いコードを書く技術(クラスごとの責務を考えて設計を行える)
- 秒間6,000リクエスト発生する広告配信サービスの運用の経験があり、サーバー負荷を減らすためのノウハウを持っている
- 簡易的なものであればインフラの構築も行える(CDKでの構築経験あり)

## 実務経験がある技術

### 言語 / フレームワーク

- TypeScript: Express、Nest.js、React
- Golang: gin、Echo、gorm、sqlc、sqldef
- Ruby: Ruby onRails

### RDB / NoSQL

- MySQL
- Oracle
- Redis
- ElasticSearch
- BigQuery

### クラウド

#### AWS

- EC2
- Lambda
- ELB
- EC2 (※ソースに重複記載あり)
- ECS
- Fargate
- Route53
- SQS
- SNS
- SES
- ElasticCache (Redis)
- KMS

#### GCP

- GCS
- Cloud Functions
- GCE
- GKE (Kubernetes)
- Cloud Run
- Cloud SQL
- Cloud Memorystore (Redis)
- Cloud Pub/Sub
- BigQuery
- Composer (Airflow)
- Cloud Build
- Stackdriver Logging
- Stackdriver Monitoring

### SaaS/PaaS

- GitHub
- GitHub Actions
- Vercel
- CircleCI
- Sentry
- NewRelic

### その他

- Terraform
- Kibana

## 職歴

(Note: Source included links for "職歴" and "ストレングスファインダー" pointing to Notion pages. These are omitted here as they may not be publicly accessible or relevant for a GitHub profile.)

### 🍀 正社員3社目： Qufooit Japan株式会社

- 期間: 2023/01 ~ 12
- 事業内容: ISEの開発 (メディア向けの検索連動型広告サービスの運用)
- 役職: 正社員
- 従業員数: 約20名

#### プロダクト概要

ISEの開発(メディア向けの検索連動型広告の導入)
メディア様へ検索エンジン、広告配信システムを提供しています。
ユーザの検索データを元に最適な広告を配信する仕組みを作っています。

#### 組織 / 役割

- CTO: 1名
- SWE(ソフトウェアエンジニア): 5名
- DS(データサイエンスエンジニア): 5名
- 基盤チーム(SRE): 2名

#### 使用技術

- フロントエンド: TypeScript、JavaScript、Vue.js
- サーバサイド: Golang、Python
- インフラ: GCP、GKE(Kubernetes)、Terraform
- その他: ElasticSearch、Redis、NewRelic、Bigquery、Spark、Notion

#### 主な担当業務

ソフトウェアエンジニアとして、広告配信サービスのモジュールオーナとして従事していました

#### バリューを発揮した点

- [✅ 広告配信サーバーのモジュールオーナーとして従事](https://www.notion.so/113fm992ce5a4837bd75b8403f69982b?pvs=21)
- [✅ A/Bテストの施策出し、実装、データ分析](https://www.notion.so/A-B-5b60a6d67aab4ec58ddfa8ff1d8d9640?pvs=21)
- [✅ 形態素解析器、Sudachiを使用できるようなgRPCサーバーの構築](https://www.notion.so/Sudachi-gRPC-532b29602d124a5aae1d587851589493?pvs=21)

### ⭐️ 複業： 営業マッチングプラットフォームの開発

- 期間: 2023/01 ~
- 事業内容: 営業マッチングプラットフォームの開発
- 役職: 業務委託
- 従業員数: 1名(社長のみ)

#### プロダクト概要

商材を売り込みたい営業者と、商材を導入(又は購入したい)経営者のマッチングプラットフォームの開発

#### 組織 / 役割

- プロダクトオーナ(社長): 1名
- SWE(ソフトウェアエンジニア): 2名
- デザイナー: 1名

#### 使用技術

- フロントエンド: TypeScript、React(Next.js)、StyledComponent
- サーバサイド: TypeScript、Nest.js、Prisma
- インフラ: AWS、Vercel、Planet Scale

#### 主な担当業務

前職の営業責任者が起業して、サービスの開発のお手伝いをさせていただいています。
Nest.jsでのサーバサイド、インフラ構築
- CDKによるインフラリソースの構築
- アーキテクチャ設計
- テスト環境の整備
- CI/CDの構築

### 🍀正社員2社目： 株式会社Another works

- 期間: 2021/06 ~ 2022/12
- 事業内容: 複業マッチングプラットフォームの開発・運用
- 役職: 正社員
- 従業員数: 40名

#### プロダクト概要

「複業したいユーザ様」と「複業人材を採用したい企業様」を繋げるマッチングプラットフォームを開発
[https://talent.aw-anotherworks.com](https://talent.aw-anotherworks.com/)

#### 組織 / 役割

- CTO: 1名
- CDO: 1名
- PdM: 1名
- フロントエンド: 2名
- サーバサイド: 1名（私）
- デザイナー: 1名

#### 使用技術

- フロントエンド: TypeScript、Next.js、React
- サーバサイド: TypeScript、Express、TypeORM、Rails
- その他: ElasticSearch、Redis、Sentry、Firebase、BigQuery、Payjp、Figma、Notion

#### 主な担当業務

専任のサーバサイドエンジニアは私1人なので、サーバサイドに関することはCTOにレビューを受けながら実装していました。
■ APIサーバを「TypeScript × Express × DDD」でリプレイス
- テーブル設計、 API設計、実装
- ドメインモデル図の作成
- Jestによるテスト実装
- バッチ処理の実装
- 技術調査、導入(ElasticSearch、Push通知、SendGridなど)
■ 既存のAPIサーバの新規機能の開発、保守改修(Rails)
- テーブル設計、 API設計、実装
- Rspecによるテスト実装
- バッチ処理の実装
- OpenAPIの導入、運用
- 機械学習用のCSVデータ作成
- Sentryの導入
- Bigqueryを用いて施策検証用のデータ出し
■ 開発以外の業務
- 他部門のフィードバック1次対応

#### バリューを発揮した点

- [✅ ユーザ検索機能：リプレイス、全文検索エンジンの実装、パフォーマンス・チューニング](https://www.notion.so/e6173b9426ca44309491a1798dacedab?pvs=21)
- [✅ RailsからNode.js(TypeScript)へのDDDの思想を取り入れたリプレイス](https://www.notion.so/Rails-Node-js-TypeScript-DDD-f58853b2c5974c8c8b0e0ad6c49a1eeb?pvs=21)
- [✅ 企業の登録処理のフルリプレイス](https://www.notion.so/ba3a10642ba84b71a1ea2b154c9ea9d7?pvs=21)
- [✅ ユースケース層のテストとインフラ層のテストの分割、基盤のテストコードの実装](https://www.notion.so/22fa1d3ee8df4539b278a755b8f88762?pvs=21)
- [✅ OpenAPI(StopLight)の導入](https://www.notion.so/OpenAPI-StopLight-b678c9063d5f441b8f39c7897ac5000c?pvs=21)
- [✅ 障害対応、Sentry対応](https://www.notion.so/Sentry-77db611139744ed798277a429108ad70?pvs=21)

### ⭐️ 複業： 法人向けクレジットサービス

- 期間: 2022/07~ 2022/11
- 事業内容: BtoBクレジットカード
- 雇用形態: 業務委託 (月稼働40~50時間ほど)

#### 使用技術

- 言語: Kotlin、Ktor

#### プロジェクト概要

BtoBクレジットカード
クレジット決済サービスなのでドメインの把握が難しいですが、既存の処理をデバッグして仕様把握することを心がけています。

#### 主な担当業務

特定の企業のクレジット決済情報を取得するAPIの作成
詳細
クレジットにはオーソリゼーション(クレジット決済が確認できる作業)とクリアリング（決済を確定させる作業）があり、これらのハンドリングがかなり複雑で苦労しました。
そのため予めテストケースを用意して、認識の齟齬がないかを確認しながら業務を遂行することで手戻りを最低限に抑えて実装を行いました。

### ⭐️ 複業： 新卒向け適性検査サービス

- 期間: 2022/01 ~ 06
- 事業内容: 相性がわかる適性検査サービス
- 雇用形態: 業務委託 (月稼働40~50時間ほど)

#### 使用技術

- 言語: TypeScript、Nestjs

#### プロジェクト概要

適性検査サービスのサーバサイド開発

#### 主な担当業務

- NestJSによるAPI作成、設計からテストまで担当
- ベトナム人のメンバーがいたのでドキュメントは英語で行っていた

#### 開発において意識した点

- 仕様について齟齬が発生しないようにドキュメントに残す
- 自分が設計した時点で正社員メンバーに認識合わせを行う
- 私の稼働時間が短く、バグが起きるとリリースにリードタイムが発生してしまうためテストを手厚くかくことを意識していました

### 🍀 正社員1社目：大手メーカー向け基幹システムの開発

- 期間: 2018/04/~2021/05
- 事業内容: 基幹システムの上流工程(要件定義、設計、テスト、リリース等)
- 役職: 正社員(システムエンジニア)
- 社員数: 約2000人

#### プロジェクト概要

メーカ系の基幹システムのプロジェクトメンバーとして複数の案件に参画
要件定義、基本設計を開発チームへ共有。その後、実装されたモジュールに対して様々な観点からテストケースを作成して問題が無いかを検証。3年間で20以上の案件に参画し、全て大きな遅延はなく納品しました。
また、業務改善にも注力しチームのドキュメントツールとしてNotionの導入などを行いました。

#### バリューを発揮した点

- [✅ ログファイル整形ツールの作成。展開](https://www.notion.so/5ed2d53758a749088beddcb5fe6574c6?pvs=21)
- [✅ 7人規模のチームにドキュメントツールNotionを導入](https://www.notion.so/7-Notion-246b19caea7a4552ad9df8036ee9e055?pvs=21)

## その他活動

- 技術書展(2023/11)にて書籍を発売
- 700冊ほど売り上げる
- [技術書展 販売ポスト](https://x.com/tomoya_sakusaku/status/1723167574983356558?s=20)

## ソーシャルメディア

- (Note: Source included a link to a Notion page. Replace this with public social media links if available.)
- [ソース内のリンク](https://www.notion.so/e961e9b3675647b4a069a792cb150e88?pvs=21)

## 人柄

- 好奇心旺盛
- 素直

[記事一覧](https://www.notion.so/cf98789acc4a44a29f6c3b3c277ea300?pvs=21)
