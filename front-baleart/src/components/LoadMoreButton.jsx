

export default function LoadMoreButton({hasMoreFiltered, handleClick}) {
    return(
    <>
        {hasMoreFiltered && <div className="d-flex justify-content-center ">
            <button onClick={handleClick} className="mt-4 p-2 bg-blue-500 text-white rounded">Ver Más</button>
        </div>}
    </>
    )
}