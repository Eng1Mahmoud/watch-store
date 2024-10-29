import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const localizationMiddleware = createMiddleware(routing);

export default localizationMiddleware;
