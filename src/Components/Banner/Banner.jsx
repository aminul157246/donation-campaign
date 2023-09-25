import './Banner.css'
const handleSearch = () => {
const searchField = document.getElementById('search-field')
const searchText = searchField.value
console.log(searchText);

}


const Banner = () => {
    return (
        <div className='background h-[70vh]'>
            <h2 className='text-4xl font-extrabold text-black  text-center pt-48'>I Grow By Helping People In Need</h2>
            <div className='flex justify-center items-center pt-6'>
                <input className='pl-4 py-2' type="text" name="" id="search-field" placeholder='search here'/>
            
            <button onClick={()=> handleSearch()} className='text-xl font-bold pl-4'>search</button>
            </div>
        </div>
    );
};

export default Banner;