## 🚀 Clone

```bash
$ git clone https://github.com/dai-570415/gatsby-blog.git
$ cd gatsby-blog
$ npm install
```

## 🚀 Setting

### gatsby-config.js

```js
// ...省略
{
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: `YourKey`,
    accessToken: `YourKey`,
    host: process.env.CONTENTFUL_HOST,
  },
},
{
  resolve: "gatsby-plugin-firebase",
  options: {
    credentials: {
      apiKey: "YourKey",
      authDomain: "YourKey",
      databaseURL: "YourKey",
      projectId: "YourKey",
      storageBucket: "YourKey",
      messagingSenderId: "YourKey",
      appId: "YourKey",
      measurementId: "YourKey"
    }
  }
}
// ...省略
```

## 🚀 develop

```bash
$ gatsby develop
```