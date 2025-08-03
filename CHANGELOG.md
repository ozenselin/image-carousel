# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

## [1.1.0] - 2025-08-04

### Added
- **SVG Icons:** Replaced text-based buttons with SVG icons for all navigation controls.
- **Overlay Navigation:** Implemented a modern overlay navigation layer, vertically centered over the slides.
- **Multiple Control Sets:** Added support in the JavaScript logic to handle multiple sets of navigation controls simultaneously.

### Changed
- **CSS Architecture:** Refactored the entire stylesheet to use CSS Custom Properties for all colors, sizes, and spacing, significantly improving maintainability and enabling theming.
- **Documentation:** Updated `README.md` with more detailed usage instructions.

### Fixed
- Ensured DOM updates are correctly triggered when calling the `goToIndex` function.

## [1.0.0] - 2025-06-28

### Added
- Core carousel functionality: `initialize()`, `destroy()`, `goToNext()`, `goToPrevious()`, `goToIndex()`.
- Multiple navigation methods: on-screen buttons, clickable indicator dots, and keyboard support (arrow keys, Home, End).
- Zero-dependency Vanilla JS architecture.
- Base styling for all components.


[Unreleased]: https://github.com/ozenselin/image-carousel/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/ozenselin/image-carousel/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/ozenselin/image-carousel/releases/tag/v1.0.0