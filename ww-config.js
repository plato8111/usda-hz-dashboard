export default {
  editor: {
    label: {
      en: "USDA Hardiness Zone Dashboard",
    },
    icon: "fontawesome/solid/chart-area",
  },
  properties: {
    // ========================================
    // DATA PROPERTIES (from Finder component)
    // ========================================

    currentLocation: {
      label: { en: "Current Location" },
      type: "Object",
      section: "settings",
      bindable: true,
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
        type: "object",
        tooltip: "Bind to [Finder].currentLocation - Object with lat/lng"
      },
      propertyHelp: "Connect to USDA HZ Finder component's currentLocation output"
      /* wwEditor:end */
    },

    calculatedZone: {
      label: { en: "Calculated Zone" },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: "",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Bind to [Finder].calculatedZone - e.g., '7a', '8b'"
      },
      propertyHelp: "Connect to USDA HZ Finder component's calculatedZone output"
      /* wwEditor:end */
    },

    minTemperature: {
      label: { en: "Minimum Temperature" },
      type: "Number",
      section: "settings",
      bindable: true,
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
        type: "number",
        tooltip: "Bind to [Finder].minTemperature"
      },
      propertyHelp: "Raw minimum temperature value from Finder"
      /* wwEditor:end */
    },

    minTemperatureConverted: {
      label: { en: "Min Temperature (Converted)" },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: "",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Bind to [Finder].minTemperatureConverted"
      },
      propertyHelp: "Temperature converted to user's preferred unit"
      /* wwEditor:end */
    },

    temperatureUnitLabel: {
      label: { en: "Temperature Unit Label" },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: "°F",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Bind to [Finder].temperatureUnitLabel - e.g., '°F' or '°C'"
      }
      /* wwEditor:end */
    },

    availableStations: {
      label: { en: "Available Stations (Raw)" },
      type: "Array",
      section: "settings",
      bindable: true,
      defaultValue: [],
      /* wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip: "Bind to [Finder].availableStations"
      },
      propertyHelp: "Raw station data from Finder"
      /* wwEditor:end */
    },

    availableStationsConverted: {
      label: { en: "Available Stations (Converted)" },
      type: "Array",
      section: "settings",
      bindable: true,
      defaultValue: [],
      /* wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip: "Bind to [Finder].availableStationsConverted"
      },
      propertyHelp: "Stations with converted distance units"
      /* wwEditor:end */
    },

    distanceUnitLabel: {
      label: { en: "Distance Unit Label" },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: "km",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Bind to [Finder].distanceUnitLabel - e.g., 'km' or 'mi'"
      }
      /* wwEditor:end */
    },

    selectedStation: {
      label: { en: "Selected Station" },
      type: "Object",
      section: "settings",
      bindable: true,
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
        type: "object",
        tooltip: "Bind to [Finder].selectedStation"
      },
      propertyHelp: "Currently selected weather station"
      /* wwEditor:end */
    },

    frostDates: {
      label: { en: "Frost Dates" },
      type: "Object",
      section: "settings",
      bindable: true,
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
        type: "object",
        tooltip: "Bind to [Finder].frostDates - Object with lastSpringFrost, firstFallFrost"
      },
      propertyHelp: "Frost date information from Finder"
      /* wwEditor:end */
    },

    calendarEvents: {
      label: { en: "Calendar Events" },
      type: "Array",
      section: "settings",
      bindable: true,
      defaultValue: [],
      /* wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip: "Bind to [Finder].calendarEvents"
      },
      propertyHelp: "Planting calendar events"
      /* wwEditor:end */
    },

    moistureZone: {
      label: { en: "Moisture Zone" },
      type: "Object",
      section: "settings",
      bindable: true,
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
        type: "object",
        tooltip: "Bind to [Finder].moistureZone"
      },
      propertyHelp: "Moisture zone information"
      /* wwEditor:end */
    },

    extremeWeather: {
      label: { en: "Extreme Weather Events" },
      type: "Array",
      section: "settings",
      bindable: true,
      defaultValue: [],
      /* wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip: "Bind to [Finder].extremeWeather"
      },
      propertyHelp: "Historical extreme weather data"
      /* wwEditor:end */
    },

    analysisResult: {
      label: { en: "Analysis Result" },
      type: "Object",
      section: "settings",
      bindable: true,
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
        type: "object",
        tooltip: "Bind to [Finder].analysisResult"
      },
      propertyHelp: "Full analysis result object from Finder"
      /* wwEditor:end */
    },

    // ========================================
    // STATE PROPERTIES
    // ========================================

    status: {
      label: { en: "Status" },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: "idle",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Bind to [Finder].status - 'idle' | 'loading' | 'success' | 'error'"
      },
      propertyHelp: "Current status of data loading"
      /* wwEditor:end */
    },

    isLoading: {
      label: { en: "Is Loading" },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
      /* wwEditor:start */
      bindingValidation: {
        type: "boolean",
        tooltip: "Bind to [Finder].isLoading"
      },
      propertyHelp: "Shows loading state when true"
      /* wwEditor:end */
    },

    errorMessage: {
      label: { en: "Error Message" },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: "",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Bind to [Finder].errorMessage"
      },
      propertyHelp: "Error message from Finder component"
      /* wwEditor:end */
    },

    errorSuggestions: {
      label: { en: "Error Suggestions" },
      type: "Array",
      section: "settings",
      bindable: true,
      defaultValue: [],
      /* wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip: "Bind to [Finder].errorSuggestions"
      },
      propertyHelp: "Suggested fixes for errors"
      /* wwEditor:end */
    },

    // ========================================
    // DISPLAY SETTINGS
    // ========================================

    theme: {
      label: { en: "Theme" },
      type: "TextSelect",
      section: "style",
      options: {
        options: [
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" }
        ]
      },
      defaultValue: "light",
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "Valid values: light | dark"
      }
      /* wwEditor:end */
    },

    accentColor: {
      label: { en: "Accent Color" },
      type: "Color",
      section: "style",
      defaultValue: "#22c55e",
      bindable: true,
    },

    backgroundColor: {
      label: { en: "Background Color" },
      type: "Color",
      section: "style",
      defaultValue: "#ffffff",
      bindable: true,
    },

    cardBackgroundColor: {
      label: { en: "Card Background Color" },
      type: "Color",
      section: "style",
      defaultValue: "#f9fafb",
      bindable: true,
    },

    textColor: {
      label: { en: "Text Color" },
      type: "Color",
      section: "style",
      defaultValue: "#111827",
      bindable: true,
    },

    borderRadius: {
      label: { en: "Border Radius" },
      type: "Length",
      section: "style",
      defaultValue: "12px",
      bindable: true,
    },

    // ========================================
    // CARD VISIBILITY TOGGLES
    // ========================================

    showLocationCard: {
      label: { en: "Show Location Card" },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true,
    },

    showZoneCard: {
      label: { en: "Show Zone Card" },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true,
    },

    showStationsCard: {
      label: { en: "Show Stations Card" },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true,
    },

    showFrostDatesCard: {
      label: { en: "Show Frost Dates Card" },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true,
    },

    showMoistureCard: {
      label: { en: "Show Moisture Card" },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true,
    },

    showCalendarCard: {
      label: { en: "Show Calendar Card" },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true,
    },

    showExtremeWeatherCard: {
      label: { en: "Show Extreme Weather Card" },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true,
    },

    // ========================================
    // UI OPTIONS
    // ========================================

    compactMode: {
      label: { en: "Compact Mode" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      bindable: true,
      /* wwEditor:start */
      propertyHelp: "Enable compact layout for smaller spaces"
      /* wwEditor:end */
    },

    animationsEnabled: {
      label: { en: "Enable Animations" },
      type: "OnOff",
      section: "settings",
      defaultValue: true,
      bindable: true,
      /* wwEditor:start */
      propertyHelp: "Toggle smooth animations and transitions"
      /* wwEditor:end */
    },
  },

  triggerEvents: [
    {
      name: "station-clicked",
      label: { en: "Station Clicked" },
      event: {
        stationId: "",
        station: {}
      },
      /* wwEditor:start */
      propertyHelp: "Triggered when user clicks a weather station in the list"
      /* wwEditor:end */
    },
  ],
};
