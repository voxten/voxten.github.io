import { motion } from 'framer-motion';
import { styles } from '../styles'

const Header = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row inset-0 items-start gap-5`}>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-[#915eff]' />
					<div className='w-1 sm:h-80 h-40 violet-gradient'/>
				</div>
				<div>
					<h1
						className={`${styles.headerHeadText} text-white`}>
						Hi I'm <span className='text-[#915eff]'>Voxten</span>
					</h1>
					<p className={`${styles.headerSubText} mt-2 text-white-100`}>
						I'm a Game Developer and Full-stack Developer. Located in Poland.
					</p>
				</div>
			</div>
			
			<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
				<a href='#about'>
					<div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
						<motion.dev
							animate={{ y: [0, 24, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
							className='w-3 h-3 rounded-full bg-secondary mb-1'
						/>
					</div>
				</a>
			</div>
		</section>
	)
};

export default Header;
