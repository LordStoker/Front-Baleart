import { useEffect, useState } from 'react';
import ComentariosList from '../components/ComentariosList';
import { Spinner } from 'react-bootstrap';


export default function Comentarios({language}) {

    const [comentarios, setComentarios] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [comentariosDisplayed, setComentariosDisplayed] = useState([]);

    useEffect(() => {
        fetch('/api/comment')
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
            setComentarios(data.data);
            setComentariosDisplayed(data.data.slice(0, 12));
            setLoading(false);
          });
        } , []);

    function loadMore() {
        const moreComentarios = comentarios.slice(comentariosDisplayed.length, comentariosDisplayed.length + 6);
        setComentariosDisplayed([...comentariosDisplayed, ...moreComentarios]);
      }

      if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner animation="border" role="status"/>
            </div>
        );
    }
    return(
        <div className= "container mx-auto p-4 mt-4">        
            <ComentariosList
            comentarios={comentariosDisplayed}
            loadMore={loadMore}
            hasMoreFiltered={comentariosDisplayed.length < comentarios.length }
            language={language}/>
        </div>
    )
}