import mainImage from '../../assets/images/orphan.jpg'

const Main = () => {
    return (
        <main>
            <div className='relative h-[40vh] border-b border-black'>
                <img src={mainImage} className='absolute h-full w-full object-cover'/>
                <div className='absolute w-full h-full opacity-10 bg-black'></div>
                <div className='absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center
                    font-semibold text-white'>
                    <h1 className='text-3xl whitespace-nowrap'>Anpu Sahotharar Illam</h1>
                    <div className='w-[80%] h-[2px] bg-white mx-auto'></div>
                    <h3 className='text-xl'>- orphanage -</h3>
                </div>
            </div>
            {/* <div className='bg-black h-[1px] my-2 w-[100%] mx-auto'></div> */}
            <p className='px-4 mt-2 text-lg font-medium text-left'>
                Anpu Sahotharar Illam (ASI) is an orphanage, which opened in January 2001. The orphanage is located in Mannar town area in Mannar district, Northern Province of Sri Lanka, an area affected by ethnic war.
            </p>
            {/* <div className='bg-black h-[1px] my-2 w-[100%] mx-auto'></div> */}
            <ul className='px-4 text-4xl text-gray-600 font-semibold flex flex-col gap-4 mt-8'>
                <li className='border-b-2 border-gray-400 pb-1 flex'>
                    Who we are
                    <svg className="w-6 h-6 ml-auto mt-auto mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </li>
                <li className='border-b-2 border-gray-400 pb-1 flex'>
                    What we do
                    <svg className="w-6 h-6 ml-auto mt-auto mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </li>
                <li className='border-b-2 border-gray-400 pb-1 flex'>
                    How can I help?
                    <svg className="w-6 h-6 ml-auto mt-auto mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </li>
                <li className='border-b-2 border-gray-400 pb-1 flex'>
                    Contact
                    <svg className="w-6 h-6 ml-auto mt-auto mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </li>
            </ul>
        </main>
    )
}

export default Main