import React, { useState } from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="tour-card" style={styles.card}>
            <img src={image} alt={name} style={styles.image} />
            <div style={styles.content}>
                <h2 style={styles.title}>{name}</h2>
                <h4 style={styles.price}>${price}</h4>
                <p style={styles.info}>
                    {readMore ? info : `${info.substring(0, 100)}...`}
                    <button
                        onClick={() => setReadMore(!readMore)}
                        style={styles.readMoreBtn}
                    >
                        {readMore ? 'Show Less' : 'Read More'}
                    </button>
                </p>
                <button onClick={() => onRemove(id)} style={styles.removeBtn}>
                    Not Interested
                </button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    content: {
        padding: '16px',
    },
    title: {
        margin: '0 0 8px',
        fontSize: '1.5rem',
    },
    price: {
        color: '#2a9d8f',
        fontWeight: 'bold',
        marginBottom: '8px',
    },
    info: {
        fontSize: '0.9rem',
        lineHeight: '1.5',
        marginBottom: '16px',
    },
    readMoreBtn: {
        background: 'none',
        border: 'none',
        color: '#007BFF',
        cursor: 'pointer',
        padding: '0',
        fontSize: '0.9rem',
    },
    removeBtn: {
        backgroundColor: '#e63946',
        color: '#fff',
        border: 'none',
        padding: '10px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default TourCard;