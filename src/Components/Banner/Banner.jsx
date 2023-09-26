 
const handleSearch = () => {
const searchField = document.getElementById('search-field')
const searchText = searchField.value
console.log(searchText);
if(searchText === 'Health'){
    console.log('i am health');
     
}
}


const Banner = () => {
    return (
       <div>
         <div style={{ backgroundImage: `url('/Food.png')`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        opacity: '.5'}} className=' lg:relative  h-[70vh]'> </div>
            <div className='lg:absolute top-32 left-[400px]'>
            <h2 className='text-4xl font-extrabold text-black  text-center pt-48'>I Grow By Helping People In Need</h2>
            <div className='flex justify-center items-center pt-6'>
                <input className='pl-4 py-3 w-full' type="text" name="" id="search-field" placeholder='search here'/>
            
            <button onClick={()=> handleSearch()} className='btn ml-3 text-xl font-bold pl-4'>search</button>
            </div>
            </div>
        </div>
       
    );
};

export default Banner;