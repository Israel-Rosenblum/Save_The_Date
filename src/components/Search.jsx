
export default function MyCalendar() {

    return (
        <div className='max-w-[800px] mt-40 w-full mx-auto flex flex-col justify-center text-center'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold p-2'>אירוע מושלם בהישג יד</h1>
            <h2 className='md:text-7xl sm:text-6xl text-4xl font-bold  '>עם טכנולוגיה שהופכת חלומות למציאות</h2>
            <h3 className='md:text-2xl text-xl font-bold mt-4 '>חיפוש אולם לפי תאריך</h3>
            <button  className='bg-white w-[200px] rounded-md font-medium  mx-auto mt-9 py-3 text-black'
            >חיפוש לפי תאריך</button>
        </div>

    );
}
