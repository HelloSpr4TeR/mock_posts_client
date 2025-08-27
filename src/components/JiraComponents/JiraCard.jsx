import React from 'react';
import '../../styles/JiraCard.css';
import { FaExclamationCircle, FaClock, FaTag } from 'react-icons/fa';

export default function JiraCard({ card, onRemove }) {
    if (!card) return null;

    const formatDate = (dateStr) => {
        if (!dateStr) return '—';
        const date = new Date(dateStr);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    return (
        <div className="jira-card">
            <h3 className="card-title">{card.title || 'Без названия'}</h3>
            <p className="card-desc">{card.description || 'Нет описания'}</p>

            <div className="card-info">
                <p className="card-type">
                    <FaTag /> Тип: {card.type || '—'}
                </p>
                <p className="card-priority">
                    <FaExclamationCircle /> Важность: {card.priority || '—'}
                </p>
            </div>

            <div className="card-footer">
                <p className="card-created">
                    <FaClock /> Создано: {formatDate(card.createdAt)}
                </p>
                <p className="card-deadline">
                    <FaClock /> Дедлайн: {formatDate(card.deadline)}
                </p>
                <button className="card-del" onClick={onRemove}>✕</button>
            </div>

            {card.tags?.length > 0 && (
                <div className="card-tags">
                    {card.tags.map((tag, idx) => (
                        <span key={idx} className="card-tag">{tag}</span>
                    ))}
                </div>
            )}

            {card.images?.length > 0 && (
                <div className="card-images">
                    {card.images.map((img, idx) => (
                        <img key={idx} src={img} alt={`img-${idx}`} className="card-img" />
                    ))}
                </div>
            )}
        </div>
    );
}