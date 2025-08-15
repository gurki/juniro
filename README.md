# jūniro 🍂
> from _"jūni no iro"_ — _"the twelve colors"_

A 12-color palette inspired by the **Japanese sekki** (microseasons), mapped to each month of the year. Each color reflects seasonal changes in nature, festivals, and traditional imagery.

![overview](img/preview.png)


## 📅 The Twelve Colors

|                                 Color                                  | Month | Name               | Sekki            | Meaning                       | Hex       | RGB                  |
| :--------------------------------------------------------------------: | :---: | ------------------ | ---------------- | ----------------------------- | --------- | -------------------- |
| ![color](https://img.shields.io/badge/-%20-3dbed2?style=for-the-badge) |  Jan  | Clear Ice          | 小寒 (Shōkan)    | Deep winter, frozen rivers    | `#3dbed2` | `rgb(61, 190, 210)`  |
| ![color](https://img.shields.io/badge/-%20-40c3ae?style=for-the-badge) |  Feb  | Budding Shore      | 雨水 (Usui)      | Snow melts, water flows       | `#40c3ae` | `rgb(64, 195, 174)`  |
| ![color](https://img.shields.io/badge/-%20-5ac577?style=for-the-badge) |  Mar  | Sprouting Fields   | 啓蟄 (Keichitsu) | First shoots emerge           | `#5ac577` | `rgb(90, 197, 119)`  |
| ![color](https://img.shields.io/badge/-%20-a0b93b?style=for-the-badge) |  Apr  | Young Rice         | 清明 (Seimei)    | Fields turn fresh green       | `#a0b93b` | `rgb(160, 185, 59)`  |
| ![color](https://img.shields.io/badge/-%20-cca737?style=for-the-badge) |  May  | Early Grain        | 小満 (Shōman)    | Barley ripens                 | `#cca737` | `rgb(204, 167, 55)`  |
| ![color](https://img.shields.io/badge/-%20-ea9549?style=for-the-badge) |  Jun  | Summer Sol         | 夏至 (Geshi)     | Sun at its zenith             | `#ea9549` | `rgb(234, 149, 73)`  |
| ![color](https://img.shields.io/badge/-%20-f28a7a?style=for-the-badge) |  Jul  | Heat Haze          | 小暑 (Shōsho)    | Warm winds, cicadas sing      | `#f28a7a` | `rgb(242, 138, 122)` |
| ![color](https://img.shields.io/badge/-%20-f481a8?style=for-the-badge) |  Aug  | Evening Festival   | お盆 (Obon)      | Lanterns and blossoms         | `#f481a8` | `rgb(244, 129, 168)` |
| ![color](https://img.shields.io/badge/-%20-e382dc?style=for-the-badge) |  Sep  | Purple Dew         | 白露 (Hakuro)    | Cool mornings, autumn flowers | `#e382dc` | `rgb(227, 130, 220)` |
| ![color](https://img.shields.io/badge/-%20-b996f5?style=for-the-badge) |  Oct  | Chrysanthemum Moon | 観月 (Kangetsu)  | Harvest moon nights           | `#b996f5` | `rgb(185, 150, 245)` |
| ![color](https://img.shields.io/badge/-%20-8fa8f3?style=for-the-badge) |  Nov  | Early Frost        | 霜降 (Sōkō)      | Frost on the fields           | `#8fa8f3` | `rgb(143, 168, 243)` |
| ![color](https://img.shields.io/badge/-%20-5db5ef?style=for-the-badge) |  Dec  | Winter Sky         | 冬至 (Tōji)      | Clear, cold solstice days     | `#5db5ef` | `rgb(93, 181, 239)`  |


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