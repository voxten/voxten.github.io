import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../wrapper";
import { fadeIn, fadeInProjects, textVariant } from "../utils/motion";
import React, { useRef, useState, useEffect } from "react";
import { firestore } from "../firebase";
import {addDoc, collection, doc, getDocs, getDoc, deleteDoc, updateDoc} from "@firebase/firestore"

class Card {
	constructor(id, name, chip, memory_size, memory_type, img_link) {
		this.id = id;
		this.name = name;
		this.chip = chip;
		this.memory_size = memory_size;
		this.memory_type = memory_type;
		this.img_link = img_link;
	}
	toString() {
		return (
			this.id + ', ' + this.name + ', ' + this.chip + ', ' + this.memory_size + ', ' + this.memory_type + ', ' + this.img_link
		);
	}
}

const CardConverter = {
	toFirestore: (card) => {
		return {
			id: card.id,
			name: card.name,
			chip: card.chip,
			memory_size: card.memory_size,
			memory_type: card.memory_type,
			img_link: card.img_link,
		};
	},
	fromFirestore: (snapshot) => {
		const data = snapshot.data();
		return new Card(
			snapshot.id,
			data.name,
			data.chip,
			data.memory_size,
			data.memory_type,
			data.img_link,
		);
	},
};

const ListCard = ({ id, name, chip, memory_size, memory_type, img_link, handleDelete, refreshCards}) => {
	const handleDeleteClick = async () => {
		handleDelete(id);
		refreshCards();
	};

	return (
		<motion.div variants={fadeInProjects("up", "spring", id * 0.5, 0.75)}>
			<div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
				<div className="relative w-full h-[230px]">
					<img src={img_link} alt={name} className="w-full h-full object-cover rounded-2xl cursor-pointer"/>
				</div>
				<div className="mt-5">
					<h4 className="text-white text-[20px] font-bold ">Name: {name}</h4>
					<h4 className="text-white text-[20px] font-bold ">Chip: {chip}</h4>
					<h4 className="text-white text-[20px] font-bold ">Memory Size: {memory_size}</h4>
					<h4 className="text-white text-[20px] font-bold ">Memory Type: {memory_type}</h4>
				</div>
				<button
					type="button"
					onClick={handleDeleteClick}
					className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-6 my-2">
					Delete
				</button>
				<button
					type="button"
					className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-6 my-2">
					Edit
				</button>
			</div>
		</motion.div>
	);
};

const List = () => {
	const [cards, setCards] = useState([]);
	const formRef = useRef();
	const ref = collection(firestore, 'graphics cards');
	const [form, setForm] = useState({
		name: '',
		chip: '',
		memory_size: '',
		memory_type: '',
		img_link: '',
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getCards();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const docRef = await addDoc(ref, form);
			console.log('Document written with ID: ', docRef.id);
			// Reset the form after successful submission
			setForm({ name: '', chip: '', memory_size: '', memory_type: '', img_link: '' });
			await getCards();
		} catch (error) {
			console.error('Error adding document: ', error);
		}
	};

	const handleDelete = async (id) => {
		try {
			// Reference to the document in Firestore
			const cardDocRef = doc(firestore, 'graphics cards', id);

			// Delete the document
			await deleteDoc(cardDocRef);
			console.log("Card deleted successfully!");
			// Fetch updated cards from Firebase
			const updatedCards = cards.filter(card => card.id !== id);
			setCards(updatedCards); // Update the state in the parent component
		} catch (error) {
			console.error("Error removing card: ", error);
		}
	};

	const getCards = async () => {
		const querySnapshot = await getDocs(ref);
		const fetchedCards = [];
		querySnapshot.forEach((doc) => {
			fetchedCards.push(CardConverter.fromFirestore(doc));
		});
		setCards(fetchedCards);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse inline-block gap-10 overflow-hidden w-full">
			<motion.div
				variants={fadeIn("up", "spring", 0.50)}
				className="flex-[0.75] bg-black-100 rounded-2xl p-8">
				<p className={styles.sectionSubText}>Manage Graphics Cards</p>
				<h3 className={styles.sectionHeadText}>Graphics Cards List</h3>
				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Graphics Card Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Graphics Card Name"
							className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Chip Name</span>
						<input
							type="text"
							name="chip"
							value={form.chip}
							onChange={handleChange}
							placeholder="Graphics Card Chip Name"
							className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Memory Size</span>
						<input
							type="number"
							name="memory_size"
							value={form.memory_size}
							onChange={handleChange}
							placeholder="Graphics Card Memory Size"
							className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Memory Type</span>
						<input
							type="text"
							name="memory_type"
							value={form.memory_type}
							onChange={handleChange}
							placeholder="Graphics Card Memory Type"
							className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Image Link</span>
						<input
							type="text"
							name="img_link"
							value={form.img_link}
							onChange={handleChange}
							placeholder="Graphics Card Image Link"
							className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>
			<motion.div variants={fadeIn("up", "spring", 0.50)}>
				<div className="mt-20 flex flex-wrap gap-7">
					{cards.map((card, index) => (
						<ListCard key={`card-${index}`} {...card} index={index} handleDelete={handleDelete} refreshCards={getCards} />
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(List, "list");