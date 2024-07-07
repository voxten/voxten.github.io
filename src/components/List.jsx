import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../wrapper";
import { fadeIn } from "../utils/motion";
import React, { useRef, useState, useEffect } from "react";
import { firestore, storage } from "../firebase";
import {addDoc, collection, doc, getDocs, getDoc, deleteDoc, updateDoc, orderBy, query} from "@firebase/firestore"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";

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

const ListCard = ({ id, name, chip, memory_size, memory_type, img_link, handleDelete, handleEdit, refreshCards}) => {
	const [editingField, setEditingField] = useState(null);
	const [editPanel, setEditPanel] = useState(false);
	const [editedValue, setEditedValue] = useState('');
	const buttonText = editPanel ? "Cancel" : "Edit";

	const handleDeleteClick = async () => {
		handleDelete(id);
		refreshCards();
	};

	const handleFieldEditClick = (field) => {
		setEditingField(field);
		setEditedValue(field === 'name' ? name : field === 'chip' ? chip : field === 'memory_size' ? memory_size : memory_type);
	};

	const handleFieldChange = async (e) => {
		setEditedValue(e.target.value);
	};

	const handleSaveClick = async () => {
		try {
			// Reference to the document in Firestore
			const cardDocRef = doc(firestore, 'graphics cards', id);

			// Update the specific field in Firestore
			await updateDoc(cardDocRef, {
				[editingField]: editedValue
			});
			console.log("Card edited successfully!");

			// Clear the editing state
			setEditingField(null);
			setEditPanel(false);
			refreshCards();
		} catch (error) {
			console.error("Error editing card: ", error);
		}
	};

	return (
		<motion.div variants={fadeIn("up", "spring", id * 0.5, 0.75)}>
			<div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
				<div className="relative w-full h-[230px]">
					<img src={img_link} alt={name} className="w-full h-full object-cover rounded-2xl cursor-pointer" />
				</div>
				<div className="mt-5">
					{editingField ? (
							<div className="mt-5">
								<h4 className="text-white text-[20px] font-bold">Name: {editingField === 'name' ? <input type="text" value={editedValue} onChange={handleFieldChange} /> : name}</h4>
								<h4 className="text-white text-[20px] font-bold">Chip: {editingField === 'chip' ? <input type="text" value={editedValue} onChange={handleFieldChange} /> : chip}</h4>
								<h4 className="text-white text-[20px] font-bold">Memory Size: {editingField === 'memory_size' ? <input type="text" value={editedValue} onChange={handleFieldChange} /> : memory_size}</h4>
								<h4 className="text-white text-[20px] font-bold">Memory Type: {editingField === 'memory_type' ? <input type="text" value={editedValue} onChange={handleFieldChange} /> : memory_type}</h4>
							</div>
					) : (
						<>
							<h4 className="text-white text-[20px] font-bold">Name: {name}</h4>
							<h4 className="text-white text-[20px] font-bold">Chip: {chip}</h4>
							<h4 className="text-white text-[20px] font-bold">Memory Size: {memory_size}</h4>
							<h4 className="text-white text-[20px] font-bold">Memory Type: {memory_type}</h4>
						</>
					)}
				</div>
				{editingField ? (
					<>
						<button
							type="button"
							onClick={handleSaveClick}
							className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-5 my-2">
							Save
						</button>
						<button
							type="button"
							onClick={() => {setEditingField(null); setEditPanel(true)}}
							className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-5 my-2">
							Cancel
						</button>
					</>
				) : (
					<>
						<button
							type="button"
							onClick={handleDeleteClick}
							className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-5 my-2">
							Delete
						</button>
						<button
							type="button"
							onClick={() => {
								editPanel ? setEditPanel(false) : setEditPanel(true);
							}}
							className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-5 my-2">
							{buttonText}
						</button>
					</>
				)}
				{editingField === null && editPanel && (
					<>
						<button
							type="button"
							onClick={() => handleFieldEditClick('name')}
							className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-6 my-2">
							Edit Name
						</button>
						<button
							type="button"
							onClick={() => handleFieldEditClick('chip')}
							className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-6 my-2">
							Edit Chip
						</button>
						<button
							type="button"
							onClick={() => handleFieldEditClick('memory_size')}
							className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-6 my-2">
							Edit Memory Size
						</button>
						<button
							type="button"
							onClick={() => handleFieldEditClick('memory_type')}
							className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-6 my-2">
							Edit Memory Type
						</button>
					</>
				)}
			</div>
		</motion.div>
	);
};

