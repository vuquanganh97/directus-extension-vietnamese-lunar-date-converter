import { defineDisplay } from "@directus/extensions-sdk";
import DisplayComponent from "./display.vue";

export default defineDisplay({
  id: "directus-extension-vietnamese-lunar-date-converter",
  name: "Gregorian to Vietnamese Lunar Calendar Converter",
  icon: "box",
  description: "Convert Gregorian date to Vietnamese lunar date",
  component: DisplayComponent,
  options: [
    {
      field: "displayHeavenlyStemsAndEarthlyBranches",
      type: "json",
      name: "Display Heavenly Stems and Earthly Branches",
      meta: {
        interface: "select-multiple-dropdown",
        options: {
          choices: [
            {
              text: "Date",
              value: "date",
            },
            {
              text: "Month",
              value: "month",
            },
            {
              text: "Year",
              value: "year",
            },
          ],
        },
        note: `Select which parts (date, month, year) should display Heavenly Stems and Earthly Branches. Learn more about <a href="https://en.wikipedia.org/wiki/Heavenly_Stems" target="_blank">Heavenly Stems</a> and <a href="https://en.wikipedia.org/wiki/Earthly_Branches" target="_blank">Earthly Branches</a>.`,
      },
    },
    {
      field: "displayGregorianDate",
      type: "boolean",
      name: "Display Gregorian Date",
      meta: {
        interface: "boolean",
        options: {
          label: "Yes",
        },
      },
    },
  ],
  types: ["date"],
});
