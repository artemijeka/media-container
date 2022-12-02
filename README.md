data-media-container - обязательно установить контейнеру 
`<div class="container" data-media-container></div>`

***

и запустить скрипт 
```
<script src="media-content.js"></script>
<script>
  new MediaContainer({
    // Требуемые медиа запросы:
    medias: [1440, 1280, 1200, 992],
    resizeTimeout: 500,
  });
</script>
```

***

в контейнер будут присваиваться условные медиа данные контейнера, например: 
`<div class="container" data-media-container="<1439,<1279,<1199,>=992">`
***
затем в `SCSS` можно пользоваться медиа запросами к контейнеру 
```
.container[data-media-container*=">=1200"] {
  .box {
    background-color: purple;
  }
  .box2 {
    background-color: red;
  }
}
```

или в `CSS` можно пользоваться медиа запросами к контейнеру 
```
.container[data-media-container*=">=1200"] .box {
  background-color: purple;
}
  
.container[data-media-container*=">=1200"] .box2 {
  background-color: red;
}
```