const List = () => {
	//State
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(false);
	const [file, setFile] = useState(null);
	const [form, setForm] = useState({
		name: '',
		chip: '',
		memory_size: '',
		memory_type: '',
		img_link: '',
	});

	const [formOrder, setFormOrder] = useState({
		whatToOrder: 'name',
		orderB: 'asc',
	})

	//Referencje
	const formRef = useRef();
	const orderRef = useRef();
	const databaseRef = collection(firestore, 'graphics cards');
	const fileInputRef = useRef(null);

	useEffect(() => {
		getCards();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "img_link") {
			setFile(e.target.files[0]);
		} else {
			setForm({ ...form, [name]: value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			if (!file) {
				console.error('No file selected!');
				setLoading(false);
				return;
			}
			// Upload file to Firebase Storage
			const storageRef = ref(storage, file.name);
			await uploadBytes(storageRef, file);
			const imgUrl = await getDownloadURL(storageRef); // Update to correctly get download URL

			const addRef = await addDoc(databaseRef, form);
			const docRef = doc(databaseRef, addRef.id)
			await updateDoc(docRef, {
				img_link: imgUrl
			});

			console.log('Document written with ID: ', addRef.id);

			setFile(null);
			fileInputRef.current.value = null;
			setForm({ name: '', chip: '', memory_size: '', memory_type: '', img_link: '' });

			await getCards();
			setLoading(false);
		} catch (error) {
			console.error('Error adding document: ', error);
			setLoading(false);
		}
	};

	const handleOrderSubmit = async (e) => {
		e.preventDefault(); // Prevent default form submission
		try {
			setLoading(true);
			const q = query(databaseRef, orderBy(formOrder.whatToOrder, formOrder.orderB));
			const querySnapshot = await getDocs(q);
			const fetchedCards = [];
			querySnapshot.forEach((doc) => {
				fetchedCards.push(CardConverter.fromFirestore(doc));
			});
			setCards(fetchedCards);
			setLoading(false);
		} catch (error) {
			console.error('Error adding document: ', error);
			setLoading(false);
		}
	};

	const handleOrderChange = (e) => {
		const { name, value } = e.target;
		setFormOrder(prevState => ({
			...prevState,
			[name]: value
		}));
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

	const handleEdit = async (e) => {
		const { value } = e.target;
		try {
			// Reference to the document in Firestore
			const cardDocRef = doc(firestore, 'graphics cards', id);

			// Update the specific field in Firestore
			await updateDoc(cardDocRef, {
				[editingField]: value
			});
			console.log("Card edited successfully!");

			// Clear the editing state
			setEditingField(null);
		} catch (error) {
			console.error("Error editing card: ", error);
		}
	};

	const getCards = async () => {
		const querySnapshot = await getDocs(databaseRef);
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
							type="file"
							name="img_link"
							ref={fileInputRef}
							onChange={handleChange}
							className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
						{loading ? "Adding..." : "Add"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={fadeIn("up", "spring", 0.50)}
				className="flex-[0.75] bg-black-100 rounded-2xl p-8 mt-4">
				<p className={styles.sectionSubText}>Order Graphics Cards</p>
				<form ref={orderRef} onSubmit={handleOrderSubmit} className="mt-75 flex flex-col gap-8 flex-[0.5]">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-0">Order by</span>
						<select name="whatToOrder" value={formOrder.whatToOrder} onChange={handleOrderChange}>
							<option value="name">Name</option>
							<option value="chip">Chip</option>
							<option value="memory_size">Memory Size</option>
							<option value="memory_type">Memory Type</option>
						</select>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-2 mt-1">Order by</span>
						<select name="orderB" value={formOrder.orderB} onChange={handleOrderChange}>
							<option value="asc">Ascending</option>
							<option value="desc">Descending</option>
						</select>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outlne-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
						{loading ? "Ordering..." : "Order"}
					</button>
				</form>

			</motion.div>
			<motion.div variants={fadeIn("up", "spring", 0.50)}>
				<div className="mt-20 flex flex-wrap gap-7">
					{cards.map((card, index) => (
						<ListCard key={`card-${index}`} {...card} index={index} handleDelete={handleDelete} handleEdit={handleEdit} refreshCards={getCards} />
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(List, "list");