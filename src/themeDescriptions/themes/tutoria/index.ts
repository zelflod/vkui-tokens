import { ThemeTutoriaDescription } from '@/interfaces/themes/tutoria';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/vk';

// const fontFamilyAccent = 'VKSansDisplay, Helvetica, Arial, sans-serif';
// const fontFamilyBase = 'VKSansText, Helvetica, Arial, sans-serif';
// const fontWeightAccent1 = 500;
// const fontWeightAccent2 = 500;
// const fontWeightBase3 = 400;

export const tutoriaTheme: ThemeTutoriaDescription = {
	...lightTheme,
	themeName: 'tutoria',
	themeNameBase: 'tutoria',
};

export const tutoriaDarkTheme: ThemeTutoriaDescription = {
	...darkTheme,
	themeName: 'tutoriaDark',
};
