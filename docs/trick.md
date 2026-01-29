# SVG icon đổi màu theo color - mask-image

```html
<span class="icon icon--check"></span>
```

```css
.icon {
  width: 24px;
  height: 24px;

  background-color: currentColor;

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  -webkit-mask-position: center;
  mask-position: center;

  -webkit-mask-size: contain;
  mask-size: contain;
}

.icon--check {
  -webkit-mask-image: url("/icons/check.svg");
  mask-image: url("/icons/check.svg");
}
```

```html
<span class="icon icon--check" style="color: green"></span>
```

✔ Icon màu xanh
✔ Không JS
✔ CMS-friendly
✔ Reuse tốt
