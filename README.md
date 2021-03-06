
<p align="center">
<img src="https://makeshiftjess.github.io/pelican_town/img/project_name.png">
</p>

# Pelican Town
A travel website for Pelican Town in Stardew Valley.

*Created for Code Louisville Front End Web Development final project.*

## Features
### Media queries
- [x] Layout change at 580px wide
- [x] Layout change/reordered content at 1400px wide
- [x] Extra content visible at 1400px+
<p align="center">
<img src="https://makeshiftjess.github.io/pelican_town/img/preview.png" height="200">
<img src="https://makeshiftjess.github.io/pelican_town/img/preview_580.png" height="200">
<img src="https://makeshiftjess.github.io/pelican_town/img/preview_1400.png" height="200">
</p>

### CSS
- [x] Expanding menu
- [x] Flexbox layout changes
- [x] CSS animation
<p align="center">
<img src="https://makeshiftjess.github.io/pelican_town/img/preview_animation.gif" height="100">
</p>

### JavaScript
- [x] Show/hide content (letter, menu)
- [x] Background change based on time of day
<p align="center">
<img src="https://makeshiftjess.github.io/pelican_town/img/sdv_dawn.png" height="80">
<img src="https://makeshiftjess.github.io/pelican_town/img/sdv_morning.png" height="80">
<img src="https://makeshiftjess.github.io/pelican_town/img/sdv_day.png" height="80">
<img src="https://makeshiftjess.github.io/pelican_town/img/sdv_sunset.png" height="80">
<img src="https://makeshiftjess.github.io/pelican_town/img/sdv_night.png" height="80">
</p>

## How To
### Simulate different time of day
Line **13** of **script.js** contains instructions on how to simulate different times of day:
```javascript
// CHANGE TO SIMULATE DIFFERENT TIMES OF DAY
// 0-3 night
// 4-6 dawn
// 7-10 morning
// 11-17 day
// 18-19 sunset
// 20-23 night

hour = 11;
```