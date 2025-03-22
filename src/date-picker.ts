import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { enUS } from "date-fns/locale/en-US";

const adapterLocale = enUS;

export { LocalizationProvider, AdapterDateFns, adapterLocale };
