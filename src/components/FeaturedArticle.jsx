import football from '../assets/football.jpeg'

export default function FeaturedArticle() {
    return (
        <>
        <div className='my-10 relative'>
            <div className='absolute z-10 w-full md:w-1/2 md:h-[500px] h-[350px] flex gap-2 flex-col justify-end py-4 md:justify-center text-white'>
                <p className='w-full px-4'>Featured Story</p>
                <h2 className='font-bold w-full md:text-5xl px-4 text-2xl'>Football article title about football and stuff and this and that</h2>
                <p className='w-full px-4 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aspernatur vero provident delectus, laboriosam culpa cum. Vitae, neque?...</p>
            </div>
            <img src={football} alt="Featured Article Image" className=" object-cover rounded-lg md:h-[500px] h-[350px] brightness-[0.3] w-full"/>
        </div>
        </>
    )
}