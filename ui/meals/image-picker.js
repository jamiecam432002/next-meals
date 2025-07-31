'use client';

import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState();
	const ref = useRef();

	function handleSelection() {
		ref.current.click();
	}

	function handleImageChange(e) {
		const file = event.target.files[0];
		if (!file) {
			setPickedImage(null);
			return;
		}

		const fileReader = new FileReader();
		fileReader.onload = () => {
			console.log(fileReader.result);
			setPickedImage(fileReader.result);
		};

		fileReader.readAsDataURL(file);
	}

	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{!pickedImage && <p>No image picked. Yet.</p>}
					{pickedImage && (
						<Image
							src={pickedImage}
							alt='The image uploaded by the user.'
							fill
						/>
					)}
				</div>
				<input
					className={styles.input}
					type='file'
					id={name}
					accept='image/png, image/jpeg'
					name={name}
					ref={ref}
					onChange={handleImageChange}
					required
				/>
				<button
					className={styles.button}
					type='button'
					onClick={handleSelection}>
					Pick an Image
				</button>
			</div>
		</div>
	);
}
