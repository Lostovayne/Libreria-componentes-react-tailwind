export const Sidebar = () => {
    return (
        <div className='hidden md:flex flex-col items-center  min-h-screen w-[256px] 2xl:w-[310px] p-8  border-r border-gray-500/10'>
            <h2 className='text-2xl font-bold text-white text-start w-full'>
                LogoSidebar
            </h2>
            <ul
                className='w-full p-2 mx-10 flex flex-col mt-6 gap-6 
                 [&>li]:py-2 [&>li]:text-center [&>li]:rounded-lg  [&>li]:text-white '
            >
                <li className=' cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-500 '>
                    All
                </li>
                <li className=' cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-500 '>
                    Buttons
                </li>
                <li className=' cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-500 '>
                    Cards
                </li>
                <li className=' cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-500 '>
                    Inputs
                </li>
                <li className=' cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-500 '>
                    Title
                </li>
                <li className=' cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-500 '>
                    Forms
                </li>
                <li className=' cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-500 '>
                    My Favorites
                </li>
                <li className=' cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-500 '>
                    Logout
                </li>
            </ul>
        </div>
    );
};
