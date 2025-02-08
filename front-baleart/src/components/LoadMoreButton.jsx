

export default function LoadMoreButton({hasMoreFiltered, handleClick, language}) {
    return(
    <>
        {hasMoreFiltered && <div className="d-flex justify-content-center mb-4 mt-0  ">
            <button onClick={handleClick} className=" p-2 bg-blue-500 text-white rounded">{language === 'esp' ? 'Ver Más' : language === 'cat' ? 'Veure més' : 'Show more'}</button>
        </div>}
    </>
    )
}