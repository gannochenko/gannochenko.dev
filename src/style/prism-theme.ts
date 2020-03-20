import prismTheme from 'prism-react-renderer/themes/duotoneDark';
import { theme as siteTheme } from './theme';

export const theme = prismTheme;
theme.plain.color = siteTheme.color.link.normal;
theme.styles[3].style.color = siteTheme.color.link.normal;
