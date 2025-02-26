set dotenv-load

export EDITOR := 'nvim'

default:
  just --list

deploy:
  bun run build && bunx gh-pages -d dist

dev:
  bun run dev

fmt:
  prettier --write .

lint:
  bunx eslint .

unused-deps:
  bunx knip --production --dependencies --files
