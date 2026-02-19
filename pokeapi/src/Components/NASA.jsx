export const NASA = ({ id, title, imageUrl }) => {
    return (
        <section className="card" style={{ width: '100%', marginBottom: '20px' }}>
            <div className="card-body">
                <h2 className="card-title">Resultado #{id}: {title}</h2>
            </div>
            
            <img 
                src={imageUrl} 
                className="card-img-top" 
                alt={title} 
                style={{ maxHeight: '450px', objectFit: 'cover' }}
            />
        </section>
    );
}

export default NASA;