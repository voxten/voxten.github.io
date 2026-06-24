import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../utils/wrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { github, gitlab, discord } from "../assets";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_mzex6uj",
				"template_gqmtyfa",
				{
					from_name: form.name,
					to_name: "Voxten",
					from_email: form.email,
					to_email: "voxterman@gmail.com",
					message: form.message,
				},
				"qLtDy2FFyPUBxeLs2"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you for your message! I will get back to you as soon as possible.");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something went wrong. Please try again later.");
				}
			);
	};

	return (
		<div className="max-w-7xl mx-auto px-4 w-full">
			<motion.div
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className="flex flex-col gap-1"
			>
             <span className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">
                Get in touch
             </span>
				<h2 className="text-white font-extrabold md:text-[56px] sm:text-[46px] text-[36px] tracking-tight">
					Contact
				</h2>
			</motion.div>

			<div className="mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden items-start">
				<motion.div
					variants={fadeIn("up", "tween", 0.1, 1)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
					className="flex-1 w-full bg-gray-900/40 border border-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl"
				>
					<form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
						<label className="flex flex-col gap-2">
							<span className="text-white text-sm font-semibold tracking-wide">Your Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="What's your name?"
								required
								className="bg-black/30 border border-white/5 rounded-xl py-4 px-6 placeholder:text-gray-500 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-950/10 transition-all duration-300 font-medium text-sm"
							/>
						</label>

						<label className="flex flex-col gap-2">
							<span className="text-white text-sm font-semibold tracking-wide">Your Email</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="What's your email?"
								required
								className="bg-black/30 border border-white/5 rounded-xl py-4 px-6 placeholder:text-gray-500 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-950/10 transition-all duration-300 font-medium text-sm"
							/>
						</label>

						<label className="flex flex-col gap-2">
							<span className="text-white text-sm font-semibold tracking-wide">Your Message</span>
							<textarea
								rows="6"
								name="message"
								value={form.message}
								onChange={handleChange}
								placeholder="What do you want to say?"
								required
								className="bg-black/30 border border-white/5 rounded-xl py-4 px-6 placeholder:text-gray-500 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-950/10 transition-all duration-300 font-medium text-sm resize-none"
							/>
						</label>

						<button
							type="submit"
							className="bg-indigo-600 text-white font-bold py-3.5 px-8 w-full sm:w-fit rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm tracking-wide mt-2"
						>
							{loading ? "Sending..." : "Send Message"}
						</button>
					</form>
				</motion.div>

				<motion.div
					variants={fadeIn("left", "tween", 0.2, 1)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
					className="xl:w-[350px] w-full flex flex-col gap-4"
				>
					<div className="border-l-2 border-indigo-500/30 pl-4 py-2 mb-2">
						<p className="text-gray-400 text-sm leading-relaxed">
							Looking to collaborate on game engines, structural backends, or scalable frontend solutions? Drop a line here or hit me up across my digital pipelines.
						</p>
					</div>

					<div className="grid grid-cols-3 xl:grid-cols-1 gap-3 w-full">
						<a
							href="https://github.com/voxten"
							target="_blank"
							rel="noreferrer"
							className="group flex flex-col xl:flex-row items-center gap-3 p-4 bg-gray-900/20 border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/5 transition-all duration-300 text-center xl:text-left shadow-md"
						>
							<div className="p-2 rounded-xl bg-black/20 group-hover:bg-indigo-600/10 group-hover:scale-110 transition-all duration-300">
								<img alt="github" src={github} className="w-6 h-6 object-contain invert opacity-80 group-hover:opacity-100" />
							</div>
							<div className="flex flex-col">
								<span className="text-white text-xs font-bold tracking-tight">GitHub</span>
								<span className="text-gray-500 text-[10px] hidden xl:inline">@voxten</span>
							</div>
						</a>

						<a
							href="https://gitlab.com/voxten"
							target="_blank"
							rel="noreferrer"
							className="group flex flex-col xl:flex-row items-center gap-3 p-4 bg-gray-900/20 border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/5 transition-all duration-300 text-center xl:text-left shadow-md"
						>
							<div className="p-2 rounded-xl bg-black/20 group-hover:bg-orange-600/10 group-hover:scale-110 transition-all duration-300">
								<img alt="gitlab" src={gitlab} className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100" />
							</div>
							<div className="flex flex-col">
								<span className="text-white text-xs font-bold tracking-tight">GitLab</span>
								<span className="text-gray-500 text-[10px] hidden xl:inline">@voxten</span>
							</div>
						</a>

						<a
							href="https://discord.com/users/461303646198562817"
							target="_blank"
							rel="noreferrer"
							className="group flex flex-col xl:flex-row items-center gap-3 p-4 bg-gray-900/20 border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/5 transition-all duration-300 text-center xl:text-left shadow-md"
						>
							<div className="p-2 rounded-xl bg-black/20 group-hover:bg-violet-600/10 group-hover:scale-110 transition-all duration-300">
								<img alt="discord" src={discord} className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100" />
							</div>
							<div className="flex flex-col">
								<span className="text-white text-xs font-bold tracking-tight">Discord</span>
								<span className="text-gray-500 text-[10px] hidden xl:inline">Voxten</span>
							</div>
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");