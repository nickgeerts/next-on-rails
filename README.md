# Next on Rails

Example of a Next.js frontend on a Ruby on Rails backend.

## Prepare

Install the dependencies for the Rails API.

```
pushd api && bundle install && popd
```

Install the dependencies for the Next.js app.

```
pushd web && yarn install && popd
```

You also need foreman to start the apps.

```
gem install foreman
```

## Run

Start both apps:

```
foreman start
```
