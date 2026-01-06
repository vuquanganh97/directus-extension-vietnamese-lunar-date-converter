# Lunar Date Converter

A Directus display extension that converts Gregorian dates to Vietnamese lunar calendar dates with support for Heavenly Stems and Earthly Branches (Can Chi) system.

This extension is built using the [@dqcai/vn-lunar](https://github.com/cuongdqpayment/dqcai-vn-lunar) library by [cuongdqpayment](https://github.com/cuongdqpayment). 

## Description

This extension provides a custom display format for date fields in Directus, showing Vietnamese lunar calendar dates with optional Heavenly Stems and Earthly Branches (Can Chi) formatting. It allows you to customize which parts of the date (day, month, year) should display using the traditional Can Chi system.

## Features

- **Dual Calendar Display**: Shows both Gregorian and Vietnamese lunar calendar dates
- **Heavenly Stems and Earthly Branches (Can Chi)**: Optional display of traditional Vietnamese date formatting for day, month, and/or year
- **Flexible Configuration**: Choose which parts (date, month, year) should use Can Chi formatting
- **Toggle Gregorian Date**: Option to show or hide the Gregorian date

## Requirements

- Directus 10.10.0 or higher
- Node.js 22 or higher (for building)

## Installation

1. Copy this extension to your Directus extensions directory:
   ```bash
   cp -r directus-extension-vietnamese-lunar-date-converter /path/to/directus/extensions/
   ```

2. Install dependencies:
   ```bash
   cd extensions/directus-extension-vietnamese-lunar-date-converter
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build
   ```

4. Restart Directus or ensure `EXTENSIONS_AUTO_RELOAD` is enabled in your environment variables.

## Usage

1. Go to **Settings** → **Data Model** in your Directus admin panel
2. Navigate to your collection
3. Click on the date field you want to customize
4. In the **Display** dropdown, select **"Gregorian to Vietnamese Lunar Calendar Converter"**
5. Configure the display options:
   - **Display Heavenly Stems and Earthly Branches**: Select which parts (Date, Month, Year) should use Can Chi formatting
   - **Display Gregorian Date**: Toggle to show or hide the Gregorian date
6. Save the field settings

![Extension Configuration](screenshots/configs.png)

## Configuration Options

### Display Heavenly Stems and Earthly Branches

A multi-select dropdown that allows you to choose which parts of the lunar date should display using the Can Chi system:

- **Date**: Display the day using Heavenly Stems and Earthly Branches
- **Month**: Display the month using Heavenly Stems and Earthly Branches
- **Year**: Display the year using Heavenly Stems and Earthly Branches

You can select any combination of these options, or none at all.

### Display Gregorian Date

A boolean toggle that controls whether the Gregorian date is displayed:
- **Enabled**: Shows the Gregorian date in the format `DD/MM/YYYY Dương Lịch`
- **Disabled**: Only shows the lunar date

## Display Format

The extension displays dates in the following format:

**When Gregorian date is enabled:**
```
06/01/2026 Dương Lịch
Ngày 18 tháng 11 năm Bính Ngọ
```

**When Gregorian date is disabled:**
```
Ngày 18 tháng 11 năm Bính Ngọ
```

![Value Display](screenshots/display.png)

## Development

### Build

```bash
npm run build
```

### Development Mode

Watch for changes and rebuild automatically:

```bash
npm run dev
```

## Dependencies

- `@dqcai/vn-lunar`: Vietnamese lunar calendar conversion library
- `@directus/extensions-sdk`: Directus extensions SDK
- `vue`: Vue.js framework
- `typescript`: TypeScript support

## Project Structure

```
directus-extension-vietnamese-lunar-date-converter/
├── src/
│   ├── display.vue      # Main display component
│   ├── index.ts         # Extension entry point
│   └── shims.d.ts       # TypeScript declarations
├── dist/                # Built extension (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## Design Decisions

### Library Choice
- **Selected `@dqcai/vn-lunar`**: Chose this library because it provides comprehensive Vietnamese lunar calendar conversion functionality, including both standard lunar date conversion and Can Chi (Heavenly Stems and Earthly Branches) calculations. The library abstracts away the complex astronomical calculations required for accurate lunar calendar conversions.

### Configuration Interface
- **Multi-select Dropdown for Can Chi Options**: Chose `select-multiple-dropdown` interface type to allow users to independently select which parts of the date (day, month, year) should use Can Chi formatting. This provides maximum flexibility without requiring multiple separate boolean toggles.
- **Boolean Toggle for Gregorian Date**: Simple boolean toggle provides an intuitive on/off control for displaying the Gregorian date, with a clear default value of `true`.

## Assumptions

1. **Date Format**: The input date value from Directus date fields is in a format that can be directly parsed by JavaScript's `Date` constructor (typically ISO 8601 format).

2. **Date Range Support**: The `@dqcai/vn-lunar` library supports conversion for the date ranges that will be used in the application. Some libraries may have limitations on historical dates.

3. **User Context**: Users of this extension are familiar with Vietnamese culture and understand the Vietnamese lunar calendar system, or are using the extension in a context where this knowledge is available.

4. **Directus Version**: The extension is designed for Directus 10.10.0 or higher, assuming the Extensions SDK APIs used are stable and available in these versions.

5. **Field Type**: The extension only works with `date` field types in Directus. Users are expected to configure it only on appropriate field types.

6. **Timezone Handling**: Dates are processed in the browser's local timezone or the server's timezone, depending on how Directus stores and retrieves date values. No explicit timezone conversion is performed.

## What I'd Do Next with More Time

### Error Handling & Validation
- **Invalid Date Handling**: Add comprehensive error handling for invalid or unparseable date strings, displaying user-friendly error messages instead of breaking the display.
- **Date Range Validation**: Validate that dates fall within the supported conversion range of the lunar calendar library, with appropriate error messages for out-of-range dates.

### Enhanced Features
- **Custom Format Options**: Allow users to customize the date format strings (e.g., different separators, order of components, custom text labels).
- **Time Zone Support**: Add configuration options for explicit timezone handling to ensure accurate date conversion regardless of server/client location.
- **Datetime Field Support**: Extend the extension to support `datetime`, `timestamps` field types, with options to display or hide the time component.
- **Date Range Display**: Add support for displaying date ranges (start and end dates) with lunar calendar conversion for both endpoints.

### Localization & Internationalization
- **Multi-language Support**: Add i18n support for the display labels, allowing the extension to be used in different languages while maintaining Vietnamese lunar calendar accuracy.
- **Regional Variations**: Consider support for different regional variations of lunar calendar systems if applicable.

### Testing & Quality Assurance
- **Unit Tests**: Implement comprehensive unit tests for date conversion logic, edge cases, and configuration handling.
- **Integration Tests**: Add integration tests within the Directus environment to ensure proper behavior across different Directus versions.
- **Accessibility Testing**: Ensure the display is accessible to screen readers and follows WCAG guidelines.
