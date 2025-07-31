# Changelog

All notable changes to the Image Carousel will be documented here.

---

## [Unreleased]

### Added (Planned)

- Auto-advance with configurable intervals
- Optional infinite loop mode
- Programmatic control:
  - `pause()`, `resume()`, `reset()`
  - `updateConfig(config)`
- Additional configuration options:
  - `animation` settings (duration, easing)
  - `scale` behavior
- CSS customization

## [1.0.0] – 2025-06-28

### Added

- Core carousel functionality:
  - `initialize()`, `destroy()`
  - `goToNext()`, `goToPrevious()`, `goToIndex(index)`
  - `getCurrentIndex()`
- Multiple navigation methods:
  - On-screen **Previous / Next buttons**
  - Clickable **indicator dots**
  - **Keyboard arrow keys** (←, →), Home and End support
- Keyboard navigation (arrow keys)
- TypeScript support
- Minimal CSS

### Features

- Customizable via configuration
- Clean and extensible
- Keyboard accessible
- Zero dependencies
