import Image from 'next/image';
import styles from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default function MealPage({ params }) {
	const meal = getMeal(params.slug);

	if (!meal) {
		notFound();
	}

	meal.instructions = meal.instructions.replace(/\n/g, '<br />');
	return (
		<>
			<header className={styles.header}>
				<div className={styles.image}>
					<Image
						src={`https://jamiesportfoliobucket162.s3.amazonaws.com/${meal.image}`}
						fill
						alt={meal.title}
					/>
				</div>
				<div className={styles.headerText}>
					<h1>{meal.title}</h1>
					<p className={styles.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={styles.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={styles.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}></p>
			</main>
		</>
	);
}
