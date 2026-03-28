import { HEADING_FONTS, BODY_FONTS, MONO_FONTS } from '../../../../utils/randomTheme';

export const allFontOptions = Array.from(new Set([...HEADING_FONTS, ...BODY_FONTS])).sort();

export { HEADING_FONTS, BODY_FONTS };
