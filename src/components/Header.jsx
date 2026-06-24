import { motion } from 'framer-motion';

const Header = () => {
	return (
		<section className="relative w-full h-screen mx-auto flex items-center overflow-hidden bg-primary">
			{/* Background Layers */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
				<div className="absolute inset-0 max-w-7xl mx-auto w-full h-full pointer-events-none">
					<div className="absolute inset-0 bg-header-pattern bg-no-repeat bg-right-bottom md:bg-right lg:bg-contain bg-[length:auto_80%] md:opacity-80 opacity-20 mix-blend-screen" />
				</div>

				<div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
				<div className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-16 w-full flex flex-row items-start gap-6 relative z-10">
				{/* Vertical pin track layout */}
				<div className="flex flex-col justify-center items-center mt-3">
					<div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
					<div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-indigo-500 via-purple-500/40 to-transparent" />
				</div>

				<div className="flex flex-col gap-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<h1 className="font-extrabold text-white lg:text-[72px] sm:text-[56px] xs:text-[46px] text-[36px] tracking-tight leading-none">
							Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">Voxten</span>
						</h1>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						className="text-gray-400 font-medium lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[15px] max-w-2xl "
					>
						I'm a Game Developer and Full-stack Developer<br className="hidden sm:inline" />
						Located in <span className="text-white font-semibold">Poland</span>.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
						className="flex flex-wrap gap-4 mt-6"
					>
						<a
							href="#projects"
							className="bg-indigo-600 text-white font-semibold py-3 px-6 text-sm tracking-wide rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:scale-[1.02] transition-all duration-300"
						>
							View Portfolio
						</a>
						<a
							href="#skills"
							className="bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold py-3 px-6 text-sm tracking-wide rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
						>
							Explore Skills
						</a>
					</motion.div>
				</div>
			</div>

			<div className="absolute xs:bottom-10 bottom-3 w-full flex justify-center items-center z-10">
				<a href="#about">
					<div className="w-[30px] h-[54px] rounded-3xl border-2 border-gray-500 flex justify-center items-start p-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
						<motion.div
							animate={{
								y: [0, 20, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-2 h-2 rounded-full bg-indigo-400"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Header;