import prismTheme from 'prism-react-renderer/themes/duotoneDark';
import { theme as siteTheme } from '../../style/theme';

export const listingTheme = prismTheme;
listingTheme.plain.color = siteTheme.color.link.normal;
listingTheme.styles[3].style.color = siteTheme.color.link.normal;
