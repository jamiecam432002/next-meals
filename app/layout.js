import MainHeaderBackground from '@/ui/main-header/main-header-background';
import './globals.css';
import MainHeader from '@/ui/main-header/main-header';

export const metadata = {
	title: 'NextLevel Food',
	description: 'Delicous meals, shared by a food-loving community',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<MainHeader />
				{children}
			</body>
		</html>
	);
}
