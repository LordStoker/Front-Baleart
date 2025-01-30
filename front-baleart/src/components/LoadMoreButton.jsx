

export default function LoadMoreButton({hasMoreFiltered, handleClick}) {
    return(
    <>
        {hasMoreFiltered && <div className="d-flex justify-content-center loadMore">
            <button onClick={handleClick} className="btn btn-primary">Ver Más</button>
        </div>}
    </>
    )
}