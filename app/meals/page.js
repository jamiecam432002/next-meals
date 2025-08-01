import { Suspense } from 'react';
import Link from 'next/link';
import MealsGrid from '@/ui/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import styles from './page.module.css';
import MealsLoading from './loading';

async function Meals() {
	const meals = await getMeals();

	return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
	return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious meals, created{' '}
					<span className={styles.highlight}>by you</span>
				</h1>
				<p>
					Choose your favorite recipe and cook it yourself. It is easy and fun!
				</p>
				<p className={styles.cta}>
					<Link href='/meals/share'>Share Your Favorite Recipe</Link>
				</p>
			</header>
			<main className={styles.main}>
				<Suspense fallback={<MealsLoading />}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}
