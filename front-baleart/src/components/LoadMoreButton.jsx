

export default function LoadMoreButton({hasMoreFiltered, handleClick}) {
    return(
    <>
        {hasMoreFiltered && <div className="d-flex justify-content-center mb-4 mt-0 ">
            <button onClick={handleClick} className=" p-2 bg-blue-500 text-white rounded">Ver Más</button>
        </div>}
    </>
    )
}