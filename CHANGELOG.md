# Changelog

**Note:** This changelog is unmaintained as of 07/25/2022.

---

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.0] - 2022-05-17

### Added

- Added Mini-Mart Snack Decor ([#6](https://github.com/Notuom/pikmin-bloom-checklist/issues/6))
- Added Shiny Restaurant Decor ([#7](https://github.com/Notuom/pikmin-bloom-checklist/issues/7))

### Fixed

- Upgraded `minimist` dependency to fix vulnerability

## [1.5.0] - 2022-04-12

### Added

- Added Sushi Restaurant Decor ([#5](https://github.com/Notuom/pikmin-bloom-checklist/issues/5))

## [1.4.0] - 2022-03-21

### Added

- Added St. Patrick's Day alternate Park Four Leaf Clover Decor ([#4](https://github.com/Notuom/pikmin-bloom-checklist/issues/4))

## [1.3.1] - 2022-02-20

### Fixed

- Fixed ReactTooltip not working after switching views

## [1.3.0] - 2022-02-20

### Added

- Support 0-9 for roadside stickers
- Support seasonal & special decor: Nintendo Account, Roadside Winter Stickers, Lunar New Year ([#3](https://github.com/Notuom/pikmin-bloom-checklist/issues/3))
- 3 views which show various levels of detail for decor collections: Simple, Advanced, Exhaustive
- Support multiple colors for roadside stickers (exhaustive view) ([#2](https://github.com/Notuom/pikmin-bloom-checklist/issues/2))
- Proper versioning and error handling for exporting/import collections
- Informative tooltip when clicking decor icons

### Changed

- Migrated to TypeScript
- Refactored decor definition to support views & seasonal/special decors

## [1.2.0] - 2021-12-27

### Added

- Added hamburger-shop to decors ([#1](https://github.com/Notuom/pikmin-bloom-checklist/pull/1))

## [1.1.0] - 2021-12-17

### Added

- Introduced changelog and version tracking
- New status: 🌿 to track seedlings
- Individual stickers for roadside Pikmin can now be tracked

### Changed

- Status toggle order changed from ❌➡✅➡🥚 to ❌➡🌿➡🥚➡✅ (chronological order)
- Table header now sticks to the top of the page when scrolling
- Row colors now alternate background colors
- Added details to README

### Fixed

- URL sharing now consistently selects the URL in the text box

## [1.0.0] - 2021-11-22

### Added

- Decor Pikmin checklist which saves to local storage
- Sharing via URL
- "About" section

[unreleased]: https://github.com/Notuom/pikmin-bloom-checklist/compare/v1.6.0...HEAD
[1.6.0]: https://github.com/Notuom/pikmin-bloom-checklist/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/Notuom/pikmin-bloom-checklist/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/Notuom/pikmin-bloom-checklist/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/Notuom/pikmin-bloom-checklist/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/Notuom/pikmin-bloom-checklist/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Notuom/pikmin-bloom-checklist/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Notuom/pikmin-bloom-checklist/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Notuom/pikmin-bloom-checklist/releases/tag/v1.0.0
