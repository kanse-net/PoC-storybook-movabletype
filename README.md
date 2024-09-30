# PoC-storybook-movabletype

## Docker コマンド

### コンテナに入る

https://docs.docker.jp/engine/reference/commandline/exec.html

```bash
docker exec -it PoC-storybook-movabletype bash
```

# docker-compose

## コマンド

https://docs.docker.jp/compose/reference/docker-compose.html

### コンテナの構築

```bash
docker-compose build
```

https://docs.docker.jp/compose/reference/build.html

### サービス用のコンテナを構築、作成、起動、アタッチします。

```bash
docker-compose up -d
```

https://docs.docker.jp/compose/reference/up.html

-d はデタッチド・モード（バックグラウンドで起動）

### 稼働中のコンテナを停止します

```bash
docker-compose stop
```

## メモ

### npm install vite

### npx storybook@latest init --type html

### npm run storybook

> ブラウザを開こうとしたので
> --no-open
> https://storybook.js.org/docs/api/cli-options
