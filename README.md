# jūniro 🍂
> from _"jūni no iro"_ — _"the twelve colors"_

A 12-color palette inspired by the **Japanese sekki** (microseasons), mapped to each month of the year. Each color reflects seasonal changes in nature, festivals, and traditional imagery.

![overview](img/preview.png)


## 📅 The Twelve Colors

| Color                                                                 | Month | Name               | Sekki            | Meaning                       | Hex        | RGB                       |
| --------------------------------------------------------------------- | ----- | ------------------ | ---------------- | ----------------------------- | ---------- | ------------------------- |
| <span style="display:inline-block;width:16px;height:16px;background:#3dbed2;border:1px solid #ccc;"></span> | Jan   | Clear Ice          | 小寒 (Shōkan)    | Deep winter, frozen rivers    | `#3dbed2` | `rgb(61, 190, 210)`       |
| <span style="display:inline-block;width:16px;height:16px;background:#40c3ae;border:1px solid #ccc;"></span> | Feb   | Budding Shore      | 雨水 (Usui)      | Snow melts, water flows       | `#40c3ae` | `rgb(64, 195, 174)`       |
| <span style="display:inline-block;width:16px;height:16px;background:#5ac577;border:1px solid #ccc;"></span> | Mar   | Sprouting Fields   | 啓蟄 (Keichitsu) | First shoots emerge           | `#5ac577` | `rgb(90, 197, 119)`       |
| <span style="display:inline-block;width:16px;height:16px;background:#a0b93b;border:1px solid #ccc;"></span> | Apr   | Young Rice         | 清明 (Seimei)    | Fields turn fresh green       | `#a0b93b` | `rgb(160, 185, 59)`       |
| <span style="display:inline-block;width:16px;height:16px;background:#cca737;border:1px solid #ccc;"></span> | May   | Early Grain        | 小満 (Shōman)    | Barley ripens                 | `#cca737` | `rgb(204, 167, 55)`       |
| <span style="display:inline-block;width:16px;height:16px;background:#ea9549;border:1px solid #ccc;"></span> | Jun   | Summer Sol         | 夏至 (Geshi)     | Sun at its zenith             | `#ea9549` | `rgb(234, 149, 73)`       |
| <span style="display:inline-block;width:16px;height:16px;background:#f28a7a;border:1px solid #ccc;"></span> | Jul   | Heat Haze          | 小暑 (Shōsho)    | Warm winds, cicadas sing      | `#f28a7a` | `rgb(242, 138, 122)`      |
| <span style="display:inline-block;width:16px;height:16px;background:#f481a8;border:1px solid #ccc;"></span> | Aug   | Evening Festival   | お盆 (Obon)      | Lanterns and blossoms         | `#f481a8` | `rgb(244, 129, 168)`      |
| <span style="display:inline-block;width:16px;height:16px;background:#e382dc;border:1px solid #ccc;"></span> | Sep   | Purple Dew         | 白露 (Hakuro)    | Cool mornings, autumn flowers | `#e382dc` | `rgb(227, 130, 220)`      |
| <span style="display:inline-block;width:16px;height:16px;background:#b996f5;border:1px solid #ccc;"></span> | Oct   | Chrysanthemum Moon | 観月 (Kangetsu)  | Harvest moon nights           | `#b996f5` | `rgb(185, 150, 245)`      |
| <span style="display:inline-block;width:16px;height:16px;background:#8fa8f3;border:1px solid #ccc;"></span> | Nov   | Early Frost        | 霜降 (Sōkō)      | Frost on the fields           | `#8fa8f3` | `rgb(143, 168, 243)`      |
| <span style="display:inline-block;width:16px;height:16px;background:#5db5ef;border:1px solid #ccc;"></span> | Dec   | Winter Sky         | 冬至 (Tōji)      | Clear, cold solstice days     | `#5db5ef` | `rgb(93, 181, 239)`       |


## 📦 Usage

### CSS
```css
@import url('juniro.css');

body {
  background-color: var(--jan-clear-ice);
}
```

### JSON
```json
{
  "jan-clear-ice":          "#3dbed2",
  "feb-budding-shore":      "#40c3ae",
  "mar-sprouting-fields":   "#5ac577",
  "apr-young-rice":         "#a0b93b",
  "may-early-grain":        "#cca737",
  "jun-summer-sol":         "#ea9549",
  "jul-heat-haze":          "#f28a7a",
  "aug-evening-festival":   "#f481a8",
  "sep-purple-dew":         "#e382dc",
  "oct-chrysanthemum-moon": "#b996f5",
  "nov-early-frost":        "#8fa8f3",
  "dec-winter-sky":         "#5db5ef"
}
```


## 🌐 Demo
[Live Preview](https://gurki.github.io/juniro/)


## 📜 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: CC0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

- **Code** (CSS, JSON, SCSS) is licensed under the [MIT License](LICENSE.md#mit-license-for-code).
- **Text and images** are released under [CC0 1.0 Universal](LICENSE.md#cc0-10-universal-for-text--images) — public domain, no restrictions.