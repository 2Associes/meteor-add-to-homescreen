# Add To Home Screen
A basic iOS devices "Add to Home Screen" solution for Meteor PWA projects.

## Contents
1. Installation
2. Basic Usage
3. Customization
4. Authors
5. License

### Installation
To get this package into your app, run the following command from within your project's directory:

```
meteor add 2associes:a2h
```

### Basic Usage
To get this package up and running, you have to initialize it on `Meteor.startup()` like so:

```js
Meteor.startup(() => {
  AddToHomeScreen.init({
    image: 'http://placehold.it/180',
    text: 'Install this web app on your device: tap the <strong>Share</strong> icon and then <strong>Add to Home Screen.</strong>',
    close: 'Close',
    recurrences: 3
  })
})
```

Which will render this:

```html
<div class="a2h">
  <figure class="a2h-figure">
    <img class="a2h-image" src="http://placehold.it/180" alt="Application icon">
  </figure>
  <p class="a2h-text">
    Install this web app on your device: tap the <strong>Share</strong> icon and then <strong>Add to Home Screen.</strong>
  </p>
  <button class="a2h-close">
    Close
  </button>
</div>
```

Those are the default settings that you can change.

- `image` : URL of the image.
- `text` : Message telling the user to add the app to their home screen. This parameter will render any HTML you pass through.
- `close` : Close button text. This parameter will also render any HTML you pass through.
- `recurrences` : The number of sessions the component will appear. Local storage is used to keep track of the recurrences.

### Customization

The markup is pretty basic so there's not a lot of room for customization. However, you can overwrite the styles to make it look the way you want.

You can take a look at the default styles [here](https://github.com/2associes/meteor-add-to-homescreen/blob/master/client/a2h.scss).

### Authors

* **Hugues Brunelle** - *Lead Front-end Developer* - [2 Associés](https://github.com/2Associes)
* **Andrés Flores** - *Front-end Developer* - [andresfloresdev](https://github.com/andresfloresdev)
* **Nicolas Harnois** - *Internationalization and localization* - [2 Associés](https://github.com/2Associes)
* **Simon Martineau** - *Front-end Developer* - [marsimeau](https://github.com/marsimeau)

### License
The code for this package is licensed under the [MIT License](http://opensource.org/licenses/MIT).
