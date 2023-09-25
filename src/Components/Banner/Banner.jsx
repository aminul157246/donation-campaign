import './Banner.css'

const Banner = () => {
    return (
        <div className='background h-[70vh]'>
            <h2 className='text-4xl font-extrabold text-black  text-center pt-48'>I Grow By Helping People In Need</h2>
            <div className='flex justify-center items-center pt-6'>
                <input className='pl-4 py-2' type="text" name="" id="" placeholder='search here'/>
            
            <p className='text-xl font-bold pl-4'>search</p>
            </div>
        </div>
    );
};

export default Banner;